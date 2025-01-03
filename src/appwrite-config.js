import { Client, Databases, Account, Storage, ID } from "appwrite";

// Cliente de Appwrite
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6769a98a000bd6f0adde");

const databases = new Databases(client);
export const account = new Account(client);
const storage = new Storage(client);

// Constantes
const DATABASES_ID = "6777c6ec002d2bcbab93";
const ROUTINES_COLLECTION_ID = "6777c718001964602737";
const STORAGE_BUCKET_ID = "6777ce2400138fd99a0c";

// Validación de imágenes
const validateImage = (file) => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

  if (!allowedTypes.includes(file.type)) {
    throw new Error(
      "Tipo de archivo no permitido. Solo se permiten imágenes JPG, PNG y GIF."
    );
  }

  if (file.size > maxSize) {
    throw new Error(
      "La imagen es demasiado grande. El tamaño máximo permitido es 5MB."
    );
  }

  return true;
};

export const appwriteService = {
  async getImageUrl(fileId) {
    console.log(storage.getFileView(STORAGE_BUCKET_ID, fileId));

    return storage.getFileView(STORAGE_BUCKET_ID, fileId);
  },

  async uploadImage(file) {
    try {
      validateImage(file);
      const fileId = ID.unique();
      await storage.createFile(STORAGE_BUCKET_ID, fileId, file);
      const fileUrl = storage.getFileView(STORAGE_BUCKET_ID, fileId);
      return { fileId, fileUrl };
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      throw error;
    }
  },

  async deleteImage(fileId) {
    if (!fileId) return;
    try {
      await storage.deleteFile(STORAGE_BUCKET_ID, fileId);
    } catch (error) {
      console.error("Error al eliminar la imagen:", error);
      throw error;
    }
  },

  async createRoutine(routineData) {
    try {
      // Crear un array de strings para los pasos
      const stepsArray = await Promise.all(
        routineData.steps.map(async (step) => {
          // Crear un string que contenga la actividad, la hora y la imagen
          let stepString = `${step.activity} - ${step.time}`; // Formato básico

          // Si hay un archivo de imagen, súbelo y agrega la información
          if (step.imageFile && step.imageFile instanceof File) {
            const { fileId, fileUrl } = await this.uploadImage(step.imageFile);
            stepString += ` - ${fileId}`; // Agregar el ID de la imagen al string
          }

          return stepString; // Retornar el string del paso
        })
      );

      // Crear el documento de la rutina
      const routine = await databases.createDocument(
        DATABASES_ID,
        ROUTINES_COLLECTION_ID,
        ID.unique(),
        {
          name: routineData.name,
          icon: routineData.icon,
          color: routineData.color,
          borderColor: routineData.borderColor,
          textColor: routineData.textColor,
          steps: stepsArray, // Pasar el array de strings
        }
      );

      return routine;
    } catch (error) {
      console.error("Error al crear la rutina:", error);
      throw error;
    }
  },
  async getCurrentUserId() {
    try {
      const user = await account.get();
      return user.$id;
    } catch (error) {
      console.error("Error al obtener el usuario actual:", error);
      throw error;
    }
  },

  async getRoutineById(routineId) {
    try {
      return await databases.getDocument(
        DATABASES_ID,
        ROUTINES_COLLECTION_ID,
        routineId
      );
    } catch (error) {
      console.error("Error al obtener la rutina:", error);
      throw error;
    }
  },

  async updateRoutine(routineId, newData, oldData) {
    try {
      const processedSteps = await Promise.all(
        newData.steps.map(async (step) => {
          // Crear un string que contenga la actividad, la hora y la imagen
          let stepString = `${step.activity} - ${step.time}`; // Formato básico

          if (step.imageFile && step.imageFile instanceof File) {
            // Eliminar imagen anterior si existe
            const oldStep = oldData.steps.find(
              (s) => s.activity === step.activity && s.time === step.time
            );
            if (oldStep) {
              const oldImageId = oldStep.split(" - ")[2]; // Obtener el ID de la imagen del string anterior
              if (oldImageId) {
                await this.deleteImage(oldImageId); // Eliminar la imagen anterior
              }
            }

            // Subir nueva imagen
            const { fileId } = await this.uploadImage(step.imageFile);
            stepString += ` - ${fileId}`; // Agregar el ID de la nueva imagen al string
          }

          return stepString; // Retornar el string del paso
        })
      );

      const updatedRoutine = await databases.updateDocument(
        DATABASES_ID,
        ROUTINES_COLLECTION_ID,
        routineId,
        {
          ...newData,
          steps: processedSteps, // Pasar el array de strings
          updatedAt: new Date().toISOString(),
        }
      );

      return updatedRoutine;
    } catch (error) {
      console.error("Error al actualizar la rutina:", error);
      throw error;
    }
  },
  async deleteRoutine(routineId) {
    try {
      // Primero obtener la rutina para acceder a las imágenes
      const routine = await this.getRoutineById(routineId);

      // Eliminar todas las imágenes asociadas
      await Promise.all(
        routine.steps
          .filter((step) => step.imageId)
          .map((step) => this.deleteImage(step.imageId))
      );

      // Eliminar el documento
      await databases.deleteDocument(
        DATABASES_ID,
        ROUTINES_COLLECTION_ID,
        routineId
      );
    } catch (error) {
      console.error("Error al eliminar la rutina:", error);
      throw error;
    }
  },

  async getRoutines() {
    try {
      const response = await databases.listDocuments(
        DATABASES_ID,
        ROUTINES_COLLECTION_ID
      );
      console.log(response.documents);

      // No es necesario hacer nada especial aquí, ya que steps ya es un array de strings
      return response.documents;
    } catch (error) {
      console.error("Error al obtener las rutinas:", error);
      throw error;
    }
  },
};

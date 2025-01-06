/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Plus, Trash, X, Upload } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { appwriteService } from "../appwrite-config";

const EMOJI_LIST = [
  "📋",
  "🌅",
  "🌄",
  "🌇",
  "🌆",
  "🌃",
  "🌉",
  "🌌",
  "🏠",
  "🏡",
  "🏢",
  "🏣",
  "🏤",
  "🏥",
  "🏦",
  "🏨",
  "🌞",
  "🌙",
  "⭐",
  "🌟",
  "✨",
  "💫",
  "☀️",
  "🌤️",
  "📚",
  "📖",
  "📝",
  "✏️",
  "📌",
  "📍",
  "📎",
  "🔍",
  "🎯",
  "🎮",
  "🎨",
  "🎭",
  "🎪",
  "🎫",
  "🎟️",
  "🎭",
  "🍳",
  "🥘",
  "🥗",
  "🍕",
  "🍔",
  "🌮",
  "🌯",
  "🥪",
  "⚽",
  "🏀",
  "🏈",
  "⚾",
  "🥎",
  "🎾",
  "🏐",
  "🏉",
  "🧘",
  "🏃",
  "🚶",
  "🏋️",
  "🤸",
  "🏊",
  "🚴",
  "⛹️",
];

const COLOR_SCHEMES = [
  {
    color: "bg-purple-100",
    borderColor: "border-purple-300",
    textColor: "text-purple-600",
  },
  {
    color: "bg-blue-100",
    borderColor: "border-blue-300",
    textColor: "text-blue-600",
  },
  {
    color: "bg-green-100",
    borderColor: "border-green-300",
    textColor: "text-green-600",
  },
  // Puedes agregar más esquemas de colores aquí
];

const NewRoutineModal = ({ open, onClose, onSave, initialData = null }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [routineData, setRoutineData] = useState(() => ({
    name: "",
    icon: "📋",
    color: "bg-purple-100",
    borderColor: "border-purple-300",
    textColor: "text-purple-600",
    steps: [
      {
        id: 1,
        activity: "",
        time: "",
        image: "/api/placeholder/100/100",
        imageFile: null,
      },
    ],
  }));
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    if (initialData) {
      setRoutineData(initialData);
    }
  }, [initialData]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const resetForm = () => {
    setRoutineData({
      name: "",
      icon: "📋",
      color: "bg-purple-100",
      borderColor: "border-purple-300",
      textColor: "text-purple-600",
      steps: [
        {
          id: 1,
          activity: "",
          time: "",
          image: "/api/placeholder/100/100",
          imageFile: null,
        },
      ],
    });
    setError(null);
  };

  const addStep = () => {
    setRoutineData((prev) => ({
      ...prev,
      steps: [
        ...prev.steps,
        {
          id: prev.steps.length + 1,
          activity: "",
          time: "",
          image: "/api/placeholder/100/100",
          imageFile: null,
        },
      ],
    }));
  };

  const removeStep = (stepId) => {
    setRoutineData((prev) => ({
      ...prev,
      steps: prev.steps.filter((step) => step.id !== stepId),
    }));
  };

  const updateStep = (stepId, field, value) => {
    setRoutineData((prev) => ({
      ...prev,
      steps: prev.steps.map((step) =>
        step.id === stepId ? { ...step, [field]: value } : step
      ),
    }));
  };

  const handleImageChange = async (stepId, e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        throw new Error("La imagen no debe superar los 5MB");
      }

      const imageUrl = URL.createObjectURL(file);
      updateStep(stepId, "image", imageUrl);
      updateStep(stepId, "imageFile", file);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error("Error al procesar la imagen:", err);
    }
  };

  const validateForm = () => {
    if (!routineData.name.trim()) {
      throw new Error("El nombre de la rutina es requerido");
    }

    if (!routineData.steps.length) {
      throw new Error("La rutina debe tener al menos un paso");
    }

    if (!routineData.steps.every((step) => step.activity && step.time)) {
      throw new Error("Todos los pasos deben tener actividad y hora");
    }

    routineData.steps.forEach((step, index) => {
      if (!step.activity.trim()) {
        throw new Error(`El paso ${index + 1} debe tener una actividad`);
      }
      if (!step.time) {
        throw new Error(`El paso ${index + 1} debe tener una hora asignada`);
      }
    });
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setError(null);

      // Validar el formulario
      validateForm();

      // Guardar la rutina
      await onSave(routineData);

      // Resetear el formulario y cerrar el modal
      resetForm();
      onClose();
    } catch (err) {
      setError(err.message);
      console.error("Error al guardar la rutina:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-2xl rounded-lg bg-white shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-xl font-semibold">
              {initialData ? "Editar Rutina" : "Crear Nueva Rutina"}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {error && (
              <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre de la Rutina
                  </label>
                  <input
                    type="text"
                    value={routineData.name}
                    onChange={(e) =>
                      setRoutineData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Icono
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-2xl text-left"
                    >
                      {routineData.icon}
                    </button>
                    {showEmojiPicker && (
                      <div className="absolute right-0 mt-1 w-64 p-2 bg-white border rounded-md shadow-lg z-50 grid grid-cols-8 gap-1">
                        {EMOJI_LIST.map((emoji, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setRoutineData((prev) => ({
                                ...prev,
                                icon: emoji,
                              }));
                              setShowEmojiPicker(false);
                            }}
                            className="p-1 hover:bg-gray-100 rounded text-xl"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Color Scheme Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Esquema de Color
                </label>
                <div className="flex gap-2">
                  {COLOR_SCHEMES.map((scheme, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setRoutineData((prev) => ({
                          ...prev,
                          ...scheme,
                        }))
                      }
                      className={`w-8 h-8 rounded-full ${scheme.color} ${
                        scheme.borderColor
                      } border-2
                      ${
                        routineData.color === scheme.color
                          ? "ring-2 ring-offset-2 ring-purple-500"
                          : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Steps Section */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Pasos de la Rutina
                </label>
                {routineData.steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="grid grid-cols-4 gap-2 items-end bg-gray-50 p-4 rounded-lg"
                  >
                    <div className="col-span-4 mb-2">
                      <div className="flex items-center justify-center">
                        <div className="relative w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
                          <img
                            src={step.image}
                            alt={step.activity || "Imagen del paso"}
                            className="w-full h-full object-cover"
                          />
                          <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageChange(step.id, e)}
                              className="hidden"
                            />
                            <Upload className="w-8 h-8 text-white" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Actividad {index + 1}
                      </label>
                      <input
                        type="text"
                        value={step.activity}
                        onChange={(e) =>
                          updateStep(step.id, "activity", e.target.value)
                        }
                        placeholder="Describe la actividad"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Hora
                      </label>
                      <input
                        type="time"
                        value={step.time}
                        onChange={(e) =>
                          updateStep(step.id, "time", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <button
                        onClick={() => removeStep(step.id)}
                        disabled={routineData.steps.length === 1}
                        className="w-full p-2 text-gray-500 hover:bg-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                        title={
                          routineData.steps.length === 1
                            ? "No se puede eliminar el único paso"
                            : "Eliminar paso"
                        }
                      >
                        <Trash className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addStep}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Agregar Paso
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-2 border-t p-4">
            <button
              onClick={onClose}
              disabled={isSubmitting}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Guardando..." : "Guardar Rutina"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoutineModal;

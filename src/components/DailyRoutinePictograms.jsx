/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { appwriteService } from "../appwrite-config";
import NewRoutineModal from "./NewRoutineModal";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Plus, X, Clock, PlayCircle, ArrowRight, Trash } from "lucide-react";

const DailyRoutinePictograms = () => {
  const [routines, setRoutines] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [showNewRoutineModal, setShowNewRoutineModal] = useState(false);

  useEffect(() => {
    loadRoutines();
  }, []);

  const handleDeleteRoutine = async (routineId) => {
    console.log(routineId);

    try {
      await appwriteService.deleteRoutine(routineId); // Llama al servicio para eliminar la rutina
      await loadRoutines(); // Recargar rutinas después de eliminar
    } catch (error) {
      console.error("Error deleting routine:", error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  const loadRoutines = async () => {
    try {
      const fetchedRoutines = await appwriteService.getRoutines();

      // Parsear los pasos
      const parsedRoutines = await Promise.all(
        fetchedRoutines.map(async (routine) => {
          const steps = await Promise.all(
            routine.steps.map(async (step) => {
              const [activity, time, imageId] = step.split(" - ");
              const imageUrl = await appwriteService.getImageUrl(imageId); // Obtener la URL de la imagen
              return {
                activity,
                time,
                imageId,
                image: imageUrl, // Asignar la URL de la imagen
              };
            })
          );

          return {
            ...routine,
            steps,
          };
        })
      );

      setRoutines(parsedRoutines);
    } catch (error) {
      console.error("Error loading routines:", error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };
  console.log(routines);

  const handleSaveNewRoutine = async (routineData) => {
    try {
      await appwriteService.createRoutine(routineData);
      await loadRoutines(); // Recargar rutinas después de crear una nueva
    } catch (error) {
      console.error("Error saving new routine:", error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  const speakActivity = (activity) => {
    const utterance = new SpeechSynthesisUtterance(activity);
    utterance.lang = "es-ES";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const playRoutine = (routine) => {
    setSelectedRoutine(routine);
    setIsPlaying(true);
    setCurrentStep(0);
    speakActivity(routine.steps[0].activity);
  };

  const nextStep = () => {
    if (selectedRoutine && currentStep < selectedRoutine.steps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      speakActivity(selectedRoutine.steps[nextStep].activity);
    } else {
      setIsPlaying(false);
      setCurrentStep(0);
      setShowReward(true);
      speakActivity("¡Muy bien! Has completado la rutina");
      setTimeout(() => setShowReward(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-sky-400 tracking-wider">
        Mis Rutinas Diarias
      </h1>

      {/* Lista de Rutinas */}
      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        {routines.map((routine) => (
          <Card
            key={routine.$id}
            className={`
              transition-all duration-300 hover:scale-102
              border-4 ${routine.borderColor} ${routine.color}
              shadow-xl
            `}
          >
            <CardHeader>
              <CardTitle className="flex justify-between items-center text-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{routine.icon}</span>
                  <span className={routine.textColor}>{routine.name}</span>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className={`${routine.textColor} hover:scale-110 transition-transform`}
                  onClick={() => handleDeleteRoutine(routine.$id)} // Llama a la función de eliminación
                >
                  <Trash className="w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className={`${routine.textColor} hover:scale-110 transition-transform`}
                  onClick={() => playRoutine(routine)}
                >
                  <PlayCircle className="w-6 h-6" />
                </Button>
              </CardTitle>
            </CardHeader>
            <Card Content className="overflow-x-auto">
              <div className="flex gap-4 min-w-max p-2">
                {routine.steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Step container */}
                    <div className="relative flex flex-col items-center p-4 bg-white/80 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative group">
                        <img
                          src={step.image} // Usar la URL de la imagen
                          alt={step.activity}
                          className="w-24 h-24 object-cover rounded-xl mb-3 transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
                      </div>
                      <span
                        className={`text-lg font-medium ${routine.textColor} text-center`}
                      >
                        {step.activity}
                      </span>
                      <span className="text-sm text-gray-500 mt-1 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {step.time}
                      </span>
                    </div>

                    {/* Arrow connector */}
                    {index < routine.steps.length - 1 && (
                      <div className="hidden md:flex items-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                        <ArrowRight
                          className={`w-6 h-6 ${routine.textColor}`}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </Card>
        ))}
      </div>

      {/* Visualización de Rutina en Reproducción */}
      {isPlaying && selectedRoutine && (
        <Card
          className={`
          fixed inset-x-0 bottom-0 mx-auto max-w-md mb-6
          border-4 ${selectedRoutine.borderColor} ${selectedRoutine.color}
          transform transition-transform duration-300
        `}
        >
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{selectedRoutine.icon}</span>
                <span className={selectedRoutine.textColor}>
                  {selectedRoutine.name}
                </span>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsPlaying(false)}
                className={selectedRoutine.textColor}
              >
                <X className="w-5 h-5" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="relative group">
                <img
                  src={selectedRoutine.steps[currentStep].image}
                  alt={selectedRoutine.steps[currentStep].activity}
                  className="w-40 h-40 object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
              </div>
              <h3
                className={`text-2xl font-semibold mt-4 ${selectedRoutine.textColor}`}
              >
                {selectedRoutine.steps[currentStep].activity}
              </h3>
              <Button
                onClick={nextStep}
                className={`mt-6 text-xl px-8 py-6 rounded-xl
                  bg-white hover:bg-opacity-90 transition-all duration-300
                  ${selectedRoutine.textColor}
                  flex items-center gap-2
                `}
              >
                {currentStep < selectedRoutine.steps.length - 1 ? (
                  <>
                    Siguiente
                    <ArrowRight className="w-6 h-6" />
                  </>
                ) : (
                  "Terminar"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recompensa */}
      {showReward && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-3xl flex flex-col items-center animate-bounce shadow-2xl border-4 border-yellow-300">
            <div className="text-6xl mb-4">🌟</div>
            <h2 className="text-3xl font-bold text-yellow-600">¡Muy bien!</h2>
            <p className=" text-yellow-500 mt-2">¡Has completado tu rutina!</p>
          </div>
        </div>
      )}

      {/* Botón para Agregar Nueva Rutina */}
      <Button
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 p-0 bg-sky-200 hover:bg-sky-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        onClick={() => setShowNewRoutineModal(true)}
      >
        <Plus className="w-8 h-8" />
      </Button>

      {/* New Routine Modal */}
      <NewRoutineModal
        open={showNewRoutineModal}
        onClose={() => setShowNewRoutineModal(false)}
        onSave={handleSaveNewRoutine}
      />
    </div>
  );
};

export default DailyRoutinePictograms;

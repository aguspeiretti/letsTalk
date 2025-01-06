/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Volume2, ArrowRight, Star } from "lucide-react";
import vasoImage from "../assets/images/objetos/vaso.jpeg";
import platoImage from "../assets/images/objetos/plato.jpeg";
import cucharaImage from "../assets/images/objetos/cuchara.jpeg";

import cuchilloImage from "../assets/images/objetos/cuchillo.jpeg";
import aguaImage from "../assets/images/objetos/agua.jpeg";
import mateImage from "../assets/images/objetos/mate.jpeg";
import saleroImage from "../assets/images/objetos/salero.jpeg";
import galletasImage from "../assets/images/objetos/galletas.jpeg";
import panImage from "../assets/images/objetos/pan.jpeg";

const LanguageApp = () => {
  const [currentCategory, setCurrentCategory] = useState("daily");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const categories = {
    daily: {
      name: "Objetos Diarios",
      icon: "\ud83c\udfe0",
      color: "bg-pink-100",
      borderColor: "border-pink-300",
      textColor: "text-pink-600",
      words: [
        { word: "Vaso", image: { vasoImage } },
        { word: "Plato", image: { platoImage } },
        { word: "Cuchara", image: { cucharaImage } },
        { word: "Tenedor", image: "" },
        { word: "Cuchillo", image: { cuchilloImage } },
        { word: "Agua", image: { aguaImage } },
        { word: "Mate", image: { mateImage } },
        { word: "Sal", image: { saleroImage } },
        { word: "Galletas", image: { galletasImage } },
        { word: "Pan", image: { panImage } },
      ],
    },
    emotions: {
      name: "Emociones",
      icon: "\ud83d\ude0a",
      color: "bg-yellow-100",
      borderColor: "border-yellow-300",
      textColor: "text-yellow-600",
      words: [
        { word: "Feliz", image: "../assets/images/objetos" },
        { word: "Triste", image: "../assets/images/objetos" },
        { word: "Enojado", image: "../assets/images/objetos" },
        { word: "Hambriento", image: "../assets/images/objetos" },
        { word: "Asustado", image: "../assets/images/objetos" },
        { word: "Sorprendido", image: "../assets/images/objetos" },
        { word: "Cansado", image: "../assets/images/objetos" },
        { word: "Calmado", image: "../assets/images/objetos" },
      ],
    },
    animals: {
      name: "Animales",
      icon: "\ud83d\udc36",
      color: "bg-blue-100",
      borderColor: "border-blue-300",
      textColor: "text-blue-600",
      words: [
        { word: "Perro", image: "../assets/images/objetos" },
        { word: "Gato", image: "../assets/images/objetos" },
        { word: "P\u00e1jaro", image: "../assets/images/objetos" },
        { word: "Oveja", image: "../assets/images/objetos" },
        { word: "Caballo", image: "../assets/images/objetos" },
        { word: "Vaca", image: "../assets/images/objetos" },
        { word: "Pato", image: "../assets/images/objetos" },
        { word: "Pollito", image: "../assets/images/objetos" },
        { word: "Rat\u00f3n", image: "../assets/images/objetos" },
      ],
    },
    family: {
      name: "La Familia",
      icon: "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66",
      color: "bg-green-100",
      borderColor: "border-green-300",
      textColor: "text-green-600",
      words: [
        { word: "Mamá", image: "../assets/images/objetos" },
        { word: "Papá", image: "../assets/images/objetos" },
        { word: "Joaqui", image: "../assets/images/objetos" },
        { word: "Abuelo Guille", image: "../assets/images/objetos" },
        { word: "Abuela Silvia", image: "../assets/images/objetos" },
        { word: "Abuelo Omar", image: "../assets/images/objetos" },
        { word: "Abuela Mary", image: "../assets/images/objetos" },
        { word: "Tío Nico", image: "../assets/images/objetos" },
        { word: "Tío Pablo", image: "../assets/images/objetos" },
        { word: "Tía Agos", image: "../assets/images/objetos" },
        { word: "Tío Pao", image: "../assets/images/objetos" },
      ],
    },
    colors: {
      name: "Colores",
      icon: "\ud83c\udfa8",
      color: "bg-red-100",
      borderColor: "border-red-300",
      textColor: "text-red-600",
      words: [
        { word: "Rojo", image: "../assets/images/objetos" },
        { word: "Azul", image: "../assets/images/objetos" },
        { word: "Amarillo", image: "../assets/images/objetos" },
        { word: "Verde", image: "../assets/images/objetos" },
        { word: "Naranja", image: "../assets/images/objetos" },
        { word: "Rosa", image: "../assets/images/objetos" },
        { word: "Blanco", image: "../assets/images/objetos" },
        { word: "Negro", image: "../assets/images/objetos" },
        { word: "Marrón", image: "../assets/images/objetos" },
        { word: "Morado", image: "../assets/images/objetos" },
      ],
    },
    numbers: {
      name: "Números y Cantidades",
      icon: "\ud83d\udd22",
      color: "bg-red-100",
      borderColor: "border-red-300",
      textColor: "text-red-600",
      words: [
        { word: "Uno", image: "../assets/images/objetos" },
        { word: "Dos", image: "../assets/images/objetos" },
        { word: "Tres", image: "../assets/images/objetos" },
        { word: "Cuatro", image: "../assets/images/objetos" },
        { word: "Cinco", image: "../assets/images/objetos" },
        { word: "Seis", image: "../assets/images/objetos" },
        { word: "Siete", image: "../assets/images/objetos" },
        { word: "Ocho", image: "../assets/images/objetos" },
        { word: "Nueve", image: "../assets/images/objetos" },
        { word: "Diez", image: "../assets/images/objetos" },
      ],
    },
    shapes: {
      name: "Formas y Figuras",
      icon: "\u25b2",
      color: "bg-teal-100",
      borderColor: "border-teal-300",
      textColor: "text-teal-600",
      words: [
        { word: "Círculo", image: "../assets/images/objetos" },
        { word: "Cuadrado", image: "../assets/images/objetos" },
        { word: "Triángulo", image: "../assets/images/objetos" },
        { word: "Rectángulo", image: "../assets/images/objetos" },
        { word: "Estrella", image: "../assets/images/objetos" },
        { word: "Corazón", image: "../assets/images/objetos" },
      ],
    },
    transport: {
      name: "Transportes",
      icon: "\ud83d\ude97",
      color: "bg-orange-100",
      borderColor: "border-orange-300",
      textColor: "text-orange-600",
      words: [
        { word: "Auto", image: "../assets/images/objetos" },
        { word: "Avión", image: "../assets/images/objetos" },
        { word: "Barco", image: "../assets/images/objetos" },
        { word: "Tren", image: "../assets/images/objetos" },
        { word: "Bicicleta", image: "../assets/images/objetos" },
        { word: "Camión", image: "../assets/images/objetos" },
        { word: "Moto", image: "../assets/images/objetos" },
        { word: "Helicóptero", image: "../assets/images/objetos" },
      ],
    },
    food: {
      name: "Comidas y Bebidas",
      icon: "\ud83c\udf4e",
      color: "bg-lime-100",
      borderColor: "border-lime-300",
      textColor: "text-lime-600",
      words: [
        { word: "Manzana", image: "../assets/images/objetos" },
        { word: "Banana", image: "../assets/images/objetos" },
        { word: "Leche", image: "../assets/images/objetos" },
        { word: "Chocolate", image: "../assets/images/objetos" },
        { word: "Helado", image: "../assets/images/objetos" },
      ],
    },
    clothing: {
      name: "Ropa y Accesorios",
      icon: "\ud83d\udc55",
      color: "bg-gray-100",
      borderColor: "border-gray-300",
      textColor: "text-gray-600",
      words: [
        { word: "Remera", image: "../assets/images/objetos" },
        { word: "Pantalón", image: "../assets/images/objetos" },
        { word: "Zapatillas", image: "../assets/images/objetos" },
        { word: "Short", image: "../assets/images/objetos" },
        { word: "calzoncillo", image: "../assets/images/objetos" },
      ],
    },
    actions: {
      name: "Acciones Básicas",
      icon: "\ud83e\udd38",
      color: "bg-indigo-100",
      borderColor: "border-indigo-300",
      textColor: "text-indigo-600",
      words: [
        { word: "Comer", image: "../assets/images/objetos" },
        { word: "Beber", image: "../assets/images/objetos" },
        { word: "Dormir", image: "../assets/images/objetos" },
        { word: "Jugar", image: "../assets/images/objetos" },
        { word: "Correr", image: "../assets/images/objetos" },
        { word: "Leer", image: "../assets/images/objetos" },
        { word: "Escribir", image: "../assets/images/objetos" },
      ],
    },
    weather: {
      name: "Estaciones y Clima",
      icon: "\u2600\ufe0f",
      color: "bg-cyan-100",
      borderColor: "border-cyan-300",
      textColor: "text-cyan-600",
      words: [
        { word: "Sol", image: "../assets/images/objetos" },
        { word: "Lluvia", image: "../assets/images/objetos" },
        { word: "Viento", image: "../assets/images/objetos" },
        { word: "Nieve", image: "../assets/images/objetos" },
        { word: "Calor", image: "../assets/images/objetos" },
        { word: "Frío", image: "../assets/images/objetos" },
      ],
    },
    places: {
      name: "Lugares Comunes",
      icon: "\ud83c\udfe1",
      color: "bg-green-100",
      borderColor: "border-green-300",
      textColor: "text-green-600",
      words: [
        { word: "Casa", image: "../assets/images/objetos" },
        { word: "Escuela", image: "../assets/images/objetos" },
        { word: "Parque", image: "../assets/images/objetos" },
        { word: "Tienda", image: "../assets/images/objetos" },
        { word: "Plaza", image: "../assets/images/objetos" },
        { word: "Hospital", image: "../assets/images/objetos" },
      ],
    },
  };

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      const spanishVoices = availableVoices.filter((voice) =>
        voice.lang.startsWith("es")
      );
      setVoices(spanishVoices);

      if (spanishVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(spanishVoices[0]);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speakWord = (word) => {
    window.speechSynthesis.cancel();

    if (selectedVoice) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.voice = selectedVoice;
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNextWord = () => {
    const categoryWords = categories[currentCategory].words;
    if (currentWordIndex < categoryWords.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      setCurrentWordIndex(0);
      showSuccessReward();
    }
  };

  const showSuccessReward = () => {
    setShowReward(true);
    speakWord("¡Muy bien! ¡Eres increíble!");
    setTimeout(() => setShowReward(false), 2000);
  };

  const currentWord = categories[currentCategory].words[currentWordIndex];

  console.log(currentWord);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 p-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-4">
        {/* Categories Grid */}
        <div className="md:col-span-5 lg:col-span-4 h-[60vh] md:h-[90vh] overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2">
            {Object.entries(categories).map(([key, category]) => (
              <div
                key={key}
                onClick={() => {
                  setCurrentCategory(key);
                  setCurrentWordIndex(0);
                }}
                className={`
                cursor-pointer rounded-xl p-2 border-2 transition-all duration-300
                ${category.color} ${category.borderColor}
                ${
                  currentCategory === key
                    ? "transform scale-105 shadow-lg"
                    : "hover:scale-102"
                }
              `}
              >
                <div className="text-2xl text-center">{category.icon}</div>
                <p
                  className={`text-center text-xs sm:text-sm font-bold ${category.textColor}`}
                >
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-7 lg:col-span-8">
          <Card
            className={`border-2 ${categories[currentCategory].borderColor} ${categories[currentCategory].color}`}
          >
            <CardHeader className="p-4">
              <CardTitle
                className={`text-center text-3xl ${categories[currentCategory].textColor}`}
              >
                {currentWord.word}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="relative aspect-video mb-4">
                <img
                  src={currentWord.image[Object.keys(currentWord.image)[0]]}
                  alt={currentWord.word}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => speakWord(currentWord.word)}
                  className={`${categories[currentCategory].textColor}`}
                >
                  <Volume2 className="w-5 h-5 mr-2" />
                  Escuchar
                </Button>
                <Button
                  onClick={handleNextWord}
                  className={`${categories[currentCategory].textColor}`}
                >
                  Siguiente
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recompensa */}
      {showReward && (
        <div className="fixed inset-0 flex items-center justify center bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-3xl flex flex-col items-center animate-bounce shadow-2xl border-4 border-yellow-300">
            <div className="text-6xl mb-4">🌟</div>
            <h2 className="text-3xl font-bold text-yellow-600">¡Muy bien!</h2>
            <p className="text-yellow-500 mt-2">¡Eres increíble!</p>
          </div>
        </div>
      )}

      {/* Selector de Voz (oculto visualmente pero funcional) */}
      <select
        className="fixed bottom-4 right-4 border rounded p-2 bg-white/80 backdrop-blur-sm"
        value={selectedVoice?.name || ""}
        onChange={(e) => {
          const voice = voices.find((v) => v.name === e.target.value);
          setSelectedVoice(voice);
        }}
      >
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageApp;

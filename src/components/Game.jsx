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

const LanguageApp = () => {
  const [currentCategory, setCurrentCategory] = useState("daily");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  const categories = {
    daily: {
      name: "Objetos Diarios",
      icon: "🏠",
      color: "bg-pink-100",
      borderColor: "border-pink-300",
      textColor: "text-pink-600",
      words: [
        { word: "Vaso", image: "/api/placeholder/200/200" },
        { word: "Plato", image: "/api/placeholder/200/200" },
        { word: "Cuchara", image: "/api/placeholder/200/200" },
      ],
    },
    emotions: {
      name: "Emociones",
      icon: "😊",
      color: "bg-yellow-100",
      borderColor: "border-yellow-300",
      textColor: "text-yellow-600",
      words: [
        { word: "Feliz", image: "/api/placeholder/200/200" },
        { word: "Triste", image: "/api/placeholder/200/200" },
        { word: "Enojado", image: "/api/placeholder/200/200" },
      ],
    },
    animals: {
      name: "Animales",
      icon: "🐶",
      color: "bg-blue-100",
      borderColor: "border-blue-300",
      textColor: "text-blue-600",
      words: [
        { word: "Perro", image: "/api/placeholder/200/200" },
        { word: "Gato", image: "/api/placeholder/200/200" },
        { word: "Pájaro", image: "/api/placeholder/200/200" },
      ],
    },
    family: {
      name: "La Familia",
      icon: "👨‍👩‍👧‍👦",
      color: "bg-green-100",
      borderColor: "border-green-300",
      textColor: "text-green-600",
      words: [
        { word: "Mama", image: "/api/placeholder/200/200" },
        { word: "Papa", image: "/api/placeholder/200/200" },
        { word: "Joaqui", image: "/api/placeholder/200/200" },
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

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="flex gap-6 p-4 max-w-6xl mx-auto">
        {/* Barra lateral de categorías */}
        <div className="w-48 space-y-4">
          {Object.entries(categories).map(([key, category]) => (
            <div
              key={key}
              onClick={() => {
                setCurrentCategory(key);
                setCurrentWordIndex(0);
              }}
              className={`
                cursor-pointer rounded-2xl p-4 border-4 transition-all duration-300
                ${category.color} ${category.borderColor}
                ${
                  currentCategory === key
                    ? "transform scale-105 shadow-lg"
                    : "hover:scale-102"
                }
              `}
            >
              <div className="text-4xl mb-2 text-center">{category.icon}</div>
              <p className={`text-center font-bold ${category.textColor}`}>
                {category.name}
              </p>
              {currentCategory === key && (
                <div className="flex justify-center mt-2">
                  <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Área principal de juego */}
        <div className="flex-1">
          <Card
            className={`
            border-4 ${categories[currentCategory].borderColor}
            ${categories[currentCategory].color} shadow-xl
          `}
          >
            <CardHeader>
              <CardTitle
                className={`
                text-center text-4xl ${categories[currentCategory].textColor}
                font-bold tracking-wider
              `}
              >
                {currentWord.word}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6 p-8">
              <div className="relative group">
                <img
                  src={currentWord.image}
                  alt={currentWord.word}
                  className="w-80 h-80 rounded-3xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300" />
              </div>

              <div className="flex gap-6 mt-4">
                <Button
                  size="lg"
                  onClick={() => speakWord(currentWord.word)}
                  className={`
                    flex items-center gap-3 text-xl px-8 py-6 rounded-2xl
                    bg-white hover:bg-opacity-90 transition-all duration-300
                    ${categories[currentCategory].textColor}
                  `}
                >
                  <Volume2 className="w-8 h-8" />
                  Escuchar
                </Button>

                <Button
                  size="lg"
                  onClick={handleNextWord}
                  className={`
                    flex items-center gap-3 text-xl px-8 py-6 rounded-2xl
                    bg-white hover:bg-opacity-90 transition-all duration-300
                    ${categories[currentCategory].textColor}
                  `}
                >
                  Siguiente
                  <ArrowRight className="w-8 h-8" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recompensa */}
      {showReward && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
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

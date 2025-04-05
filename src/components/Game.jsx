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
import { categories } from "../categories";

console.log(categories);

const LanguageApp = () => {
  const [currentCategory, setCurrentCategory] = useState("daily");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      utterance.rate = 0.9;  // Velocidad un poco más natural
      utterance.pitch = 1.1; // Tono ligeramente más alto
      utterance.volume = 1;
      // Agregamos una pequeña pausa al inicio y final para que suene más natural
      const wordWithPauses = `, ${word}, `;
      utterance.text = wordWithPauses;
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
    // Agregamos pausas naturales con puntuación
    speakWord("¡Muy bien! ... ¡Eres increíble!");
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
                  src={
                    currentWord.image || "/src/assets/images/placeholder.png"
                  }
                  alt={currentWord.word}
                  className="w-full h-full object-contain rounded-xl"
                  onLoad={() => speakWord(currentWord.word)}
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

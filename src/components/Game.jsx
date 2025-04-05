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
      
      // Prioritize preferred voices
      const sortedVoices = spanishVoices.sort((a, b) => {
        const preferredVoices = [
          "Google español de Estados Unidos",
          "Microsoft Sabina Desktop - Spanish (Mexico)",
          "Spanish (Latin America)"
        ];
        
        const aIndex = preferredVoices.findIndex(v => a.name.includes(v));
        const bIndex = preferredVoices.findIndex(v => b.name.includes(v));
        
        if (aIndex !== -1 && bIndex === -1) return -1;
        if (bIndex !== -1 && aIndex === -1) return 1;
        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
        return 0;
      });
      
      setVoices(sortedVoices);
      
      if (sortedVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(sortedVoices[0]);
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

  // Add handlePreviousWord function after handleNextWord
  const handlePreviousWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
    } else {
      setCurrentWordIndex(categories[currentCategory].words.length - 1);
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
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 p-2 sm:p-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-2 sm:gap-4">
        {/* Categories Grid - Adjusted for better mobile view */}
        <div className="md:col-span-5 lg:col-span-4 h-[40vh] md:h-[90vh] overflow-y-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-2 gap-2">
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
                <div className="text-3xl sm:text-4xl text-center">{category.icon}</div>
                <p
                  className={`text-center text-xs sm:text-sm font-bold ${category.textColor}`}
                >
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content - Improved card layout */}
        <div className="md:col-span-7 lg:col-span-8">
          <Card
            className={`border-4 ${categories[currentCategory].borderColor} ${categories[currentCategory].color}`}
          >
            <CardHeader className="p-3 sm:p-4">
              <CardTitle
                className={`text-center text-4xl sm:text-5xl ${categories[currentCategory].textColor}`}
              >
                {currentWord.word}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4">
              <div className="relative aspect-video mb-6">
                <img
                  src={
                    currentWord.image || "/src/assets/images/placeholder.png"
                  }
                  alt={currentWord.word}
                  className="w-full h-full object-contain rounded-xl"
                  onLoad={() => speakWord(currentWord.word)}
                />
              </div>
              {/* Improved button layout */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => speakWord(currentWord.word)}
                  className={`text-xl py-6 px-8 rounded-2xl ${categories[currentCategory].textColor}`}
                >
                  <Volume2 className="w-8 h-8 mr-3" />
                  Escuchar
                </Button>
                <div className="flex gap-4">
                  <Button
                    onClick={handlePreviousWord}
                    className={`text-xl py-6 px-8 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white`}
                  >
                    <ArrowRight className="w-8 h-8 mr-3 rotate-180" />
                    Anterior
                  </Button>
                  <Button
                    onClick={handleNextWord}
                    className={`text-xl py-6 px-8 rounded-2xl bg-green-500 hover:bg-green-600 text-white`}
                  >
                    Siguiente
                    <ArrowRight className="w-8 h-8 ml-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Voice selector moved to top right */}
      <select
        className="fixed top-4 right-4 border-2 rounded-xl p-2 bg-white/90 backdrop-blur-sm text-sm"
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

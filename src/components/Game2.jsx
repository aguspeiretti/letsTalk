import { useState, useEffect } from "react";

const palabras = [
  { id: 1, palabra: "Perro", imagen: "/assets/images/perro.png" },
  { id: 2, palabra: "Gato", imagen: "/assets/images/gato.png" },
  { id: 3, palabra: "Pájaro", imagen: "/assets/images/pajaro.png" },
  { id: 4, palabra: "Pez", imagen: "/assets/images/pez.png" },
];

const Game2 = () => {
  const [palabraActual, setPalabraActual] = useState(
    palabras[Math.floor(Math.random() * palabras.length)]
  );
  const [audioUrl, setAudioUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Puedes obtener una API key gratuita en https://elevenlabs.io
  const ELEVEN_LABS_API_KEY =
    "sk_b63a53a95bb2dad2e5eb0f8d632743b983cd6b7796b8e5db";
  // ID de la voz en español que prefieras (puedes elegir una desde el dashboard)
  const VOICE_ID = "yoZ06aMxZJJ28mfd3POQ";

  const generarAudio = async (texto) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "xi-api-key": ELEVEN_LABS_API_KEY,
          },
          body: JSON.stringify({
            text: texto,
            model_id: "eleven_multilingual_v2",
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75,
            },
          }),
        }
      );

      if (!response.ok) throw new Error("Error al generar el audio");

      const audioBlob = await response.blob();
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);

      // Reproducir el audio
      const audio = new Audio(url);
      audio.play();
    } catch (error) {
      console.error("Error:", error);
      // Fallback al sintetizador de voz del navegador
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = "es-ES";
      utterance.pitch = 1.2;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } finally {
      setIsLoading(false);
    }
  };

  const cambiarPalabra = () => {
    // Limpiar el audio anterior
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }
    setPalabraActual(palabras[Math.floor(Math.random() * palabras.length)]);
  };

  // Limpiar URLs de audio al desmontar el componente
  useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Juego de Adivina la Palabra</h2>
      <img
        src={palabraActual.imagen}
        alt={palabraActual.palabra}
        className="w-48 h-48 object-contain mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-4">{palabraActual.palabra}</h3>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => generarAudio(palabraActual.palabra)}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isLoading ? "Generando..." : "Reproducir Sonido"}
        </button>
        <button
          onClick={cambiarPalabra}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Cambiar Palabra
        </button>
      </div>
    </div>
  );
};

export default Game2;

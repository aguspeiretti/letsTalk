/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Star, Home, Sparkles } from "lucide-react";
import LanguageApp from "./Game";
import DailyRoutinePictograms from "./DailyRoutinePictograms";
import { useUser } from "../context/UserContext";
import speak from "../assets/images/speacker.jpg";
import rutine from "../assets/images/kids.jpg";
import toy from "../assets/images/toys.png";

const HomePage = () => {
  const [currentView, setCurrentView] = React.useState("home");
  const user = useUser();
  const renderContent = () => {
    switch (currentView) {
      case "language":
        return <LanguageApp />;
      case "routines":
        return <DailyRoutinePictograms />;
      default:
        return (
          <div className="max-w-4xl mx-auto p-4 space-y-6">
            {/* Personaje de bienvenida */}
            <div className="text-center mb-8">
              <div className="bg-yellow-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-purple-600">
                ¡Hola Joaqui!!
              </h2>
              <p className="text-purple-400">¿Qué quieres hacer hoy?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tarjeta de Juegos de Lenguaje */}
              <Card
                className="cursor-pointer transform hover:scale-105 transition-all duration-200 border-4 border-pink-200 bg-pink-50"
                onClick={() => setCurrentView("language")}
              >
                <CardContent className="p-6">
                  <div className="bg-pink-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={speak}
                      alt="Mascota parlante"
                      className="w-16 h-16 rounded-full object-fill"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-pink-600 text-center mb-2">
                    ¡Vamos a Hablar!
                  </h3>
                  <p className="text-pink-500 text-center">
                    Aprende palabras nuevas jugando
                  </p>
                  <div className="mt-4 flex justify-center gap-2">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <Star className="w-6 h-6 text-yellow-400" />
                    <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>

              {/* Tarjeta de Rutinas */}
              <Card
                className="cursor-pointer transform hover:scale-105 transition-all duration-200 border-4 border-blue-200 bg-blue-50"
                onClick={() => setCurrentView("routines")}
              >
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={rutine}
                      alt="Mascota del calendario"
                      className="w-16 h-16 rounded-full object-center object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 text-center mb-2">
                    ¡Mi Día a Día!
                  </h3>
                  <p className="text-blue-500 text-center">
                    Descubre tus actividades diarias
                  </p>
                  <div className="mt-4 flex justify-center gap-2">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <Star className="w-6 h-6 text-yellow-400" />
                    <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Panel de Logros */}
            {/* <Card className="border-4 border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-center text-purple-600">
                  ¡Tus Estrellitas! ⭐
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-yellow-100 p-4 rounded-xl text-center transform hover:scale-105 transition-all duration-200">
                    <div className="text-3xl mb-2">🎯</div>
                    <h3 className="font-bold text-2xl text-purple-600">12</h3>
                    <p className="text-sm text-purple-500">Palabritas</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-xl text-center transform hover:scale-105 transition-all duration-200">
                    <div className="text-3xl mb-2">🌟</div>
                    <h3 className="font-bold text-2xl text-purple-600">5</h3>
                    <p className="text-sm text-purple-500">Rutinas</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-xl text-center transform hover:scale-105 transition-all duration-200">
                    <div className="text-3xl mb-2">🎨</div>
                    <h3 className="font-bold text-2xl text-purple-600">3</h3>
                    <p className="text-sm text-purple-500">Días</p>
                  </div>
                  <div className="bg-pink-100 p-4 rounded-xl text-center transform hover:scale-105 transition-all duration-200">
                    <div className="text-3xl mb-2">🎮</div>
                    <h3 className="font-bold text-2xl text-purple-600">8</h3>
                    <p className="text-sm text-purple-500">Jueguitos</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-100 to-pink-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            className="text-2xl font-bold text-purple-600 flex items-center gap-2"
            onClick={() => setCurrentView("home")}
          >
            <img src={toy} alt="Logo" className="w-10 h-10 rounded-full" />
            <span className="hidden md:inline text-blue-300 ml-4 text-xl">
              Let's play!!
            </span>
          </button>
          <div className="flex gap-2">
            {currentView !== "home" && (
              <button
                onClick={() => setCurrentView("home")}
                className="p-2 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors"
              >
                <Home className="w-6 h-6 text-purple-600" />
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={() => user.logout()}
            className="button bg-blue-200 text-blue-500 py-[4px] px-6 rounded-lg"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-6 px-4">{renderContent()}</main>
    </div>
  );
};

export default HomePage;

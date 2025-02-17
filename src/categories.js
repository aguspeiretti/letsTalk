import vasoImage from "../assets/images/objetos/vaso.jpeg";
import platoImage from "../assets/images/objetos/plato.jpeg";
import cucharaImage from "../assets/images/objetos/cuchara.jpeg";
import cuchilloImage from "../assets/images/objetos/cuchillo.jpeg";
import aguaImage from "../assets/images/objetos/agua.jpeg";
import mateImage from "../assets/images/objetos/mate.jpeg";
import saleroImage from "../assets/images/objetos/salero.jpeg";
import galletasImage from "../assets/images/objetos/galletas.jpeg";
import panImage from "../assets/images/objetos/pan.jpeg";

import caballo from "../assets/images/animales/caballo.jpeg";
import gato from "../assets/images/animales/gato.jpeg";
import oveja from "../assets/images/animales/oveja.jpeg";
import pajaro from "../assets/images/animales/pajaro.jpeg";
import pato from "../assets/images/animales/pato.jpeg";
import perro from "../assets/images/animales/perro.jpeg";
import pollito from "../assets/images/animales/pollito.jpeg";
import raton from "../assets/images/animales/raton.jpeg";
import vaca from "../assets/images/animales/vaca.jpeg";

import ciruclo from "../assets/images/figuras/circulo.png";
import corazon from "../assets/images/figuras/coraon.png";
import cuadrado from "../assets/images/figuras/cuadrado.png";
import estrella from "../assets/images/figuras/estrella.png";
import rectangulo from "../assets/images/figuras/rectangulo.png";
import triangulo from "../assets/images/figuras/triangulo.png";

import auto from "../assets/images/transporte/auto.jpeg";
import avion from "../assets/images/transporte/avion.jpeg";
import barco from "../assets/images/transporte/barco.jpeg";
import Bicicleta from "../assets/images/transporte/bicicleta.jpeg";
import Camion from "../assets/images/transporte/Camion.jpeg";
import Helicoptero from "../assets/images/transporte/descarga.jpeg";
import moto from "../assets/images/transporte/moto.jpeg";
import tren from "../assets/images/transporte/tren.jpeg";

import banana from "../assets/images/frutas/banana.jpeg";
import chocolate from "../assets/images/frutas/chocolate.jpeg";
import helado from "../assets/images/frutas/helado.jpeg";
import leche from "../assets/images/frutas/leche.jpeg";
import manzana from "../assets/images/frutas/manzana.jpeg";

import calzoncillo from "../assets/images/ropa/calzoncillo.jpeg";
import Pantalon from "../assets/images/ropa/pantalon.jpeg";
import remera from "../assets/images/ropa/remera.jpeg";
import short from "../assets/images/ropa/short.jpeg";
import zapatillas from "../assets/images/ropa/zapatillas.jpeg";

import calor from "../assets/images/estaciones/calor.jpeg";
import frio from "../assets/images/estaciones/frio.jpeg";
import lluvia from "../assets/images/estaciones/lluvia.jpeg";
import nieve from "../assets/images/estaciones/nieve.jpeg";
import sol from "../assets/images/estaciones/sol.jpeg";
import viento from "../assets/images/estaciones/viento.jpeg";

import beber from "../assets/images/actividades/beber.jpeg";
import comer from "../assets/images/actividades/comer";
import correr from "../assets/images/actividades/correr.jpeg";
import dormir from "../assets/images/actividades/dormir.jpeg";
import escribir from "../assets/images/actividades/escribir.jpeg";
import jugar from "../assets/images/actividades/jugar.jpeg";
import leer from "../assets/images/actividades/leer.jpeg";

export const categories = {
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
      { word: "Feliz", image: {} },
      { word: "Triste", image: {} },
      { word: "Enojado", image: {} },
      { word: "Hambriento", image: {} },
      { word: "Asustado", image: {} },
      { word: "Sorprendido", image: {} },
      { word: "Cansado", image: {} },
      { word: "Calmado", image: {} },
    ],
  },
  animals: {
    name: "Animales",
    icon: "\ud83d\udc36",
    color: "bg-blue-100",
    borderColor: "border-blue-300",
    textColor: "text-blue-600",
    words: [
      { word: "Perro", image: { perro } },
      { word: "Gato", image: { gato } },
      { word: "Pajaro", image: { pajaro } },
      { word: "Oveja", image: { oveja } },
      { word: "Caballo", image: { caballo } },
      { word: "Vaca", image: { vaca } },
      { word: "Pato", image: { pato } },
      { word: "Pollito", image: { pollito } },
      { word: "Raton", image: { raton } },
    ],
  },
  family: {
    name: "La Familia",
    icon: "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66",
    color: "bg-green-100",
    borderColor: "border-green-300",
    textColor: "text-green-600",
    words: [
      { word: "Mamá", image: {} },
      { word: "Papá", image: {} },
      { word: "Joaqui", image: {} },
      { word: "Abuelo Guille", image: {} },
      { word: "Abuela Silvia", image: {} },
      { word: "Abuelo Omar", image: {} },
      { word: "Abuela Mary", image: {} },
      { word: "Tío Nico", image: {} },
      { word: "Tío Pablo", image: {} },
      { word: "Tía Agos", image: {} },
      { word: "Tío Pao", image: {} },
    ],
  },
  colors: {
    name: "Colores",
    icon: "\ud83c\udfa8",
    color: "bg-red-100",
    borderColor: "border-red-300",
    textColor: "text-red-600",
    words: [
      { word: "Rojo", image: {} },
      { word: "Azul", image: {} },
      { word: "Amarillo", image: {} },
      { word: "Verde", image: {} },
      { word: "Naranja", image: {} },
      { word: "Rosa", image: {} },
      { word: "Blanco", image: {} },
      { word: "Negro", image: {} },
      { word: "Marrón", image: {} },
      { word: "Morado", image: {} },
    ],
  },
  numbers: {
    name: "Números y Cantidades",
    icon: "\ud83d\udd22",
    color: "bg-red-100",
    borderColor: "border-red-300",
    textColor: "text-red-600",
    words: [
      { word: "Uno", image: {} },
      { word: "Dos", image: {} },
      { word: "Tres", image: {} },
      { word: "Cuatro", image: {} },
      { word: "Cinco", image: {} },
      { word: "Seis", image: {} },
      { word: "Siete", image: {} },
      { word: "Ocho", image: {} },
      { word: "Nueve", image: {} },
      { word: "Diez", image: {} },
    ],
  },
  shapes: {
    name: "Formas y Figuras",
    icon: "\u25b2",
    color: "bg-teal-100",
    borderColor: "border-teal-300",
    textColor: "text-teal-600",
    words: [
      { word: "Círculo", image: { ciruclo } },
      { word: "Cuadrado", image: { cuadrado } },
      { word: "Triángulo", image: { triangulo } },
      { word: "Rectángulo", image: { rectangulo } },
      { word: "Estrella", image: { estrella } },
      { word: "Corazón", image: { corazon } },
    ],
  },
  transport: {
    name: "Transportes",
    icon: "\ud83d\ude97",
    color: "bg-orange-100",
    borderColor: "border-orange-300",
    textColor: "text-orange-600",
    words: [
      { word: "Auto", image: { auto } },
      { word: "Avión", image: { avion } },
      { word: "Barco", image: { barco } },
      { word: "Tren", image: { tren } },
      { word: "Bicicleta", image: { Bicicleta } },
      { word: "Camión", image: { Camion } },
      { word: "Moto", image: { moto } },
      { word: "Helicóptero", image: { Helicoptero } },
    ],
  },
  food: {
    name: "Comidas y Bebidas",
    icon: "\ud83c\udf4e",
    color: "bg-lime-100",
    borderColor: "border-lime-300",
    textColor: "text-lime-600",
    words: [
      { word: "Manzana", image: { manzana } },
      { word: "Banana", image: { banana } },
      { word: "Leche", image: { leche } },
      { word: "Chocolate", image: { chocolate } },
      { word: "Helado", image: { helado } },
    ],
  },
  clothing: {
    name: "Ropa y Accesorios",
    icon: "\ud83d\udc55",
    color: "bg-gray-100",
    borderColor: "border-gray-300",
    textColor: "text-gray-600",
    words: [
      { word: "Remera", image: { remera } },
      { word: "Pantalón", image: { Pantalon } },
      { word: "Zapatillas", image: { zapatillas } },
      { word: "Short", image: { short } },
      { word: "calzoncillo", image: { calzoncillo } },
    ],
  },
  actions: {
    name: "Acciones Básicas",
    icon: "\ud83e\udd38",
    color: "bg-indigo-100",
    borderColor: "border-indigo-300",
    textColor: "text-indigo-600",
    words: [
      { word: "Comer", image: { comer } },
      { word: "Beber", image: { beber } },
      { word: "Dormir", image: { dormir } },
      { word: "Jugar", image: { jugar } },
      { word: "Correr", image: { correr } },
      { word: "Leer", image: { leer } },
      { word: "Escribir", image: { escribir } },
    ],
  },
  weather: {
    name: "Estaciones y Clima",
    icon: "\u2600\ufe0f",
    color: "bg-cyan-100",
    borderColor: "border-cyan-300",
    textColor: "text-cyan-600",
    words: [
      { word: "Sol", image: { sol } },
      { word: "Lluvia", image: { lluvia } },
      { word: "Viento", image: { viento } },
      { word: "Nieve", image: { nieve } },
      { word: "Calor", image: { calor } },
      { word: "Frío", image: { frio } },
    ],
  },
  places: {
    name: "Lugares Comunes",
    icon: "\ud83c\udfe1",
    color: "bg-green-100",
    borderColor: "border-green-300",
    textColor: "text-green-600",
    words: [
      { word: "Casa", image: {} },
      { word: "Escuela", image: {} },
      { word: "Parque", image: {} },
      { word: "Tienda", image: {} },
      { word: "Plaza", image: {} },
      { word: "Hospital", image: {} },
    ],
  },
};

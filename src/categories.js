import vasoImage from "./assets/images/objetos/vaso.jpeg";
import platoImage from "./assets/images/objetos/plato.jpeg";
import cucharaImage from "./assets/images/objetos/cuchara.jpeg";
import cuchilloImage from "./assets/images/objetos/cuchillo.jpeg";
import aguaImage from "./assets/images/objetos/agua.jpeg";
import mateImage from "./assets/images/objetos/mate.jpeg";
import saleroImage from "./assets/images/objetos/salero.jpeg";
import galletasImage from "./assets/images/objetos/galletas.jpeg";
import panImage from "./assets/images/objetos/pan.jpeg";
import tenedorImage from "./assets/images/objetos/tenedor.jpg";

import caballo from "./assets/images/animales/camballo.jpeg";
import gato from "./assets/images/animales/gato.jpeg";
import oveja from "./assets/images/animales/oveja.jpeg";
import pajaro from "./assets/images/animales/pajaro.jpeg";
import pato from "./assets/images/animales/pato.jpeg";
import perro from "./assets/images/animales/perro.jpeg";
import pollito from "./assets/images/animales/pollito.jpeg";
import raton from "./assets/images/animales/raton.jpeg";
import vaca from "./assets/images/animales/vaca.jpeg";

import ciruclo from "./assets/images/figuras/circulo.png";
import corazon from "./assets/images/figuras/corazon.png";
import cuadrado from "./assets/images/figuras/cuadrado.png";
import estrella from "./assets/images/figuras/estrella.png";
import rectangulo from "./assets/images/figuras/rectangulo.png";
import triangulo from "./assets/images/figuras/triangulo.png";

import auto from "./assets/images/transporte/auto.jpeg";
import avion from "./assets/images/transporte/avion.jpeg";
import barco from "./assets/images/transporte/barco.jpeg";
import Bicicleta from "./assets/images/transporte/bicicleta.jpeg";
import Camion from "./assets/images/transporte/Camion.jpeg";
import Helicoptero from "./assets/images/transporte/descarga.jpeg";
import moto from "./assets/images/transporte/moto.jpeg";
import tren from "./assets/images/transporte/tren.jpeg";

import banana from "./assets/images/frutas/banana.jpeg";
import chocolate from "./assets/images/frutas/chocolate.jpeg";
import helado from "./assets/images/frutas/helado.jpeg";
import leche from "./assets/images/frutas/leche.jpeg";
import manzana from "./assets/images/frutas/manzana.jpeg";

import calzoncillo from "./assets/images/ropa/calzoncillo.jpeg";
import Pantalon from "./assets/images/ropa/pantalon.jpeg";
import remera from "./assets/images/ropa/remera.jpeg";
import short from "./assets/images/ropa/short.jpeg";
import zapatillas from "./assets/images/ropa/zapatillas.jpeg";

import calor from "./assets/images/estaciones/calor.jpeg";
import frio from "./assets/images/estaciones/frio.jpeg";
import lluvia from "./assets/images/estaciones/lluvia.jpeg";
import nieve from "./assets/images/estaciones/nieve.jpeg";
import sol from "./assets/images/estaciones/sol.png";
import viento from "./assets/images/estaciones/viento.png";

import beber from "./assets/images/actividades/beber.jpeg";
import comer from "./assets/images/actividades/comer.jpeg";
import correr from "./assets/images/actividades/correr.jpeg";
import dormir from "./assets/images/actividades/dormir.jpeg";
import escribir from "./assets/images/actividades/escribir.jpeg";
import jugar from "./assets/images/actividades/jugar.jpeg";
import leer from "./assets/images/actividades/leer.jpeg";

import yo from "./assets/images/familia/yo.png"
import silvia from "./assets/images/familia/silvi.png"
import guillermo from "./assets/images/familia/guille.png"
import nico from "./assets/images/familia/nico.png"
import majo from "./assets/images/familia/majo.png" 
import pablo from "./assets/images/familia/payi.png"
import aye from "./assets/images/familia/aye.png"
import mari from "./assets/images/familia/mari.png"
import omar from "./assets/images/familia/omar.png"
import pao from "./assets/images/familia/pao.png"
import juli from "./assets/images/familia/ju.png"
import ago from "./assets/images/familia/agos.png"
import joa from "./assets/images/familia/joa.jpg"
import andres from "./assets/images/familia/andres.png"

import Amarillo from "./assets/images/colores/amarillo.jpg" 
import Azul from "./assets/images/colores/azul.png" 
import Blanco from "./assets/images/colores/blanco.jpg" 
import Marrón from "./assets/images/colores/marron.jfif"
import Morado from "./assets/images/colores/morado.jpg"
import Negro   from "./assets/images/colores/negro.jfif"
import Rojo from "./assets/images/colores/rojo.jpg"
import rosa from "./assets/images/colores/rosa.jfif"
import verde from "./assets/images/colores/verde.jpg"
import naranja from "./assets/images/colores/naranja.png"

import uno from "./assets/images/numeros/1.jpg"
import Dos from "./assets/images/numeros/2.jpg"
import Tres from "./assets/images/numeros/3.jpg"
import Cuatro from "./assets/images/numeros/4.jpg"
import Cinco  from "./assets/images/numeros/5.jpg"
import Seis from "./assets/images/numeros/6.jpg"
import Siete from "./assets/images/numeros/7.jpg"
import Ocho  from "./assets/images/numeros/8.jpg"
import Nueve  from "./assets/images/numeros/9.jpg"

import casa from "./assets/images/lugares/casa.png"
import jardin from "./assets/images/lugares/jardin.png"
import plaza from "./assets/images/lugares/plaza.png"

import contento from "./assets/images/emociones/contento.jpg"
import enojado from "./assets/images/emociones/enojado.jpg"
import feliz from "./assets/images/emociones/feliz.jpg"
import infeliz from "./assets/images/emociones/infeliz.jpg"
import sorprendido from "./assets/images/emociones/sorprenido.jpg"
import triste from "./assets/images/emociones/triste.jpg"

export const categories = {
  daily: {
    name: "Objetos Diarios",
    icon: "\ud83c\udfe0",
    color: "bg-pink-100",
    borderColor: "border-pink-300",
    textColor: "text-pink-600",
    words: [
      { word: "Vaso", image: vasoImage },
      { word: "Plato", image: platoImage },
      { word: "Cuchara", image: cucharaImage },
      { word: "Tenedor", image: tenedorImage },
      { word: "Cuchillo", image: cuchilloImage },
      { word: "Agua", image: aguaImage },
      { word: "Mate", image: mateImage },
      { word: "Sal", image: saleroImage },
      { word: "Galletas", image: galletasImage },
      { word: "Pan", image: panImage },
    ],
  },
  emotions: {
    name: "Emociones",
    icon: "\ud83d\ude0a",
    color: "bg-yellow-100",
    borderColor: "border-yellow-300",
    textColor: "text-yellow-600",
    words: [
      { word: "Feliz", image: feliz },
      { word: "Triste", image: triste },
      { word: "Enojado", image: enojado },
      { word: "Sorprendido", image: sorprendido },
      { word: "no me gusta", image: infeliz },
      { word: "si me gusta", image: contento },
    ],
  },
  animals: {
    name: "Animales",
    icon: "\ud83d\udc36",
    color: "bg-blue-100",
    borderColor: "border-blue-300",
    textColor: "text-blue-600",
    words: [
      { word: "Perro", image: perro },
      { word: "Gato", image: gato },
      { word: "Pajaro", image: pajaro },
      { word: "Oveja", image: oveja },
      { word: "Caballo", image: caballo },
      { word: "Vaca", image: vaca },
      { word: "Pato", image: pato },
      { word: "Pollito", image: pollito },
      { word: "Raton", image: raton },
    ],
  },
  family: {
    name: "La Familia",
    icon: "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66",
    color: "bg-green-100",
    borderColor: "border-green-300",
    textColor: "text-green-600",
    words: [
      { word: "Mamá", image: juli },
      { word: "Papá", image: yo },
      { word: "Joaqui", image: joa },
      { word: "Abuelo Guille", image: guillermo },
      { word: "Abuela Silvia", image:silvia },
      { word: "Abuelo Omar", image: omar },
      { word: "Abuela Mary", image: mari },
      { word: "Tío Nico", image:nico },
      { word: "Tía Majo", image: majo },
      { word: "Tío Pablo", image: pablo },
      { word: "Tía Aye", image: aye },
      { word: "Tía Agos", image: ago },
      { word: "Tío Andres", image: andres },
      { word: "Tío Pao", image: pao },
      { word: "Moca", image: {} },
    ],
  },
  colors: {
    name: "Colores",
    icon: "\ud83c\udfa8",
    color: "bg-red-100",
    borderColor: "border-red-300",
    textColor: "text-red-600",
    words: [
      { word: "Rojo", image: Rojo },
      { word: "Azul", image: Azul },
      { word: "Amarillo", image: Amarillo },
      { word: "Verde", image: verde },
      { word: "Naranja", image: naranja },
      { word: "Rosa", image: rosa} ,
      { word: "Blanco", image: Blanco },
      { word: "Negro", image: Negro },
      { word: "Marrón", image: Marrón },
      { word: "Morado", image: Morado },
    ],
  },
  numbers: {
    name: "Números y Cantidades",
    icon: "\ud83d\udd22",
    color: "bg-red-100",
    borderColor: "border-red-300",
    textColor: "text-red-600",
    words: [
      { word: "Uno", image: uno },
      { word: "Dos", image: Dos },
      { word: "Tres", image: Tres },
      { word: "Cuatro", image: Cuatro },
      { word: "Cinco", image:Cinco },
      { word: "Seis", image: Seis },
      { word: "Siete", image: Siete },
      { word: "Ocho", image:Ocho },
      { word: "Nueve", image:Nueve },
      
    ],
  },
  shapes: {
    name: "Formas y Figuras",
    icon: "\u25b2",
    color: "bg-teal-100",
    borderColor: "border-teal-300",
    textColor: "text-teal-600",
    words: [
      { word: "Círculo", image: ciruclo },
      { word: "Cuadrado", image: cuadrado },
      { word: "Triángulo", image: triangulo },
      { word: "Rectángulo", image: rectangulo },
      { word: "Estrella", image: estrella },
      { word: "Corazón", image: corazon },
    ],
  },
  transport: {
    name: "Transportes",
    icon: "\ud83d\ude97",
    color: "bg-orange-100",
    borderColor: "border-orange-300",
    textColor: "text-orange-600",
    words: [
      { word: "Auto", image: auto },
      { word: "Avión", image: avion },
      { word: "Barco", image: barco },
      { word: "Tren", image: tren },
      { word: "Bicicleta", image: Bicicleta },
      { word: "Camión", image: Camion },
      { word: "Moto", image: moto },
      { word: "Helicóptero", image: Helicoptero },
    ],
  },
  food: {
    name: "Comidas y Bebidas",
    icon: "\ud83c\udf4e",
    color: "bg-lime-100",
    borderColor: "border-lime-300",
    textColor: "text-lime-600",
    words: [
      { word: "Manzana", image: manzana },
      { word: "Banana", image: banana },
      { word: "Leche", image: leche },
      { word: "Chocolate", image: chocolate },
      { word: "Helado", image: helado },
    ],
  },
  clothing: {
    name: "Ropa y Accesorios",
    icon: "\ud83d\udc55",
    color: "bg-gray-100",
    borderColor: "border-gray-300",
    textColor: "text-gray-600",
    words: [
      { word: "Remera", image: remera },
      { word: "Pantalón", image: Pantalon },
      { word: "Zapatillas", image: zapatillas },
      { word: "Short", image: short },
      { word: "calzoncillo", image: calzoncillo },
    ],
  },
  actions: {
    name: "Acciones Básicas",
    icon: "\ud83e\udd38",
    color: "bg-indigo-100",
    borderColor: "border-indigo-300",
    textColor: "text-indigo-600",
    words: [
      { word: "Comer", image: comer },
      { word: "Beber", image: beber },
      { word: "Dormir", image: dormir },
      { word: "Jugar", image: jugar },
      { word: "Correr", image: correr },
      { word: "Leer", image: leer },
      { word: "Escribir", image: escribir },
    ],
  },
  weather: {
    name: "Estaciones y Clima",
    icon: "\u2600\ufe0f",
    color: "bg-cyan-100",
    borderColor: "border-cyan-300",
    textColor: "text-cyan-600",
    words: [
      { word: "Sol", image: sol },
      { word: "Lluvia", image: lluvia },
      { word: "Viento", image: viento },
      { word: "Nieve", image: nieve },
      { word: "Calor", image: calor },
      { word: "Frío", image: frio },
    ],
  },
  places: {
    name: "Lugares Comunes",
    icon: "\ud83c\udfe1",
    color: "bg-green-100",
    borderColor: "border-green-300",
    textColor: "text-green-600",
    words: [
      { word: "Casa", image: casa },
      { word: "Escuela", image: jardin },
      { word: "Plaza", image: plaza },

    ],
  },
};

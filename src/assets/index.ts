// ============================================================
// assets/index.ts — ÚNICO punto de importación de assets.
// Los componentes hacen `import { villaPhotos } from '@assets/index'`.
// Para reemplazar un placeholder por el asset final (IA):
//   1. Copia el archivo a src/assets/images/ (webp + jpg fallback).
//   2. Cambia aquí la referencia. Nada más.
// ============================================================
import heroSky from './images/hero-sky.svg';
import paperTexture from './images/paper-texture.svg';
import footerWater from './images/footer-water.svg';
import fotoSebas from './images/foto_sebas.jpg';
import laFinca from './images/la_finca.png';
import laFinca2 from './images/la_finca_2.png';
import piscinaJacuzzi from './images/piscina_y_jacuzzi.png';
import terrazaSocial from './images/terraza_social.png';
import vistaMontanas from './images/vista_a_las_montanas.png';
import zonaChill from './images/zona_chill.png';
import habitacionesComodas from './images/habitaciones_comodas.png';
import atardecerInolvidable from './images/atardecer_inolvidable.png';
import asadoParrilla from './images/asado.png';
import cartaMenu from './images/menu_fin_de_semana.png';
import foodBurger from './images/food_burger.jpg';
import foodBreakfast from './images/food_breakfast.jpg';
import foodLunchChicken from './images/food_lunch_chicken.jpg';
import foodDinnerRice from './images/food_dinner_rice.jpg';
import foodAsado from './images/food_asado.jpg';
import audioTrack from './audio.mp3';

export { AirbnbLogo } from './logos/AirbnbLogo';

// ---------- Audio ----------
export const audioAssets = {
  main: audioTrack,
};
export { audioTrack };

// ---------- Fondos ----------
export const backgrounds = {
  heroSky,
  paperTexture,
  footerWater,
};

// ---------- Fotos de la finca (polaroids) ----------
export const villaPhotos = {
  finca: laFinca,
  piscina: piscinaJacuzzi,
  terraza: terrazaSocial,
  montanas: vistaMontanas,
  chill: zonaChill,
  habitacion: habitacionesComodas,
  atardecer: atardecerInolvidable,
};

// ---------- Fotos del menú ----------
export const menuPhotos = {
  carta: cartaMenu,
  asado: asadoParrilla,
  hamburguesa: foodBurger,
  desayuno: foodBreakfast,
  almuerzo: foodLunchChicken,
  arrozPollo: foodDinnerRice,
  asadoTipico: foodAsado,
};

// ---------- Polaroids del cierre ----------
export const closingPhotos = {
  atardecer: villaPhotos.atardecer,
  finca: laFinca2, // vista aérea de la finca
};

// ---------- Retrato del cumpleañero ----------
export const portraits = {
  sebas: fotoSebas,
};

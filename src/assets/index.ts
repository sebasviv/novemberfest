// ============================================================
// assets/index.ts — ÚNICO punto de importación de assets.
// Los componentes hacen `import { villaPhotos } from '@assets/index'`.
// Para reemplazar un placeholder por el asset final (IA):
//   1. Copia el archivo a src/assets/images/ (webp + jpg fallback).
//   2. Cambia aquí la referencia. Nada más.
// ============================================================
import { photoPlaceholder } from './images/placeholders';
import heroSky from './images/hero-sky.svg';
import paperTexture from './images/paper-texture.svg';
import footerWater from './images/footer-water.svg';
import portraitSebas from './images/portrait-sebas.svg';

export { AirbnbLogo } from './logos/AirbnbLogo';

// ---------- Fondos ----------
export const backgrounds = {
  heroSky,
  paperTexture,
  footerWater,
};

// ---------- Fotos de la finca (polaroids) ----------
export const villaPhotos = {
  finca: photoPlaceholder({ title: 'La finca', colorA: '#8CC8EE', colorB: '#F4EBD9' }),
  piscina: photoPlaceholder({ title: 'Piscina + jacuzzi', colorA: '#1B6E8A', colorB: '#CFE6EE' }),
  terraza: photoPlaceholder({ title: 'Terraza social', colorA: '#E6D6B8', colorB: '#8CC8EE' }),
  montanas: photoPlaceholder({ title: 'Vista a las montañas', colorA: '#3E6B4F', colorB: '#CFE6EE' }),
  chill: photoPlaceholder({ title: 'Zona chill', colorA: '#F2B544', colorB: '#E8553E' }),
  habitacion: photoPlaceholder({ title: 'Habitaciones', colorA: '#14305E', colorB: '#CFE6EE' }),
  atardecer: photoPlaceholder({ title: 'Atardecer', colorA: '#E8553E', colorB: '#F2B544' }),
};

// ---------- Fotos del menú ----------
export const menuPhotos = {
  hamburguesa: photoPlaceholder({ title: 'Hamburguesa', colorA: '#F2B544', colorB: '#E6D6B8' }),
  desayuno: photoPlaceholder({ title: 'Desayuno', colorA: '#CFE6EE', colorB: '#F4EBD9' }),
  almuerzo: photoPlaceholder({ title: 'Almuerzo', colorA: '#1B6E8A', colorB: '#CFE6EE' }),
  arrozPollo: photoPlaceholder({ title: 'Arroz con pollo', colorA: '#F2B544', colorB: '#1B6E8A' }),
  asado: photoPlaceholder({ title: 'Asado', colorA: '#E8553E', colorB: '#F2B544' }),
};

// ---------- Polaroids del cierre ----------
export const closingPhotos = {
  atardecer: villaPhotos.atardecer,
  finca: villaPhotos.finca,
};

// ---------- Retrato del cumpleañero (reemplazable) ----------
export const portraits = {
  sebas: portraitSebas,
};

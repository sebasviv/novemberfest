// Generador de placeholders SVG para fotos (polaroids, comida, retrato).
// Reemplaza estos archivos por los .webp/.jpg generados con IA y actualiza
// SOLO assets/index.ts — los componentes no cambian.
const SVG_NS = 'http://www.w3.org/2000/svg';

export interface PlaceholderOptions {
  title: string;
  colorA: string;
  colorB: string;
  width?: number;
  height?: number;
}

// Devuelve una data-URI SVG con degradado y etiqueta manuscrita.
export function photoPlaceholder({ title, colorA, colorB, width = 640, height = 640 }: PlaceholderOptions): string {
  const svg = `<svg xmlns="${SVG_NS}" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${colorA}"/><stop offset="1" stop-color="${colorB}"/>
  </linearGradient></defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <circle cx="${width * 0.78}" cy="${height * 0.22}" r="${Math.min(width, height) * 0.12}" fill="#F2B544" opacity="0.85"/>
  <text x="${width / 2}" y="${height / 2}" text-anchor="middle" font-family="cursive" font-size="${Math.round(width / 13)}" fill="#14305E" opacity="0.75">${title}</text>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

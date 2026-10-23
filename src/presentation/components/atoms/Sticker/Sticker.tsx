// ============================================================
// Sticker — decoraciones SVG animables (corona, estrella, palmera,
// sol, disco ball, sparkles, flechas, olas, vinilo, gafas, copas).
// Todas son SVG inline: se pueden animar con CSS o Framer Motion.
// La variante de animación se controla con la prop `animation`
// (clases de Sticker.module.scss que usan los @keyframes globales).
// ============================================================
import type { StickerKey } from '@core/types';
import styles from './Sticker.module.scss';

export interface StickerProps {
  type: StickerKey;
  size?: number;
  animation?: 'sway' | 'pulse' | 'spin' | 'twinkle' | 'float' | 'bounce' | 'none';
  className?: string;
}

// Cada sticker devuelve los nodos internos del SVG (sin <svg> wrapper).
function StickerArt({ type }: { type: StickerKey }) {
  switch (type) {
    case 'crown':
      return (
        <g>
          <path
            d="M8 34 L4 14 L14 22 L20 8 L26 22 L36 14 L32 34 Z"
            fill="#F2B544"
            stroke="#14305E"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="4" cy="14" r="2.4" fill="#F2B544" stroke="#14305E" strokeWidth="1.6" />
          <circle cx="20" cy="8" r="2.4" fill="#F2B544" stroke="#14305E" strokeWidth="1.6" />
          <circle cx="36" cy="14" r="2.4" fill="#F2B544" stroke="#14305E" strokeWidth="1.6" />
        </g>
      );
    case 'star':
      return (
        <path
          d="M20 3 L24.7 14.6 L37 15.3 L27.4 23.2 L30.4 35.7 L20 29.4 L9.6 35.7 L12.6 23.2 L3 15.3 L15.3 14.6 Z"
          fill="#F2B544"
          stroke="#14305E"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      );
    case 'sparkle':
      return (
        <path
          d="M20 2 C21.5 11 25 16 38 20 C25 24 21.5 29 20 38 C18.5 29 15 24 2 20 C15 16 18.5 11 20 2 Z"
          fill="#F5F7FA"
          stroke="#1B6E8A"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      );
    case 'sun':
      return (
        <g>
          <circle cx="20" cy="20" r="9" fill="#F2B544" stroke="#E8553E" strokeWidth="2" />
          <g stroke="#E8553E" strokeWidth="2.4" strokeLinecap="round">
            <line x1="20" y1="2" x2="20" y2="7" />
            <line x1="20" y1="33" x2="20" y2="38" />
            <line x1="2" y1="20" x2="7" y2="20" />
            <line x1="33" y1="20" x2="38" y2="20" />
            <line x1="7.3" y1="7.3" x2="10.8" y2="10.8" />
            <line x1="29.2" y1="29.2" x2="32.7" y2="32.7" />
            <line x1="32.7" y1="7.3" x2="29.2" y2="10.8" />
            <line x1="10.8" y1="29.2" x2="7.3" y2="32.7" />
          </g>
        </g>
      );
    case 'palm':
      return (
        <g stroke="#3E6B4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 36 C21 28 21 22 19 14" fill="none" stroke="#8B5E3C" strokeWidth="3" />
          <path d="M19 14 C12 10 6 11 3 16 C9 15 14 16 19 14 Z" fill="#3E6B4F" />
          <path d="M19 14 C26 10 32 11 35 16 C29 15 24 16 19 14 Z" fill="#3E6B4F" />
          <path d="M19 14 C16 6 11 4 6 5 C11 8 15 11 19 14 Z" fill="#4E8A64" />
          <path d="M19 14 C22 6 27 4 32 5 C27 8 23 11 19 14 Z" fill="#4E8A64" />
        </g>
      );
    case 'palmLeaf':
      return (
        <path
          d="M4 34 C10 20 22 10 36 6 C32 20 20 30 4 34 Z M4 34 C14 26 24 18 36 6"
          fill="#3E6B4F"
          fillRule="evenodd"
          stroke="#2C4F3A"
          strokeWidth="1.4"
        />
      );
    case 'disco':
      return (
        <g>
          <line x1="20" y1="0" x2="20" y2="5" stroke="#6E7681" strokeWidth="2" />
          <circle cx="20" cy="19" r="14" fill="#B8BEC7" stroke="#6E7681" strokeWidth="1.6" />
          <g stroke="#F5F7FA" strokeWidth="1.2" opacity="0.9">
            <line x1="6" y1="19" x2="34" y2="19" />
            <line x1="8.5" y1="12" x2="31.5" y2="12" />
            <line x1="8.5" y1="26" x2="31.5" y2="26" />
            <line x1="20" y1="5" x2="20" y2="33" />
            <line x1="13" y1="7" x2="13" y2="31" />
            <line x1="27" y1="7" x2="27" y2="31" />
          </g>
          <circle cx="15" cy="13" r="2.6" fill="#F5F7FA" opacity="0.95" />
        </g>
      );
    case 'arrow':
      return (
        <path
          d="M4 20 C12 8 26 8 32 18 M32 18 L27 14 M32 18 L26 21"
          fill="none"
          stroke="#14305E"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    case 'wave':
      return (
        <path
          d="M2 22 C8 14 14 14 20 22 C26 30 32 30 38 22 M2 12 C8 4 14 4 20 12 C26 20 32 20 38 12"
          fill="none"
          stroke="#1B6E8A"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      );
    case 'vinyl':
      return (
        <g>
          <circle cx="20" cy="20" r="17" fill="#14305E" />
          <circle cx="20" cy="20" r="12" fill="none" stroke="#F5F7FA" strokeWidth="0.8" opacity="0.5" />
          <circle cx="20" cy="20" r="8" fill="none" stroke="#F5F7FA" strokeWidth="0.8" opacity="0.5" />
          <circle cx="20" cy="20" r="5" fill="#F2B544" />
          <circle cx="20" cy="20" r="1.4" fill="#14305E" />
        </g>
      );
    case 'glasses':
      return (
        <g stroke="#14305E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="14" width="12" height="9" rx="4" fill="#8CC8EE" />
          <rect x="24" y="14" width="12" height="9" rx="4" fill="#8CC8EE" />
          <path d="M16 17 C17.5 15.5 22.5 15.5 24 17" fill="none" />
        </g>
      );
    case 'cheers':
      return (
        <g stroke="#14305E" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M6 4 L16 4 L13 18 L13 26 L16 30 L6 30 L9 26 L9 18 Z" fill="#CFE6EE" transform="rotate(-8 11 17)" />
          <path d="M24 4 L34 4 L31 18 L31 26 L34 30 L24 30 L27 26 L27 18 Z" fill="#F2B544" transform="rotate(8 29 17)" />
        </g>
      );
  }
}

// Los stickers son decorativos por defecto (aria-hidden). Si alguno
// aporta información, pásale role="img" + <title> desde el padre.
export function Sticker({ type, size = 40, animation = 'none', className = '' }: StickerProps) {
  const animClass = animation !== 'none' ? styles[`anim-${animation}`] : '';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
      className={`${styles.sticker} ${animClass} ${className}`.trim()}
    >
      <StickerArt type={type} />
    </svg>
  );
}

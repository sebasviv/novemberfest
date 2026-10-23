// AnimatedLogo — marca "November Fest" en SVG con trazo plateado
// y brillo animado. Versión compacta para el StickyNav / footer.
import styles from './AnimatedLogo.module.scss';

export interface AnimatedLogoProps {
  size?: number;
  className?: string;
}

export function AnimatedLogo({ size = 120, className = '' }: AnimatedLogoProps) {
  return (
    <svg
      width={size}
      height={size * 0.42}
      viewBox="0 0 240 100"
      role="img"
      aria-label="November Fest"
      className={`${styles.logo} ${className}`.trim()}
    >
      <defs>
        <linearGradient id="nf-chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F5F7FA" />
          <stop offset="0.45" stopColor="#B8BEC7" />
          <stop offset="0.55" stopColor="#6E7681" />
          <stop offset="1" stopColor="#F5F7FA" />
        </linearGradient>
      </defs>
      <text
        x="120"
        y="44"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="900"
        fontSize="40"
        fill="url(#nf-chrome)"
        letterSpacing="2"
      >
        NOVEMBER
      </text>
      <text
        x="120"
        y="88"
        textAnchor="middle"
        fontFamily="'Caveat Brush', cursive"
        fontSize="44"
        fill="#1B6E8A"
      >
        Fest
      </text>
    </svg>
  );
}

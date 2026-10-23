// AnimatedLogo — marca "November Fest" en SVG: serif navy +
// brush teal. Versión compacta para el StickyNav / footer.
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
      <text
        x="120"
        y="44"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="900"
        fontSize="40"
        fill="#14305E"
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

// ============================================================
// BrushTitle — Título estilo pincelada ("FEST", "PLAN"...) en
// azul petróleo con subrayado SVG que se DIBUJA al entrar en
// pantalla (pathLength 0 → 1, Framer Motion).
// ============================================================
import { motion } from 'framer-motion';
import { drawPath, fadeUp, viewportOnce } from '@presentation/animations/variants';
import styles from './BrushTitle.module.scss';

export interface BrushTitleProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
  size?: 'xl' | 'lg';
  color?: 'teal' | 'navy' | 'coral' | 'gold';
  withUnderline?: boolean;
  className?: string;
}

export function BrushTitle({
  text,
  as: Tag = 'h2',
  size = 'lg',
  color = 'teal',
  withUnderline = true,
  className = '',
}: BrushTitleProps) {
  const MotionTag = motion[Tag];
  return (
    <span className={`${styles.wrap} ${className}`.trim()}>
      <MotionTag
        className={`${styles.brush} ${styles[size]} ${styles[color]}`}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {text}
      </MotionTag>
      {withUnderline && (
        <svg
          className={styles.underline}
          viewBox="0 0 200 16"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M4 11 C 50 4, 150 3, 196 9"
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
            variants={drawPath}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          />
        </svg>
      )}
    </span>
  );
}

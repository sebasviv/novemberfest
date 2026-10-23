// ============================================================
// ChromeTitle — Título cromado plateado ("NOVEMBER", "MENÚ"...)
// con relieve 3D y brillo (shine) que cruza el texto en loop.
// Edita el gradiente en theme.scss → mixin chrome-text.
// ============================================================
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@presentation/animations/variants';
import styles from './ChromeTitle.module.scss';

export interface ChromeTitleProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
  size?: 'xl' | 'lg';
  animated?: boolean; // shine infinito (default true)
  className?: string;
}

export function ChromeTitle({
  text,
  as: Tag = 'h2',
  size = 'lg',
  animated = true,
  className = '',
}: ChromeTitleProps) {
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      className={`${styles.chrome} ${styles[size]} ${animated ? styles.shine : ''} ${className}`.trim()}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {text}
    </MotionTag>
  );
}

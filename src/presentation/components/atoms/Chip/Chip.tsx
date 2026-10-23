// Chip — etiqueta tipo chip con ecualizador animado opcional (música).
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@presentation/animations/variants';
import styles from './Chip.module.scss';

export interface ChipProps {
  label: string;
  color?: 'aqua' | 'gold' | 'coral' | 'teal' | 'white';
  withEqualizer?: boolean; // barras animadas (chips de música)
  className?: string;
}

export function Chip({ label, color = 'aqua', withEqualizer = false, className = '' }: ChipProps) {
  return (
    <motion.span
      className={`${styles.chip} ${styles[color]} ${className}`.trim()}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {withEqualizer && (
        <span className={styles.eq} aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
      )}
      {label}
    </motion.span>
  );
}

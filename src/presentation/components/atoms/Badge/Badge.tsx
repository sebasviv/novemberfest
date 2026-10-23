// Badge — etiqueta pequeña manuscrita (tags del hero, labels).
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@presentation/animations/variants';
import styles from './Badge.module.scss';

export interface BadgeProps {
  text: string;
  color?: 'gold' | 'aqua' | 'coral' | 'white';
  rotate?: number;
  className?: string;
}

export function Badge({ text, color = 'gold', rotate = 0, className = '' }: BadgeProps) {
  return (
    <motion.span
      className={`${styles.badge} ${styles[color]} ${className}`.trim()}
      style={rotate ? { rotate } : undefined}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {text}
    </motion.span>
  );
}

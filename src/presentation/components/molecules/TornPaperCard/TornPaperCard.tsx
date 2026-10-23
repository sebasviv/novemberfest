// TornPaperCard — tarjeta con borde rasgado (papel) para bloques
// destacados (Airbnb, totales, frases grandes).
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@presentation/animations/variants';
import styles from './TornPaperCard.module.scss';

export interface TornPaperCardProps {
  children: ReactNode;
  color?: 'white' | 'aqua' | 'gold';
  rotate?: number;
  className?: string;
}

export function TornPaperCard({
  children,
  color = 'white',
  rotate = 0,
  className = '',
}: TornPaperCardProps) {
  return (
    <motion.div
      className={`${styles.card} ${styles[color]} ${className}`.trim()}
      style={rotate ? { rotate } : undefined}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

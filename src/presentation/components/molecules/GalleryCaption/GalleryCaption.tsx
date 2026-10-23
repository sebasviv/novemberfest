// GalleryCaption — caption manuscrito para polaroids de la galería,
// con rotación leve tipo nota pegada.
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@presentation/animations/variants';
import styles from './GalleryCaption.module.scss';

export interface GalleryCaptionProps {
  text: string;
  rotate?: number;
  className?: string;
}

export function GalleryCaption({ text, rotate = -2, className = '' }: GalleryCaptionProps) {
  return (
    <motion.p
      className={`${styles.caption} ${className}`.trim()}
      style={{ rotate }}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {text}
    </motion.p>
  );
}

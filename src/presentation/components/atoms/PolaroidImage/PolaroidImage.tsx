// PolaroidImage — foto estilo polaroid con cinta adhesiva.
// Rotación leve, lazy loading, width/height fijos (evita CLS).
import { motion } from 'framer-motion';
import { TapeStrip } from '../TapeStrip';
import styles from './PolaroidImage.module.scss';

export interface PolaroidImageProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: number; // grados (default -2)
  width?: number;
  height?: number;
  eager?: boolean; // true para la imagen del hero (sin lazy)
  className?: string;
}

export function PolaroidImage({
  src,
  alt,
  caption,
  rotation = -2,
  width = 640,
  height = 640,
  eager = false,
  className = '',
}: PolaroidImageProps) {
  return (
    <motion.figure
      className={`${styles.polaroid} ${className}`.trim()}
      style={{ rotate: rotation }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, scale: 0.85, rotate: rotation * 2.4 }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
    >
      <TapeStrip className={styles.tape} />
      <div className={styles.frame}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </motion.figure>
  );
}

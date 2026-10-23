// PortraitSticker — retrato del cumpleañero estilo sticker con
// borde blanco. La prop `src` es reemplazable (foto generada con IA
// a partir de la referencia que aporte el usuario).
import { motion } from 'framer-motion';
import { portraits } from '@assets/index';
import { useReducedMotion } from '@core/hooks/useReducedMotion';
import styles from './PortraitSticker.module.scss';

export interface PortraitStickerProps {
  src?: string; // default: placeholder de assets
  alt?: string;
  size?: number;
  float?: boolean; // flotación suave (respeta reduced motion)
  className?: string;
}

export function PortraitSticker({
  src = portraits.sebas,
  alt = 'Sebas, el cumpleañero',
  size = 180,
  float = true,
  className = '',
}: PortraitStickerProps) {
  const reduced = useReducedMotion();
  const shouldFloat = float && !reduced;

  return (
    <motion.div
      className={`${styles.wrap} ${shouldFloat ? styles.float : ''} ${className}`.trim()}
      style={{ width: size }}
      initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: 'spring', stiffness: 140, damping: 14 }}
    >
      <img
        src={src}
        alt={alt}
        width={size}
        height={Math.round(size * 1.19)}
        loading="eager"
        decoding="async"
      />
    </motion.div>
  );
}

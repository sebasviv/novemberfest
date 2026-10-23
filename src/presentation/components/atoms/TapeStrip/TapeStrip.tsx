// TapeStrip — pedazo de cinta adhesiva (washi tape) translúcida.
import styles from './TapeStrip.module.scss';

export interface TapeStripProps {
  color?: 'aqua' | 'gold' | 'coral' | 'silver';
  rotate?: number;
  width?: number;
  className?: string;
}

export function TapeStrip({ color = 'aqua', rotate = 0, width = 92, className = '' }: TapeStripProps) {
  return (
    <span
      aria-hidden="true"
      className={`${styles.tape} ${styles[color]} ${className}`.trim()}
      style={{ width, transform: `rotate(${rotate}deg)` }}
    />
  );
}

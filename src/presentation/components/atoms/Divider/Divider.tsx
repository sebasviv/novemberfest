// Divider — separador "papel rasgado" entre secciones.
// clip-path con fallback (si no hay soporte, queda recto).
import styles from './Divider.module.scss';

export interface DividerProps {
  flip?: boolean; // invierte el rasgado (alternar entre secciones)
  color?: 'sand' | 'white' | 'teal';
  className?: string;
}

export function Divider({ flip = false, color = 'sand', className = '' }: DividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`${styles.divider} ${styles[color]} ${flip ? styles.flip : ''} ${className}`.trim()}
    />
  );
}

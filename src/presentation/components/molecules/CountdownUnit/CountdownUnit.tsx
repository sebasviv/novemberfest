// CountdownUnit — dígito de la cuenta regresiva con etiqueta.
// El número hace fade/giro leve al cambiar (key change + AnimatePresence).
import { AnimatePresence, motion } from 'framer-motion';
import styles from './CountdownUnit.module.scss';

export interface CountdownUnitProps {
  value: number;
  label: string; // "días", "horas"…
}

export function CountdownUnit({ value, label }: CountdownUnitProps) {
  const text = String(value).padStart(2, '0');
  return (
    <div className={styles.unit}>
      <div className={styles.digit}>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={text}
            initial={{ opacity: 0, y: 12, rotateX: -70 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -12, rotateX: 70 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {text}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

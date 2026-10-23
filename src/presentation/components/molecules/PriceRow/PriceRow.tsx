// PriceRow — fila concepto/valor con count-up del precio al entrar
// en vista (Framer Motion animate). Respeta reduced-motion.
import { useEffect, useRef } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { formatCurrency } from '@core/utils/formatCurrency';
import { useReducedMotion } from '@core/hooks/useReducedMotion';
import styles from './PriceRow.module.scss';

export interface PriceRowProps {
  label: string;
  amount: number;
  emphasis?: boolean; // filas de total/aporte destacadas
  isFinal?: boolean; // fila destacada como valor final
  className?: string;
}

export function PriceRow({
  label,
  amount,
  emphasis = false,
  isFinal = false,
  className = '',
}: PriceRowProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    if (reduced) {
      node.textContent = formatCurrency(amount);
      return;
    }
    const controls = animate(0, amount, {
      duration: 0.9,
      ease: 'easeOut',
      onUpdate: (v) => {
        node.textContent = formatCurrency(v);
      },
    });
    return () => controls.stop();
  }, [inView, amount, reduced]);

  const rowClass = [
    styles.row,
    emphasis && styles.emphasis,
    isFinal && styles.final,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.div
      className={rowClass}
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
      }}
    >
      <div className={styles.labelGroup}>
        <span className={styles.label}>{label}</span>
        {isFinal && <span className={styles.finalTag}>VALOR FINAL</span>}
      </div>
      <span ref={ref} className={styles.amount}>
        {formatCurrency(0)}
      </span>
    </motion.div>
  );
}

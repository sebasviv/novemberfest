// CountdownBlock — cuenta regresiva hasta el evento con estado
// "¡Ya empezó!" al llegar a cero. Dígitos animados al cambiar.
import { useCountdown } from '@core/hooks/useCountdown';
import { CountdownUnit } from '@presentation/components/molecules/CountdownUnit';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@presentation/animations/variants';
import styles from './CountdownBlock.module.scss';

export interface CountdownBlockProps {
  targetDateIso: string;
  startedLabel: string;
}

export function CountdownBlock({ targetDateIso, startedLabel }: CountdownBlockProps) {
  const targetMs = new Date(targetDateIso).getTime();
  const { days, hours, minutes, seconds, isStarted } = useCountdown(targetMs);

  if (isStarted) {
    return (
      <motion.p
        className={styles.started}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        role="status"
      >
        {startedLabel}
      </motion.p>
    );
  }

  return (
    <motion.div
      className={styles.countdown}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      role="timer"
      aria-label={`Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`}
    >
      <CountdownUnit value={days} label="días" />
      <CountdownUnit value={hours} label="horas" />
      <CountdownUnit value={minutes} label="min" />
      <CountdownUnit value={seconds} label="seg" />
    </motion.div>
  );
}

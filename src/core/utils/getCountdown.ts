// ============================================================
// getCountdown — diferencia hacia la fecha del evento.
// Se inyecta `now` para facilitar pruebas; por defecto Date.now().
// ============================================================
export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isStarted: boolean; // true cuando ya pasó la fecha ("¡Ya empezó!")
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export function getCountdown(targetMs: number, now: number = Date.now()): CountdownValue {
  const diff = targetMs - now;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isStarted: true };
  }
  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / SECOND),
    isStarted: false,
  };
}

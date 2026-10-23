import { useEffect, useState } from 'react';
import { getCountdown, type CountdownValue } from '@core/utils/getCountdown';

// Cuenta regresiva en vivo (actualiza cada segundo).
export function useCountdown(targetMs: number): CountdownValue {
  const [value, setValue] = useState<CountdownValue>(() => getCountdown(targetMs));

  useEffect(() => {
    setValue(getCountdown(targetMs));
    const id = window.setInterval(() => setValue(getCountdown(targetMs)), 1000);
    return () => window.clearInterval(id);
  }, [targetMs]);

  return value;
}

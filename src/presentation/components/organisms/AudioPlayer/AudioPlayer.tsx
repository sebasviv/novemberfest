// AudioPlayer — Reproductor de sonido ambiental persistente con botón flotante
// visible en todo momento. Intenta reproducir audio.mp3 inmediatamente al inicio;
// si la política de autoplay del navegador lo bloquea, inicia al primer gesto del usuario.
import { motion } from 'framer-motion';
import { audioTrack } from '@assets/index';
import { useBackgroundAudio } from '@core/hooks/useBackgroundAudio';
import { Icon } from '@presentation/components/atoms/Icon';
import styles from './AudioPlayer.module.scss';

export interface AudioPlayerProps {
  src?: string;
  autoPlay?: boolean;
  volume?: number;
}

export function AudioPlayer({
  src = audioTrack,
  autoPlay = true,
  volume = 0.75,
}: AudioPlayerProps) {
  const { isPlaying, toggle, audioRef } = useBackgroundAudio({
    src,
    autoPlay,
    loop: true,
    volume,
  });

  return (
    <div className={styles.floatingContainer}>
      <audio ref={audioRef} src={src} loop preload="auto" playsInline />
      <motion.button
        type="button"
        onClick={toggle}
        className={`${styles.audioButton} ${isPlaying ? styles.playing : styles.muted}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: 'spring', stiffness: 420, damping: 24 }}
        aria-label={isPlaying ? 'Desactivar música de fondo' : 'Activar música de fondo'}
        aria-pressed={isPlaying}
        title={isPlaying ? 'Desactivar sonido' : 'Activar sonido'}
      >
        <Icon name={isPlaying ? 'volumeUp' : 'volumeOff'} size={20} />
        <span className={styles.equalizer} aria-hidden="true">
          <span className={`${styles.bar} ${isPlaying ? styles.animating : ''}`} />
          <span className={`${styles.bar} ${isPlaying ? styles.animating : ''}`} />
          <span className={`${styles.bar} ${isPlaying ? styles.animating : ''}`} />
        </span>
        <span className={styles.label}>{isPlaying ? 'Música' : 'Mudo'}</span>
      </motion.button>
    </div>
  );
}


import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseBackgroundAudioOptions {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  volume?: number;
}

export interface UseBackgroundAudioReturn {
  isPlaying: boolean;
  toggle: () => void;
  play: () => Promise<void>;
  pause: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export function useBackgroundAudio({
  src,
  autoPlay = true,
  loop = true,
  volume = 0.75,
}: UseBackgroundAudioOptions): UseBackgroundAudioReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const userMutedRef = useRef(false);
  const wasPlayingRef = useRef(false);
  const cleanupListenersRef = useRef<(() => void) | null>(null);

  const cleanupFallback = useCallback(() => {
    if (cleanupListenersRef.current) {
      cleanupListenersRef.current();
      cleanupListenersRef.current = null;
    }
  }, []);

  const play = useCallback(async () => {
    userMutedRef.current = false;
    cleanupFallback();
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        // Autoplay/playback restriction
        console.warn('Playback request was blocked or interrupted:', err);
      }
    }
  }, [cleanupFallback]);

  const pause = useCallback(() => {
    userMutedRef.current = true;
    cleanupFallback();
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [cleanupFallback]);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      void play();
    }
  }, [isPlaying, pause, play]);

  // Manejo del ciclo de vida del audio y autoplay con fallback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = Math.min(Math.max(volume, 0), 1);
    audio.loop = loop;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    if (autoPlay && !userMutedRef.current) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // La política de autoplay del navegador bloqueó la reproducción automática con sonido.
            // Activamos un listener único para el primer gesto del usuario (clic, toque, scroll, tecla).
            const events = ['click', 'touchstart', 'pointerdown', 'keydown', 'scroll'] as const;

            const handleFirstInteraction = () => {
              if (!userMutedRef.current && audioRef.current) {
                audioRef.current
                  .play()
                  .then(() => setIsPlaying(true))
                  .catch(() => {});
              }
              cleanupFallback();
            };

            const cleanup = () => {
              events.forEach((evt) => {
                window.removeEventListener(evt, handleFirstInteraction);
                document.removeEventListener(evt, handleFirstInteraction);
              });
            };

            events.forEach((evt) => {
              window.addEventListener(evt, handleFirstInteraction, { once: true, passive: true });
              document.addEventListener(evt, handleFirstInteraction, { once: true, passive: true });
            });

            cleanupListenersRef.current = cleanup;
          });
      }
    }

    // Pausar si el usuario cambia de pestaña y reanudar al volver
    const onVisibilityChange = () => {
      if (document.hidden) {
        if (audioRef.current && !audioRef.current.paused) {
          wasPlayingRef.current = true;
          audioRef.current.pause();
        }
      } else {
        if (wasPlayingRef.current && !userMutedRef.current && audioRef.current) {
          audioRef.current.play().catch(() => {});
          wasPlayingRef.current = false;
        }
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cleanupFallback();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      audio.pause();
    };
  }, [src, autoPlay, loop, volume, cleanupFallback]);

  return {
    isPlaying,
    toggle,
    play,
    pause,
    audioRef,
  };
}


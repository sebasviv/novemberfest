// ============================================================
// variants.ts — Variantes reutilizables de Framer Motion.
// Uso: <motion.div variants={fadeUp} initial="hidden"
//       whileInView="visible" viewport={{ once: true, amount: 0.25 }} />
// Solo animan transform/opacity. Los loops decorativos se hacen
// con CSS (animations.scss) para no saturar el hilo principal.
// ============================================================
import type { Variants } from 'framer-motion';

// Viewport estándar para animaciones de scroll (una sola vez)
export const viewportOnce = { once: true, amount: 0.25 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

// Contenedor que escalona la entrada de sus hijos
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

// Dibujo de trazos SVG (pinceladas): <motion.path variants={drawPath} ... />
export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.9, ease: 'easeInOut' }, opacity: { duration: 0.2 } },
  },
};

// Flotación continua (usar con animate="visible" y repeat vía transition)
export const float: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [-6, 6, -6],
    transition: { duration: 5, ease: 'easeInOut', repeat: Infinity },
  },
};

// Balanceo continuo ±3deg (palmeras)
export const swing: Variants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: [-3, 3, -3],
    transition: { duration: 4.5, ease: 'easeInOut', repeat: Infinity },
  },
};

// Pulso continuo (sol)
export const pulse: Variants = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.07, 1],
    transition: { duration: 3.2, ease: 'easeInOut', repeat: Infinity },
  },
};

// Titileo continuo (sparkles)
export const shine: Variants = {
  hidden: { opacity: 0.3, scale: 0.85 },
  visible: {
    opacity: [0.3, 1, 0.3],
    scale: [0.85, 1.1, 0.85],
    transition: { duration: 2.4, ease: 'easeInOut', repeat: Infinity },
  },
};

// ScrollProgress — barra superior de progreso de scroll (scaleX
// ligado a scrollYProgress). Solo transform: no hay reflow.
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './ScrollProgress.module.scss';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  return <motion.div className={styles.bar} style={{ scaleX }} aria-hidden="true" />;
}

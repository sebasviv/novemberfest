// ScriptText — texto manuscrito elegante ("Cumple de Sebas", subtítulos).
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@presentation/animations/variants';
import styles from './ScriptText.module.scss';

export interface ScriptTextProps {
  text: string;
  as?: 'p' | 'span' | 'h2' | 'h3';
  size?: 'lg' | 'md';
  color?: 'navy' | 'teal' | 'coral' | 'white';
  rotate?: number; // rotación tipo nota pegada (deg)
  className?: string;
}

export function ScriptText({
  text,
  as: Tag = 'p',
  size = 'md',
  color = 'navy',
  rotate = 0,
  className = '',
}: ScriptTextProps) {
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      className={`${styles.script} ${styles[size]} ${styles[color]} ${className}`.trim()}
      style={rotate ? { rotate } : undefined}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {text}
    </MotionTag>
  );
}

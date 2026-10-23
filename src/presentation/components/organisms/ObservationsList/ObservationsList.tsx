// ObservationsList — lista numerada de observaciones con iconos.
import { motion } from 'framer-motion';
import type { Rule } from '@domain/entities';
import { ObservationItem } from '@presentation/components/molecules/ObservationItem';
import { staggerContainer, viewportOnce } from '@presentation/animations/variants';
import styles from './ObservationsList.module.scss';

export interface ObservationsListProps {
  rules: Rule[];
}

export function ObservationsList({ rules }: ObservationsListProps) {
  return (
    <motion.ol
      className={styles.list}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {rules.map((rule, i) => (
        <ObservationItem key={rule.text} rule={rule} index={i + 1} />
      ))}
    </motion.ol>
  );
}

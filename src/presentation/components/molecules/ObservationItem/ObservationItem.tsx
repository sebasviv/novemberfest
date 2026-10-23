// ObservationItem — ítem numerado de observaciones con icono.
import { motion } from 'framer-motion';
import type { Rule } from '@domain/entities';
import { Icon } from '@presentation/components/atoms/Icon';
import { fadeUp } from '@presentation/animations/variants';
import styles from './ObservationItem.module.scss';

export interface ObservationItemProps {
  rule: Rule;
  index: number; // número visible (1-based)
  className?: string;
}

export function ObservationItem({ rule, index, className = '' }: ObservationItemProps) {
  return (
    <motion.li className={`${styles.item} ${className}`.trim()} variants={fadeUp}>
      <span className={styles.number}>{index}</span>
      <span className={styles.iconWrap}>
        <Icon name={rule.icon} size={20} />
      </span>
      <p className={styles.text}>{rule.text}</p>
    </motion.li>
  );
}

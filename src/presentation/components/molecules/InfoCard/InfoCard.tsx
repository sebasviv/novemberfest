// InfoCard — tarjeta con icono + etiqueta manuscrita + valor.
// Usada en "EL PLAN". La nota opcional aparece como texto pequeño.
import { motion } from 'framer-motion';
import type { PlanItem } from '@domain/entities';
import { Icon } from '@presentation/components/atoms/Icon';
import { fadeUp } from '@presentation/animations/variants';
import styles from './InfoCard.module.scss';

export interface InfoCardProps {
  item: PlanItem;
  className?: string;
}

export function InfoCard({ item, className = '' }: InfoCardProps) {
  return (
    <motion.article className={`${styles.card} ${className}`.trim()} variants={fadeUp}>
      <span className={styles.iconWrap}>
        <Icon name={item.icon} size={26} />
      </span>
      <div className={styles.texts}>
        <span className={styles.label}>{item.label}</span>
        <span className={styles.value}>{item.value}</span>
        {item.note && <span className={styles.note}>{item.note}</span>}
      </div>
    </motion.article>
  );
}

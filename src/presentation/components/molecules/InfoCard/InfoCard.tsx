// InfoCard — tarjeta con icono + etiqueta manuscrita + valor.
// Usada en "EL PLAN". Soporta highlight para el valor final.
import { motion } from 'framer-motion';
import type { PlanItem } from '@domain/entities';
import { Icon } from '@presentation/components/atoms/Icon';
import { Badge } from '@presentation/components/atoms/Badge';
import { fadeUp } from '@presentation/animations/variants';
import styles from './InfoCard.module.scss';

export interface InfoCardProps {
  item: PlanItem;
  className?: string;
}

export function InfoCard({ item, className = '' }: InfoCardProps) {
  return (
    <motion.article
      className={`${styles.card} ${item.highlight ? styles.highlight : ''} ${className}`.trim()}
      variants={fadeUp}
    >
      <span className={styles.iconWrap}>
        <Icon name={item.icon} size={26} />
      </span>
      <div className={styles.texts}>
        <div className={styles.labelRow}>
          <span className={styles.label}>{item.label}</span>
          {item.highlight && <Badge text="VALOR FINAL" color="gold" className={styles.badge} />}
        </div>
        <span className={styles.value}>{item.value}</span>
        {item.note && <span className={styles.note}>{item.note}</span>}
      </div>
    </motion.article>
  );
}

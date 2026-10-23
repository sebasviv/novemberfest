// BulletItem — ítem con icono en círculo + texto (listas de mood,
// "tendremos", consideraciones).
import { motion } from 'framer-motion';
import type { IconKey } from '@core/types';
import { Icon } from '@presentation/components/atoms/Icon';
import { fadeUp } from '@presentation/animations/variants';
import styles from './BulletItem.module.scss';

export interface BulletItemProps {
  icon: IconKey;
  text: string;
  color?: 'teal' | 'gold' | 'coral';
  className?: string;
}

export function BulletItem({ icon, text, color = 'teal', className = '' }: BulletItemProps) {
  return (
    <motion.li className={`${styles.item} ${className}`.trim()} variants={fadeUp}>
      <span className={`${styles.iconWrap} ${styles[color]}`}>
        <Icon name={icon} size={20} />
      </span>
      <span>{text}</span>
    </motion.li>
  );
}

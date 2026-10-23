// MenuItemList — lista de platos/ítems con viñetas dibujadas.
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@presentation/animations/variants';
import styles from './MenuItemList.module.scss';

export interface MenuItemListProps {
  title: string; // "Desayuno", "Cena: Hamburguesa"…
  items: string[];
  className?: string;
}

export function MenuItemList({ title, items, className = '' }: MenuItemListProps) {
  return (
    <motion.section
      className={`${styles.block} ${className}`.trim()}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h4 className={styles.title} variants={fadeUp}>
        {title}
      </motion.h4>
      <ul className={styles.list}>
        {items.map((item) => (
          <motion.li key={item} className={styles.item} variants={fadeUp}>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

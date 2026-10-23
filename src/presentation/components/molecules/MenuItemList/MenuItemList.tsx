// MenuItemList — lista de platos/ítems con viñetas dibujadas.
import { motion } from 'framer-motion';
import type { MealPhoto } from '@domain/entities';
import { fadeUp, staggerContainer } from '@presentation/animations/variants';
import styles from './MenuItemList.module.scss';

export interface MenuItemListProps {
  title: string; // "Desayuno", "Cena: Hamburguesa"…
  items: string[];
  photo?: MealPhoto; // foto del plato (opcional)
  className?: string;
}

export function MenuItemList({ title, items, photo, className = '' }: MenuItemListProps) {
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
      <div className={styles.body}>
        <ul className={styles.list}>
          {items.map((item) => (
            <motion.li key={item} className={styles.item} variants={fadeUp}>
              {item}
            </motion.li>
          ))}
        </ul>
        {photo && (
          <motion.figure className={styles.photo} variants={fadeUp}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </motion.figure>
        )}
      </div>
    </motion.section>
  );
}

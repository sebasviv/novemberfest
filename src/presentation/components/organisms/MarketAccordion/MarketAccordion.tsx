// MarketAccordion — listas de mercado (normal y asado) en acordeón
// por categoría. AnimatePresence + height:auto, aria-expanded, y
// totales (subtotal/reserva/total/por persona) al final.
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { MarketList, MarketTotals } from '@domain/entities';
import { formatCurrency } from '@core/utils/formatCurrency';
import { BrushTitle } from '@presentation/components/atoms/BrushTitle';
import { ScriptText } from '@presentation/components/atoms/ScriptText';
import { Icon } from '@presentation/components/atoms/Icon';
import { fadeUp, viewportOnce } from '@presentation/animations/variants';
import styles from './MarketAccordion.module.scss';

export interface MarketAccordionProps {
  list: MarketList;
  totals: MarketTotals;
}

export function MarketAccordion({ list, totals }: MarketAccordionProps) {
  // Primer acordeón abierto por defecto; null = todos cerrados
  const [openId, setOpenId] = useState<string | null>(list.categories[0]?.id ?? null);

  return (
    <section
      id={list.sectionId}
      aria-labelledby={`${list.sectionId}-title`}
      className={styles.section}
    >
      <div className={styles.header}>
        <BrushTitle text={list.heading} as="h2" color="teal" />
        <ScriptText text={list.tagline} color="coral" rotate={-1} />
        <motion.p
          className={styles.intro}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {list.intro}
        </motion.p>
      </div>

      <div className={styles.accordion}>
        {list.categories.map((category) => {
          const isOpen = openId === category.id;
          const categoryTotal = category.items.reduce((sum, item) => sum + item.price, 0);
          return (
            <div key={category.id} className={styles.category}>
              <button
                className={styles.categoryHeader}
                aria-expanded={isOpen}
                aria-controls={`market-panel-${category.id}`}
                id={`market-btn-${category.id}`}
                onClick={() => setOpenId(isOpen ? null : category.id)}
              >
                <span className={styles.categoryName}>
                  <Icon name="cart" size={20} /> {category.name}
                </span>
                <span className={styles.categoryMeta}>
                  {formatCurrency(categoryTotal)}
                  <motion.span
                    className={styles.chevron}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    aria-hidden="true"
                  >
                    ▾
                  </motion.span>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`market-panel-${category.id}`}
                    role="region"
                    aria-labelledby={`market-btn-${category.id}`}
                    className={styles.panel}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: 'easeInOut' }}
                  >
                    <ul className={styles.items}>
                      {category.items.map((item) => (
                        <li key={item.product} className={styles.itemRow}>
                          <span className={styles.product}>{item.product}</span>
                          <span className={styles.quantity}>{item.quantity}</span>
                          <span className={styles.price}>{formatCurrency(item.price)}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <motion.dl
        className={styles.totals}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className={styles.totalRow}>
          <dt>Subtotal</dt>
          <dd>{formatCurrency(totals.subtotal)}</dd>
        </div>
        <div className={styles.totalRow}>
          <dt>Reserva {Math.round(list.reserveRate * 100)}%</dt>
          <dd>{formatCurrency(totals.reserve)}</dd>
        </div>
        <div className={`${styles.totalRow} ${styles.grand}`}>
          <dt>Total con reserva</dt>
          <dd>{formatCurrency(totals.total)}</dd>
        </div>
        <div className={`${styles.totalRow} ${styles.grand}`}>
          <dt>Costo por persona ({list.people})</dt>
          <dd>{formatCurrency(totals.perPerson)}</dd>
        </div>
      </motion.dl>

      {list.closingPhrase && (
        <div className={styles.closing}>
          <ScriptText text={list.closingPhrase} color="teal" rotate={-2} />
        </div>
      )}
    </section>
  );
}

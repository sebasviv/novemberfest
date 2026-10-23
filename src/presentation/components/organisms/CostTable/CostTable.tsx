// CostTable — "CUENTAS CLARAS": tabla semántica con filas en
// cascada y precios con count-up + notas y frases.
// Los totales llegan ya calculados por props (use case).
import { motion } from 'framer-motion';
import type { CostSummary, CostSummaryResult } from '@domain/entities';
import { formatCurrency } from '@core/utils/formatCurrency';
import { SectionHeader } from '@presentation/components/molecules/SectionHeader';
import { ScriptText } from '@presentation/components/atoms/ScriptText';
import { BulletItem } from '@presentation/components/molecules/BulletItem';
import { PriceRow } from '@presentation/components/molecules/PriceRow';
import { fadeUp, staggerContainer, viewportOnce } from '@presentation/animations/variants';
import styles from './CostTable.module.scss';

export interface CostTableProps {
  summary: CostSummary & CostSummaryResult;
}

export function CostTable({ summary }: CostTableProps) {
  return (
    <section
      id={summary.sectionId}
      aria-labelledby={`${summary.sectionId}-title`}
      className={styles.section}
    >
      <SectionHeader
        id={`${summary.sectionId}-title`}
        heading={summary.heading}
        headingAccent={summary.headingAccent}
      />

      <motion.p
        className={styles.intro}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {summary.intro}
      </motion.p>

      <motion.div
        className={styles.tableCard}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Tabla real para accesibilidad (screen readers) */}
        <table className={styles.table}>
          <caption className={styles.srOnly}>Detalle de costos del evento</caption>
          <thead>
            <tr>
              <th scope="col">Concepto</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            {summary.items.map((item) => (
              <tr key={item.label}>
                <th scope="row">{item.label}</th>
                <td>{formatCurrency(item.amount)}</td>
              </tr>
            ))}
            <tr className={styles.totalRow}>
              <th scope="row">{summary.totalLabel}</th>
              <td>{formatCurrency(summary.total)}</td>
            </tr>
            <tr className={styles.totalRow}>
              <th scope="row">{summary.perPersonLabel}</th>
              <td>{formatCurrency(summary.perPerson)}</td>
            </tr>
          </tbody>
        </table>

        {/* Versión visual con count-up (oculta para lectores: duplicada) */}
        <div className={styles.rows} aria-hidden="true">
          {summary.items.map((item) => (
            <PriceRow key={item.label} label={item.label} amount={item.amount} />
          ))}
          <PriceRow label={summary.totalLabel} amount={summary.total} emphasis />
          <PriceRow label={summary.perPersonLabel} amount={summary.perPerson} emphasis />
        </div>
      </motion.div>

      <motion.div
        className={styles.considerations}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h3 className={styles.subheading}>Importante tener en cuenta</h3>
        <ul className={styles.list}>
          {summary.considerations.map((text) => (
            <BulletItem key={text} icon="info" text={text} color="gold" />
          ))}
        </ul>
      </motion.div>

      <motion.div
        className={styles.notes}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h3 className={styles.subheading}>Notas importantes</h3>
        <ul className={styles.list}>
          {summary.notes.map((note) => (
            <BulletItem key={note.text} icon={note.icon} text={note.text} color="teal" />
          ))}
        </ul>
      </motion.div>

      <div className={styles.phrases}>
        {summary.phrases.map((phrase, i) => (
          <ScriptText
            key={phrase}
            text={phrase}
            color={i % 2 === 0 ? 'teal' : 'coral'}
            rotate={i % 2 === 0 ? -2 : 2}
          />
        ))}
      </div>
    </section>
  );
}

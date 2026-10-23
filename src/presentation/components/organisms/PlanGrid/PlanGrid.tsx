// PlanGrid — sección "EL PLAN": tarjetas de info + bloque Airbnb
// con QR generado y frases flotantes.
import { motion } from 'framer-motion';
import type { Plan } from '@domain/entities';
import { AirbnbLogo } from '@assets/index';
import { SectionHeader } from '@presentation/components/molecules/SectionHeader';
import { InfoCard } from '@presentation/components/molecules/InfoCard';
import { TornPaperCard } from '@presentation/components/molecules/TornPaperCard';
import { QRCode } from '@presentation/components/atoms/QRCode';
import { ScriptText } from '@presentation/components/atoms/ScriptText';
import { Icon } from '@presentation/components/atoms/Icon';
import { staggerContainer } from '@presentation/animations/variants';
import styles from './PlanGrid.module.scss';

export interface PlanGridProps {
  plan: Plan;
}

export function PlanGrid({ plan }: PlanGridProps) {
  return (
    <section id={plan.sectionId} aria-labelledby={`${plan.sectionId}-title`} className={styles.section}>
      <SectionHeader
        id={`${plan.sectionId}-title`}
        heading={plan.heading}
        headingAccent={plan.headingAccent}
      />

      <motion.ul
        className={styles.grid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {plan.items.map((item) => (
          <li key={item.label}>
            <InfoCard item={item} />
          </li>
        ))}
      </motion.ul>

      <TornPaperCard color="aqua" rotate={-1} className={styles.airbnb}>
        <div className={styles.airbnbHeader}>
          <AirbnbLogo size={30} />
          <h3 className={styles.airbnbTitle}>Airbnb de la finca</h3>
        </div>
        <a
          className={styles.airbnbLink}
          href={plan.airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="link" size={18} /> {plan.airbnbDisplayUrl}
        </a>
        <QRCode url={plan.airbnbUrl} label={plan.airbnbQrLabel} size={124} />
      </TornPaperCard>

      <div className={styles.phrases} aria-hidden="true">
        {plan.floatingPhrases.map((phrase, i) => (
          <ScriptText
            key={phrase}
            text={phrase}
            color={i % 2 === 0 ? 'teal' : 'coral'}
            rotate={i % 2 === 0 ? -3 : 2}
          />
        ))}
      </div>
    </section>
  );
}

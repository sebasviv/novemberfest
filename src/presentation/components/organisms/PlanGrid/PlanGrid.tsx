// PlanGrid — sección "EL PLAN": tarjetas de info + bloque Airbnb
// con QR generado y frases flotantes.
import { motion } from 'framer-motion';
import type { Plan } from '@domain/entities';
import { AirbnbLogo } from '@assets/index';
import { SectionHeader } from '@presentation/components/molecules/SectionHeader';
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

  const body = 'Un fin de semana para olvidarnos de la rutina, disfrutar de buena música, mucha fiesta, risas interminables y momentos inolvidables con el mejor parche. 😎 ';
  const body2 = 'La idea es simple: reunirnos, celebrar a lo grande, bailar hasta que el cuerpo aguante y crear esas anécdotas que seguiremos contando durante años. 😁'
  const body3 = '¡Prepara tu mejor actitud, que este fin de semana promete! 🙌';

  return (
    <section id={plan.sectionId} aria-labelledby={`${plan.sectionId}-title`} className={styles.section}>
      <SectionHeader
        id={`${plan.sectionId}-title`}
        heading={plan.heading}
        headingAccent={plan.headingAccent}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', paddingLeft: '2rem', paddingRight: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
          <ScriptText
            text={body}
            color="navy"
            rotate={0}
          />
          <ScriptText
            text={body2}
            color="coral"
            rotate={0}
          />
          <ScriptText
            text={body3}
            color="teal"
            rotate={0}
          />
        </div>
      </motion.div>

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

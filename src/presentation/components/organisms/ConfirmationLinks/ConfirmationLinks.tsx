// ConfirmationLinks — "Observaciones + Confirmación": reglas,
// tarjetas con QR (WhatsApp/Airbnb), confeti CSS al confirmar,
// frases y polaroids de cierre.
import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ClosingSection } from '@domain/entities';
import { closingPhotos } from '@assets/index';
import { formatCurrency } from '@core/utils/formatCurrency';
import { useReducedMotion } from '@core/hooks/useReducedMotion';
import { SectionHeader } from '@presentation/components/molecules/SectionHeader';
import { LinkCard } from '@presentation/components/molecules/LinkCard';
import { ObservationsList } from '../ObservationsList';
import { ScriptText } from '@presentation/components/atoms/ScriptText';
import { Badge } from '@presentation/components/atoms/Badge';
import { PolaroidImage } from '@presentation/components/atoms/PolaroidImage';
import { Sticker } from '@presentation/components/atoms/Sticker';
import { fadeUp, staggerContainer, viewportOnce } from '@presentation/animations/variants';
import styles from './ConfirmationLinks.module.scss';

export interface ConfirmationLinksProps {
  closing: ClosingSection;
  finalPrice?: number;
  confirmUrl?: string;
  confirmMessage?: string;
}

const CONFETTI_COLORS = ['#F2B544', '#E8553E', '#1B6E8A', '#CFE6EE', '#F5F7FA'];

export function ConfirmationLinks({
  closing,
  finalPrice,
  confirmUrl,
  confirmMessage,
}: ConfirmationLinksProps) {
  const [confettiBurst, setConfettiBurst] = useState(0);
  const reduced = useReducedMotion();
  const whatsapp = closing.links.find((l) => l.id === 'whatsapp');

  return (
    <section
      id={closing.sectionId}
      aria-labelledby={`${closing.sectionId}-title`}
      className={styles.section}
    >
      <div className={styles.decor} aria-hidden="true">
        <Sticker type="cheers" size={52} className={styles.cheers} />
        <Sticker type="sparkle" size={24} animation="twinkle" className={styles.spark} />
      </div>

      <SectionHeader
        id={`${closing.sectionId}-title`}
        heading={closing.heading}
        headingAccent={closing.headingAccent}
      />

      <div className={styles.phrases}>
        {closing.phrases.map((phrase, i) => (
          <ScriptText
            key={phrase}
            text={phrase}
            color={i % 2 === 0 ? 'teal' : 'coral'}
            rotate={i % 2 === 0 ? -2 : 2}
          />
        ))}
      </div>

      <ObservationsList rules={closing.rules} />

      <motion.div
        className={styles.links}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {closing.links.map((link) => (
          <LinkCard
            key={link.id}
            link={link}
            customUrl={link.id === 'whatsapp' ? confirmUrl : undefined}
            previewMessage={link.id === 'whatsapp' ? confirmMessage : undefined}
            onButtonClick={
              link.id === 'whatsapp' ? () => setConfettiBurst((n) => n + 1) : undefined
            }
          />
        ))}
      </motion.div>

      {whatsapp && (
        <motion.div
          className={styles.confirmCta}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className={styles.finalCallout}>
            <div className={styles.calloutHeader}>
              <Badge text="VALOR FINAL" color="gold" />
              <span className={styles.calloutAmount}>
                {formatCurrency(finalPrice ?? 310_547)}
                <small className={styles.perPerson}> / persona</small>
              </span>
            </div>
            <p className={styles.calloutText}>
              Cubre la finca completa, cocina, todos los mercados y el asado.
            </p>
          </div>

          {/* Confeti ligero con CSS (sin librerías); no se renderiza con reduced-motion */}
          {!reduced && confettiBurst > 0 && (
            <div key={confettiBurst} className={styles.confetti} aria-hidden="true">
              {Array.from({ length: 36 }, (_, i) => (
                <i
                  key={i}
                  style={
                    {
                      left: `${(i * 97) % 100}%`,
                      animationDelay: `${(i % 12) * 0.06}s`,
                      backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
                      '--confetti-x': `${((i % 7) - 3) * 18}px`,
                      '--confetti-r': `${360 + ((i * 137) % 540)}deg`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>
          )}
        </motion.div>
      )}

      <motion.ul
        className={styles.polaroids}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <li>
          <PolaroidImage
            src={closingPhotos.atardecer}
            alt="Atardecer dorado sobre la piscina de la finca"
            caption={closing.polaroidCaptions[0]}
            rotation={-4}
          />
        </li>
        <li>
          <PolaroidImage
            src={closingPhotos.finca}
            alt="Vista general de la finca"
            caption={closing.polaroidCaptions[1]}
            rotation={3}
          />
        </li>
      </motion.ul>
    </section>
  );
}

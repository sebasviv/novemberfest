// ConfirmationLinks — "Observaciones + Confirmación": reglas,
// tarjetas con QR (WhatsApp/Airbnb), confeti CSS al confirmar,
// frases y polaroids de cierre.
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from '@presentation/components/atoms/Button';
import type { ClosingSection } from '@domain/entities';
import { closingPhotos } from '@assets/index';
import { formatCurrency } from '@core/utils/formatCurrency';
import { useReducedMotion } from '@core/hooks/useReducedMotion';
import { SectionHeader } from '@presentation/components/molecules/SectionHeader';
import { LinkCard } from '@presentation/components/molecules/LinkCard';
import { ObservationsList } from '../ObservationsList';
import { ScriptText } from '@presentation/components/atoms/ScriptText';
import { BrushTitle } from '@presentation/components/atoms/BrushTitle';
import { Badge } from '@presentation/components/atoms/Badge';
import { PolaroidImage } from '@presentation/components/atoms/PolaroidImage';
import { Sticker } from '@presentation/components/atoms/Sticker';
import { staggerContainer, viewportOnce } from '@presentation/animations/variants';
import styles from './ConfirmationLinks.module.scss';

export interface ConfirmationLinksProps {
  closing: ClosingSection;
  finalPrice?: number;
  confirmUrl?: string;
  confirmMessage?: string;
}

const BIRTHDAY_CALENDAR_URL =
  'https://calendar.google.com/calendar/u/0/r/eventedit?text=%F0%9F%8E%82+Cumplea%C3%B1os+de+Sebas+Viveros&dates=20261116/20261117&details=%C2%A1Hoy+es+el+cumplea%C3%B1os+de+Sebas+Viveros!+No+te+olvides+de+felicitarlo+%F0%9F%8E%89&recur=RRULE:FREQ%3DYEARLY';

const CONFETTI_COLORS = ['#F2B544', '#E8553E', '#1B6E8A', '#CFE6EE', '#F5F7FA'];

export function ConfirmationLinks({
  closing,
  finalPrice,
  confirmUrl,
  confirmMessage,
}: ConfirmationLinksProps) {
  const [declineOpen, setDeclineOpen] = useState(false);
  const [confettiBurst, setConfettiBurst] = useState(0);
  const reduced = useReducedMotion();

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
          >
            {link.id === 'whatsapp' && (
              <div className={styles.confirmCta}>
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
              </div>
            )}
          </LinkCard>
        ))}
        <LinkCard
          link={{
            id: 'decline',
            title: 'Esta vez no te puedo acompañar.',
            url: BIRTHDAY_CALENDAR_URL,
            qrLabel: 'Cumpleaños de Sebas Viveros',
            buttonLabel: 'No puedo asistir',
          }}
          onAction={() => setDeclineOpen(true)}
        />
      </motion.div>

      <Dialog
        open={declineOpen}
        onClose={() => setDeclineOpen(false)}
        aria-labelledby="decline-dialog-title"
        aria-describedby="decline-dialog-description"
        fullWidth
        maxWidth="sm"
        PaperProps={{ className: styles.declinePaper }}
      >
        <DialogTitle id="decline-dialog-title" className={styles.declineTitle}>
          <BrushTitle text="¡Nooo," as="span" color="coral" withUnderline={false} />
          <ScriptText
            text="te vas a perder tremendo parche! 🥲"
            as="span"
            color="navy"
            className={styles.declineSubtitle}
          />
        </DialogTitle>
        <DialogContent className={styles.declineContent}>
          <div id="decline-dialog-description" className={styles.declineMessage}>
            <p>
              Nos habría encantado contar contigo para un fin de semana de{' '}
              <strong>fiesta, risas y momentos inolvidables.</strong>
            </p>
            <p>Pero tranqui, entendemos que esta vez no se pudo.</p>
            <ScriptText
              text="¡Te vamos a extrañar!"
              color="coral"
              size="lg"
              className={styles.declineFarewell}
            />
            <div className={styles.birthdayNote}>
              <Badge text="16 DE NOVIEMBRE" color="gold" rotate={-2} />
              <ScriptText
                text="Eso sí, que no se te olvide mi cumpleaños. 🎂"
                color="teal"
                className={styles.birthdayReminder}
              />
              <p>
                Dale clic al botón de abajo y agrégalo a tu Google Calendar. Así, aunque no puedas
                acompañarnos,{' '}
                <strong>¡al menos no tendrás excusa para olvidarte de felicitarme!</strong> 😂
              </p>
            </div>
          </div>
        </DialogContent>
        <DialogActions className={styles.declineActions}>
          <Button href={BIRTHDAY_CALENDAR_URL} fullWidth>
            Agregar evento a mi calendario de google
          </Button>
          <Button variant="outline" onClick={() => setDeclineOpen(false)}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>

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

      <p className={styles.officialBirthday}>
        <Badge text="Cumple oficial: 16 de noviembre" color="gold" rotate={2} />
      </p>
    </section>
  );
}

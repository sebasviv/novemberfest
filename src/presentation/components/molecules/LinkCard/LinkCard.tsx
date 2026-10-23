// LinkCard — tarjeta con QR generado + botón grande (WhatsApp/Airbnb).
import { motion } from 'framer-motion';
import type { ConfirmationLink } from '@domain/entities';
import { QRCode } from '@presentation/components/atoms/QRCode';
import { Button } from '@presentation/components/atoms/Button';
import { Icon } from '@presentation/components/atoms/Icon';
import { fadeUp } from '@presentation/animations/variants';
import styles from './LinkCard.module.scss';

export interface LinkCardProps {
  link: ConfirmationLink;
  customUrl?: string;
  previewMessage?: string;
  onButtonClick?: () => void;
  className?: string;
}

export function LinkCard({
  link,
  customUrl,
  previewMessage,
  onButtonClick,
  className = '',
}: LinkCardProps) {
  const isWhatsApp = link.id === 'whatsapp';
  const effectiveUrl = customUrl ?? link.url;

  return (
    <motion.article className={`${styles.card} ${className}`.trim()} variants={fadeUp}>
      <h3 className={styles.title}>
        <Icon name={isWhatsApp ? 'whatsapp' : 'link'} size={22} /> {link.title}
      </h3>
      <QRCode url={effectiveUrl} label={link.qrLabel} size={118} />
      <Button
        href={effectiveUrl}
        variant={isWhatsApp ? 'whatsapp' : 'primary'}
        fullWidth
        ariaLabel={`${link.buttonLabel} (${link.title})`}
        onClick={onButtonClick}
      >
        {link.buttonLabel}
      </Button>

      {/* Vista previa del mensaje de WhatsApp justo debajo del botón */}
      {isWhatsApp && previewMessage && (
        <div className={styles.previewBox}>
          <div className={styles.previewHeader}>
            <Icon name="whatsapp" size={16} />
            <span>Mensaje listo para enviar</span>
          </div>
          <div className={styles.previewBubble}>
            <p className={styles.previewText}>
              “<strong>{previewMessage}</strong>”
            </p>
            <span className={styles.previewTime}>Listo para enviar</span>
          </div>
        </div>
      )}
    </motion.article>
  );
}

// LinkCard — tarjeta con QR generado + botón grande (WhatsApp/Airbnb).
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { ConfirmationLink } from '@domain/entities';
import { QRCode } from '@presentation/components/atoms/QRCode';
import { Button } from '@presentation/components/atoms/Button';
import { Icon } from '@presentation/components/atoms/Icon';
import { fadeUp } from '@presentation/animations/variants';
import styles from './LinkCard.module.scss';

export interface LinkCardProps {
  link: ConfirmationLink;
  children?: ReactNode;
  customUrl?: string;
  onAction?: () => void;
  previewMessage?: string;
  onButtonClick?: () => void;
  className?: string;
}

export function LinkCard({
  link,
  children,
  customUrl,
  onAction,
  previewMessage,
  onButtonClick,
  className = '',
}: LinkCardProps) {
  const isWhatsApp = link.id === 'whatsapp';
  const isDecline = link.id === 'decline';
  const effectiveUrl = customUrl ?? link.url;

  return (
    <motion.article
      className={`${styles.card} ${isDecline ? styles.decline : ''} ${className}`.trim()}
      variants={fadeUp}
    >
      <h3 className={styles.title}>
        <Icon name={isWhatsApp ? 'whatsapp' : 'link'} size={22} /> {link.title}
      </h3>
      {!onAction && <QRCode url={effectiveUrl} label={link.qrLabel} size={118} />}
      {children}
      <Button
        href={onAction ? undefined : effectiveUrl}
        variant={isWhatsApp ? 'whatsapp' : 'primary'}
        fullWidth
        className={isDecline ? styles.declineButton : undefined}
        ariaLabel={`${link.buttonLabel} (${link.title})`}
        onClick={onAction ?? onButtonClick}
      >
        {link.buttonLabel}
      </Button>

      {/* Vista previa del mensaje de WhatsApp justo debajo del botón */}
      {isWhatsApp && previewMessage && (
        <div className={styles.previewBox}>
          <div className={styles.previewHeader}>
            <Icon name="whatsapp" size={16} />
            <span>Copia este mensaje y envíalo al grupo</span>
          </div>
          <div className={styles.previewBubble}>
            <p className={styles.previewText}>
              “<strong>{previewMessage}</strong>”
            </p>
            <span className={styles.previewTime}>El botón abre el grupo de WhatsApp</span>
          </div>
        </div>
      )}
    </motion.article>
  );
}

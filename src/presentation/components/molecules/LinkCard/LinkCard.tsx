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
  className?: string;
}

export function LinkCard({ link, className = '' }: LinkCardProps) {
  const isWhatsApp = link.id === 'whatsapp';
  return (
    <motion.article className={`${styles.card} ${className}`.trim()} variants={fadeUp}>
      <h3 className={styles.title}>
        <Icon name={isWhatsApp ? 'whatsapp' : 'link'} size={22} /> {link.title}
      </h3>
      <QRCode url={link.url} label={link.qrLabel} size={118} />
      <Button
        href={link.url}
        variant={isWhatsApp ? 'whatsapp' : 'primary'}
        fullWidth
        ariaLabel={`${link.buttonLabel} (${link.title})`}
      >
        {link.buttonLabel}
      </Button>
    </motion.article>
  );
}

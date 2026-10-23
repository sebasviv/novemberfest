// QRCode — QR generado en código (qrcode.react), sin imágenes externas.
import { QRCodeSVG } from 'qrcode.react';
import styles from './QRCode.module.scss';

export interface QRCodeProps {
  url: string;
  label?: string; // etiqueta manuscrita debajo ("Escanea aquí")
  size?: number;
  className?: string;
}

export function QRCode({ url, label, size = 128, className = '' }: QRCodeProps) {
  return (
    <figure className={`${styles.qr} ${className}`.trim()}>
      <div className={styles.box}>
        <QRCodeSVG value={url} size={size} level="M" fgColor="#14305E" bgColor="#FFFFFF" />
      </div>
      {label && <figcaption className={styles.label}>{label}</figcaption>}
    </figure>
  );
}

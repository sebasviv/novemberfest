// Footer — cierre con frase, palmera y sol animados sobre agua.
import { backgrounds } from '@assets/index';
import { ScriptText } from '@presentation/components/atoms/ScriptText';
import { AnimatedLogo } from '@presentation/components/atoms/AnimatedLogo';
import { Sticker } from '@presentation/components/atoms/Sticker';
import styles from './Footer.module.scss';

export interface FooterProps {
  text: string;
}

export function Footer({ text }: FooterProps) {
  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: `url(${backgrounds.footerWater})` }}
    >
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <AnimatedLogo size={150} />
        <ScriptText text={text} size="lg" color="white" className={styles.text} />
        <div className={styles.decor} aria-hidden="true">
          <Sticker type="palm" size={72} animation="sway" />
          <Sticker type="sun" size={56} animation="pulse" />
          <Sticker type="wave" size={64} />
        </div>
      </div>
    </footer>
  );
}

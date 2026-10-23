// HeroInvitation — portada a pantalla completa: título cromado +
// brush + script con corona, fechas, lugar, tags, textos flotantes,
// cuenta regresiva y CTA. Parallax suave con transform (sin
// background-attachment: fixed, incompatible con iOS).
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Event } from '@domain/entities';
import { useReducedMotion } from '@core/hooks/useReducedMotion';
import { ChromeTitle } from '@presentation/components/atoms/ChromeTitle';
import { BrushTitle } from '@presentation/components/atoms/BrushTitle';
import { ScriptText } from '@presentation/components/atoms/ScriptText';
import { Badge } from '@presentation/components/atoms/Badge';
import { Button } from '@presentation/components/atoms/Button';
import { Sticker } from '@presentation/components/atoms/Sticker';
import { PortraitSticker } from '@presentation/components/atoms/PortraitSticker';
import { Icon } from '@presentation/components/atoms/Icon';
import { CountdownBlock } from '../CountdownBlock';
import { fadeUp, staggerContainer, viewportOnce } from '@presentation/animations/variants';
import styles from './HeroInvitation.module.scss';

export interface HeroInvitationProps {
  event: Event;
  confirmSectionId: string; // ancla del CTA ("confirmar")
}

export function HeroInvitation({ event, confirmSectionId }: HeroInvitationProps) {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  // Parallax: el fondo baja lento y el retrato sube apenas
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);

  return (
    <header ref={sectionRef} className={styles.hero} id="inicio">
      <motion.div
        className={styles.bg}
        style={reduced ? undefined : { y: bgY }}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />

      {/* Stickers decorativos (aria-hidden dentro del componente) */}
      <div className={styles.decor} aria-hidden="true">
        <Sticker type="palm" size={86} animation="sway" className={styles.palmLeft} />
        <Sticker type="palm" size={86} animation="sway" className={styles.palmRight} />
        <Sticker type="sun" size={64} animation="pulse" className={styles.sun} />
        <Sticker type="disco" size={58} animation="spin" className={styles.disco} />
        <Sticker type="sparkle" size={26} animation="twinkle" className={styles.spark1} />
        <Sticker type="sparkle" size={20} animation="twinkle" className={styles.spark2} />
        <Sticker type="sparkle" size={22} animation="twinkle" className={styles.spark3} />
      </div>

      <motion.div
        className={styles.content}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.portraitWrap} style={reduced ? undefined : { y: portraitY }} variants={fadeUp}>
          <PortraitSticker size={150} />
        </motion.div>

        <div className={styles.titleBlock}>
          <ChromeTitle text={event.title} as="h1" size="xl" />
          <BrushTitle text={event.titleAccent} as="span" size="xl" withUnderline />
          <div className={styles.scriptRow}>
            <Sticker type="crown" size={44} animation="bounce" className={styles.crown} />
            <ScriptText text={event.subtitle} size="lg" color="navy" />
          </div>
        </div>

        <motion.p className={styles.dates} variants={fadeUp}>
          {event.datesLabel}
        </motion.p>
        <motion.p className={styles.location} variants={fadeUp}>
          <Icon name="location" size={20} /> {event.location}
        </motion.p>

        <motion.ul className={styles.tags} variants={fadeUp} aria-label="Vibra del evento">
          {event.tags.map((tag, i) => (
            <li key={tag}>
              <Badge
                text={tag}
                color={(['gold', 'aqua', 'white', 'coral'] as const)[i % 4]}
                rotate={i % 2 === 0 ? -2 : 2}
              />
            </li>
          ))}
        </motion.ul>

        <div className={styles.floating} aria-hidden="true">
          {event.floatingTexts.map((text, i) => (
            <ScriptText
              key={text}
              text={text}
              size="md"
              color={i % 2 === 0 ? 'teal' : 'coral'}
              rotate={i % 2 === 0 ? -4 : 3}
              className={styles.floatText}
            />
          ))}
        </div>

        <CountdownBlock targetDateIso={event.targetDateIso} startedLabel={event.startedLabel} />

        <motion.div variants={fadeUp} viewport={viewportOnce}>
          <Button href={`#${confirmSectionId}`} fullWidth ariaLabel={event.ctaLabel}>
            {event.ctaLabel}
          </Button>
        </motion.div>
      </motion.div>
    </header>
  );
}

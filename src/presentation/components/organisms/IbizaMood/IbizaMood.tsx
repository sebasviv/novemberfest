// IbizaMood — "IBIZA all weekend": mood, chips de música con
// ecualizador animado, "tendremos" y frase de cierre.
import { motion } from 'framer-motion';
import type { IbizaMoodData } from '@domain/entities';
import { SectionHeader } from '@presentation/components/molecules/SectionHeader';
import { ScriptText } from '@presentation/components/atoms/ScriptText';
import { Chip } from '@presentation/components/atoms/Chip';
import { Sticker } from '@presentation/components/atoms/Sticker';
import { BulletItem } from '@presentation/components/molecules/BulletItem';
import { fadeUp, staggerContainer, viewportOnce } from '@presentation/animations/variants';
import styles from './IbizaMood.module.scss';

export interface IbizaMoodProps {
  data: IbizaMoodData;
}

export function IbizaMood({ data }: IbizaMoodProps) {
  return (
    <section
      id={data.sectionId}
      aria-labelledby={`${data.sectionId}-title`}
      className={styles.section}
    >
      <div className={styles.decor} aria-hidden="true">
        <Sticker type="disco" size={72} animation="spin" className={styles.disco} />
        <Sticker type="vinyl" size={54} animation="spin" className={styles.vinyl} />
        <Sticker type="glasses" size={48} className={styles.glasses} />
      </div>

      <SectionHeader
        id={`${data.sectionId}-title`}
        heading={data.heading}
        headingAccent={data.headingAccent}
        tagline={data.subtitle}
      />

      <motion.div
        className={styles.columns}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div className={styles.block} variants={fadeUp}>
          <h3 className={styles.blockTitle}>Mood</h3>
          <ul className={styles.bullets}>
            {data.mood.map((item) => (
              <BulletItem key={item} icon="check" text={item} color="teal" />
            ))}
          </ul>
        </motion.div>

        <motion.div className={styles.block} variants={fadeUp}>
          <h3 className={styles.blockTitle}>Música</h3>
          <div className={styles.chips}>
            {data.music.map((genre, i) => (
              <Chip
                key={genre}
                label={genre}
                withEqualizer
                color={(['teal', 'gold', 'coral', 'aqua'] as const)[i % 4]}
              />
            ))}
          </div>
        </motion.div>

        <motion.div className={styles.block} variants={fadeUp}>
          <h3 className={styles.blockTitle}>Tendremos</h3>
          <ul className={styles.bullets}>
            <BulletItem icon="music" text={data.included[0]} color="gold" />
            <BulletItem icon="headphones" text={data.included[1]} color="gold" />
            <BulletItem icon="restaurant" text={data.included[2]} color="gold" />
          </ul>
        </motion.div>
      </motion.div>

      <div className={styles.closing}>
        <ScriptText text={data.closingText} color="coral" rotate={-1} />
      </div>
    </section>
  );
}

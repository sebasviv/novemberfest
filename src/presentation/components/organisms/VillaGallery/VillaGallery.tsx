// VillaGallery — "La Villa – La Finca": galería de polaroids con
// cinta, entrada rotando/escalando y textos manuscritos.
import { motion } from 'framer-motion';
import type { Venue } from '@domain/entities';
import { SectionHeader } from '@presentation/components/molecules/SectionHeader';
import { PolaroidImage } from '@presentation/components/atoms/PolaroidImage';
import { ScriptText } from '@presentation/components/atoms/ScriptText';
import { Sticker } from '@presentation/components/atoms/Sticker';
import { staggerContainer } from '@presentation/animations/variants';
import styles from './VillaGallery.module.scss';

export interface VillaGalleryProps {
  venue: Venue;
}

export function VillaGallery({ venue }: VillaGalleryProps) {
  return (
    <section
      id={venue.sectionId}
      aria-labelledby={`${venue.sectionId}-title`}
      className={styles.section}
    >
      <div className={styles.decor} aria-hidden="true">
        <Sticker type="wave" size={56} className={styles.wave} />
        <Sticker type="palmLeaf" size={70} animation="sway" className={styles.leaf} />
      </div>

      <SectionHeader
        id={`${venue.sectionId}-title`}
        heading={venue.heading}
        headingAccent={venue.headingAccent}
      />

      <div className={styles.texts}>
        {venue.texts.map((text) => (
          <ScriptText key={text} text={text} color="navy" rotate={-1} />
        ))}
      </div>

      <motion.ul
        className={styles.gallery}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {venue.photos.map((photo) => (
          <li key={photo.caption}>
            <PolaroidImage
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              rotation={photo.rotation}
              width={640}
              height={640}
            />
          </li>
        ))}
      </motion.ul>
    </section>
  );
}

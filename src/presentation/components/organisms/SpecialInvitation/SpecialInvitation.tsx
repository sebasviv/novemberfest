// SpecialInvitation — "INVITACIÓN ESPECIAL PARA <nombre>": tarjeta
// personalizada que solo se renderiza cuando la URL trae ?para=Nombre
// (la decisión la toma el use case: sin nombre llega null y el
// template no la monta).
import type { SpecialInvitationResult } from '@domain/entities';
import { SectionHeader } from '@presentation/components/molecules/SectionHeader';
import { TornPaperCard } from '@presentation/components/molecules/TornPaperCard';
import { ScriptText } from '@presentation/components/atoms/ScriptText';
import { Sticker } from '@presentation/components/atoms/Sticker';
import styles from './SpecialInvitation.module.scss';

export interface SpecialInvitationProps {
  invitation: SpecialInvitationResult;
}

export function SpecialInvitation({ invitation }: SpecialInvitationProps) {
  return (
    <section aria-labelledby="invitacion-especial-title" className={styles.section}>
      <div className={styles.decor} aria-hidden="true">
        <Sticker type="sparkle" size={26} animation="twinkle" className={styles.spark1} />
        <Sticker type="sparkle" size={20} animation="twinkle" className={styles.spark2} />
        <Sticker type="star" size={30} animation="pulse" className={styles.star} />
      </div>

      <SectionHeader
        id="invitacion-especial-title"
        heading={invitation.heading}
        headingAccent={invitation.headingAccent}
      />

      <TornPaperCard color="aqua" rotate={-1} className={styles.card}>
        <Sticker type="crown" size={40} animation="bounce" className={styles.crown} />
        <ScriptText
          text={invitation.guestName}
          as="p"
          size="lg"
          color="coral"
          className={styles.name}
        />
        <p className={styles.tagline}>{invitation.tagline}</p>
      </TornPaperCard>
    </section>
  );
}

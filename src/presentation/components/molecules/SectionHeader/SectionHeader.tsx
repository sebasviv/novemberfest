// SectionHeader — encabezado de sección: título cromado o brush +
// script opcional. Combina ChromeTitle/BrushTitle/ScriptText.
import { ChromeTitle } from '@presentation/components/atoms/ChromeTitle';
import { BrushTitle } from '@presentation/components/atoms/BrushTitle';
import { ScriptText } from '@presentation/components/atoms/ScriptText';
import styles from './SectionHeader.module.scss';

export interface SectionHeaderProps {
  id?: string; // para aria-labelledby de la <section>
  heading: string; // parte principal ("MENÚ", "CUENTAS CLARAS")
  headingAccent?: string; // parte brush/script ("del finde")
  tagline?: string; // línea manuscrita adicional
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeader({
  id,
  heading,
  headingAccent,
  tagline,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${styles[align]} ${className}`.trim()} id={id}>
      <div className={styles.titleRow}>
        <ChromeTitle text={heading} as="h2" />
        {headingAccent && <BrushTitle text={headingAccent} as="span" />}
      </div>
      {tagline && <ScriptText text={tagline} size="md" color="teal" />}
    </div>
  );
}

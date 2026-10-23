// StickyNav — barra de navegación fija inferior (móvil, pulgar) que
// resalta la sección activa según el scroll. En desktop se vuelve
// una píldora centrada. Respeta safe-area inferior de iOS.
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { NavSection } from '@domain/entities';
import { Icon } from '@presentation/components/atoms/Icon';
import styles from './StickyNav.module.scss';

export interface StickyNavProps {
  sections: NavSection[];
}

export function StickyNav({ sections }: StickyNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') return;

    // Se activa la sección cuyo centro esté más cerca del tercio superior
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className={styles.nav} aria-label="Secciones de la invitación">
      <ul className={styles.list}>
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <Icon name={section.icon} size={20} />
                <span className={styles.label}>{section.label}</span>
                {isActive && <motion.span layoutId="nav-pill" className={styles.pill} />}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

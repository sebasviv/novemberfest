// MenuTimeline — "MENÚ del finde": tabs sticky con swipe en móvil.
// Cada día tiene su color (Viernes=gold, Sábado=teal, Domingo=coral).
// Accesible: role=tablist/tab/tabpanel con aria-selected/controls.
import { useRef, useState } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import type { MenuDay, MenuSection } from '@domain/entities';
import { SectionHeader } from '@presentation/components/molecules/SectionHeader';
import { MenuItemList } from '@presentation/components/molecules/MenuItemList';
import { ScriptText } from '@presentation/components/atoms/ScriptText';
import { Icon } from '@presentation/components/atoms/Icon';
import { useReducedMotion } from '@core/hooks/useReducedMotion';
import styles from './MenuTimeline.module.scss';

export interface MenuTimelineProps {
  menu: MenuSection;
}

const SWIPE_THRESHOLD = 60;

export function MenuTimeline({ menu }: MenuTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();
  const directionRef = useRef(0);
  const activeDay: MenuDay = menu.days[activeIndex];

  const goTo = (index: number) => {
    directionRef.current = index > activeIndex ? 1 : -1;
    setActiveIndex(index);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD && activeIndex < menu.days.length - 1) {
      goTo(activeIndex + 1);
    } else if (info.offset.x > SWIPE_THRESHOLD && activeIndex > 0) {
      goTo(activeIndex - 1);
    }
  };

  return (
    <section
      id={menu.sectionId}
      aria-labelledby={`${menu.sectionId}-title`}
      className={styles.section}
    >
      <SectionHeader
        id={`${menu.sectionId}-title`}
        heading={menu.heading}
        headingAccent={menu.headingAccent}
        tagline={menu.tagline}
      />

      {/* Tabs sticky */}
      <div className={styles.tabsBar} role="tablist" aria-label="Días del fin de semana">
        {menu.days.map((day, index) => (
          <button
            key={day.id}
            role="tab"
            id={`tab-${day.id}`}
            aria-selected={index === activeIndex}
            aria-controls={`panel-${day.id}`}
            tabIndex={index === activeIndex ? 0 : -1}
            className={`${styles.tab} ${styles[day.color]} ${index === activeIndex ? styles.active : ''}`}
            onClick={() => goTo(index)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') goTo(Math.min(activeIndex + 1, menu.days.length - 1));
              if (e.key === 'ArrowLeft') goTo(Math.max(activeIndex - 1, 0));
            }}
          >
            <Icon name={index === 0 ? 'dinner' : index === 1 ? 'restaurant' : 'grill'} size={18} />
            {day.label}
          </button>
        ))}
      </div>

      {/* Panel con swipe horizontal */}
      <div className={styles.panelWrap}>
        <AnimatePresence mode="wait" initial={false} custom={directionRef.current}>
          <motion.div
            key={activeDay.id}
            id={`panel-${activeDay.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeDay.id}`}
            className={`${styles.panel} ${styles[activeDay.color]}`}
            drag={reduced ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={onDragEnd}
            initial={{ opacity: 0, x: reduced ? 0 : 40 * (directionRef.current || 1) }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduced ? 0 : -40 * (directionRef.current || 1) }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {activeDay.meals.map((meal) => (
              <MenuItemList key={meal.title} title={meal.title} items={meal.items} photo={meal.photo} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.phrases}>
        {menu.phrases.map((phrase, i) => (
          <ScriptText
            key={phrase}
            text={phrase}
            color={i % 2 === 0 ? 'teal' : 'coral'}
            rotate={i % 2 === 0 ? -2 : 2}
          />
        ))}
      </div>
    </section>
  );
}

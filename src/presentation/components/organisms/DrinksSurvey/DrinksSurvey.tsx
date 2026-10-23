import { motion } from 'framer-motion';
import type { DrinkOptionId, DrinksSurveySection } from '@domain/entities';
import { SectionHeader } from '@presentation/components/molecules/SectionHeader';
import { Badge } from '@presentation/components/atoms/Badge';
import { Sticker } from '@presentation/components/atoms/Sticker';
import { TapeStrip } from '@presentation/components/atoms/TapeStrip';
import { Icon } from '@presentation/components/atoms/Icon';
import { ScriptText } from '@presentation/components/atoms/ScriptText';
import { fadeUp, staggerContainer, viewportOnce } from '@presentation/animations/variants';
import styles from './DrinksSurvey.module.scss';

export interface DrinksSurveyProps {
  survey: DrinksSurveySection;
  guestName?: string | null;
  selectedOption: DrinkOptionId;
  onSelectOption: (id: DrinkOptionId) => void;
  customDetail: string;
  onChangeCustomDetail: (detail: string) => void;
}

const LIQUOR_SUGGESTIONS = ['Tequila', 'Whisky', 'Ron', 'Aguardiente', 'Gin', 'Vodka'];
const OTHER_SUGGESTIONS = ['Bebidas sin alcohol', 'Red Bull', 'Cerveza 0.0', 'Gaseosas', 'Snacks'];

export function DrinksSurvey({
  survey,
  guestName,
  selectedOption,
  onSelectOption,
  customDetail,
  onChangeCustomDetail,
}: DrinksSurveyProps) {
  const hasGuestName = Boolean(guestName && guestName.trim().length > 0);

  return (
    <section
      id={survey.sectionId}
      aria-labelledby={`${survey.sectionId}-title`}
      className={styles.section}
    >
      <div className={styles.decor} aria-hidden="true">
        <Sticker type="cheers" size={54} className={styles.cheers} />
        <Sticker type="sparkle" size={24} animation="twinkle" className={styles.spark1} />
        <Sticker type="sparkle" size={20} animation="twinkle" className={styles.spark2} />
      </div>

      <SectionHeader
        id={`${survey.sectionId}-title`}
        heading={survey.heading}
        headingAccent={survey.headingAccent}
      />

      <div className={styles.container}>
        {/* Tarjeta destacada de la regla */}
        <motion.div
          className={styles.ruleCard}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className={styles.tape}>
            <TapeStrip rotate={-2} width={100} />
          </div>
          <div className={styles.ruleBadge}>
            <Badge text="APORTE OBLIGATORIO DE BEBIDAS" color="gold" />
          </div>
          <p className={styles.ruleText}>
            “<mark>{survey.ruleText}</mark>”
          </p>
          <p className={styles.helpText}>{survey.helpText}</p>
        </motion.div>

        {/* Nombre del invitado desde el query param (solo lectura) */}
        {hasGuestName && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className={styles.guestBox}>
              <span className={styles.guestLabel}>
                <Icon name="check" size={18} />
                <span>
                  Confirmando como: <strong>{guestName?.trim()}</strong>
                </span>
              </span>
            </div>
          </motion.div>
        )}

        {/* Encuesta de opciones */}
        <motion.div
          className={styles.optionsList}
          role="radiogroup"
          aria-label="Encuesta de bebidas para November Fest"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {survey.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            return (
              <motion.div
                key={opt.id}
                role="radio"
                tabIndex={0}
                aria-checked={isSelected}
                className={`${styles.optionCard} ${isSelected ? styles.selected : ''}`}
                onClick={() => onSelectOption(opt.id)}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    onSelectOption(opt.id);
                  }
                }}
                variants={fadeUp}
              >
                <div className={styles.optionIconWrap}>
                  <Icon name={opt.icon} size={24} />
                </div>

                <div className={styles.optionInfo}>
                  <h3 className={styles.optionTitle}>{opt.label}</h3>
                  <p className={styles.optionDesc}>{opt.description}</p>

                  {/* Input contextual si requiere detalle adicional */}
                  {isSelected && opt.requiresCustomInput && (
                    <div
                      className={styles.subDetailBox}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <label htmlFor={`custom-input-${opt.id}`} className={styles.inputLabel}>
                        {opt.id === 'liquor'
                          ? '¿Cuál licor vas a llevar?'
                          : '¿Qué te gustaría llevar?'}
                      </label>
                      <input
                        id={`custom-input-${opt.id}`}
                        type="text"
                        className={styles.textInput}
                        placeholder={opt.customPlaceholder}
                        value={customDetail}
                        onChange={(e) => onChangeCustomDetail(e.target.value)}
                        autoFocus
                      />

                      <div className={styles.chips}>
                        {(opt.id === 'liquor' ? LIQUOR_SUGGESTIONS : OTHER_SUGGESTIONS).map(
                          (item) => {
                            const isActive = customDetail === item;
                            return (
                              <button
                                key={item}
                                type="button"
                                className={`${styles.chip} ${isActive ? styles.chipActive : ''}`}
                                onClick={() => onChangeCustomDetail(item)}
                              >
                                {item}
                              </button>
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.radioIndicator} aria-hidden="true">
                  {isSelected && <span className={styles.radioDot} />}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Nota indicadora de confirmación abajo */}
        <motion.div
          className={styles.selectionNote}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p>
            Tu elección de bebida se incluirá automáticamente en la confirmación de abajo 👇
          </p>
        </motion.div>

        {/* Frases decorativas */}
        {survey.phrases && survey.phrases.length > 0 && (
          <div className={styles.phrases}>
            {survey.phrases.map((phrase, i) => (
              <ScriptText
                key={phrase}
                text={phrase}
                color={i % 2 === 0 ? 'teal' : 'coral'}
                rotate={i % 2 === 0 ? -2 : 2}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

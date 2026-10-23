// InvitationTemplate — orden y espaciado de las secciones, con
// separadores de papel rasgado entre ellas. Recibe todo por props.
import { useMemo, useState } from 'react';
import type {
  ClosingSection,
  CostSummary,
  CostSummaryResult,
  DrinkOptionId,
  DrinksSurveySection,
  Event,
  SummerMoodData,
  MarketList,
  MarketTotals,
  MenuSection,
  NavSection,
  Plan,
  SpecialInvitationResult,
  Venue,
} from '@domain/entities';
import { buildAttendanceMessage } from '@core/utils/buildAttendanceMessage';
import { buildWhatsAppUrl } from '@core/utils/buildWhatsAppUrl';
import { HeroInvitation } from '@presentation/components/organisms/HeroInvitation';
import { SpecialInvitation } from '@presentation/components/organisms/SpecialInvitation';
import { PlanGrid } from '@presentation/components/organisms/PlanGrid';
import { VillaGallery } from '@presentation/components/organisms/VillaGallery';
import { SummerMood } from '@presentation/components/organisms/SummerMood';
import { MenuTimeline } from '@presentation/components/organisms/MenuTimeline';
import { CostTable } from '@presentation/components/organisms/CostTable';
import { MarketAccordion } from '@presentation/components/organisms/MarketAccordion';
import { DrinksSurvey } from '@presentation/components/organisms/DrinksSurvey';
import { ConfirmationLinks } from '@presentation/components/organisms/ConfirmationLinks';
import { StickyNav } from '@presentation/components/organisms/StickyNav';
import { ScrollProgress } from '@presentation/components/organisms/ScrollProgress';
import { AudioPlayer } from '@presentation/components/organisms/AudioPlayer';
import { Footer } from '@presentation/components/organisms/Footer';
import { Divider } from '@presentation/components/atoms/Divider';
import styles from './InvitationTemplate.module.scss';

export interface InvitationTemplateProps {
  event: Event;
  guestName?: string | null;
  specialInvitation: SpecialInvitationResult | null; // null → no se muestra
  plan: Plan;
  venue: Venue;
  summerMood: SummerMoodData;
  menu: MenuSection;
  costs: CostSummary & CostSummaryResult;
  marketNormal: MarketList;
  marketNormalTotals: MarketTotals;
  marketGrill: MarketList;
  marketGrillTotals: MarketTotals;
  drinksSurvey: DrinksSurveySection;
  closing: ClosingSection;
  navSections: NavSection[];
}

export function InvitationTemplate({
  event,
  guestName = null,
  specialInvitation,
  plan,
  venue,
  summerMood,
  menu,
  costs,
  marketNormal,
  marketNormalTotals,
  marketGrill,
  marketGrillTotals,
  drinksSurvey,
  closing,
  navSections,
}: InvitationTemplateProps) {
  const [selectedDrink, setSelectedDrink] = useState<DrinkOptionId>('beer');
  const [customDrinkDetail, setCustomDrinkDetail] = useState('');

  const personalizedMessage = useMemo(() => {
    return buildAttendanceMessage({
      guestName,
      optionId: selectedDrink,
      customDetail: customDrinkDetail,
    });
  }, [guestName, selectedDrink, customDrinkDetail]);

  const whatsappUrl =
    closing.links.find((l) => l.id === 'whatsapp')?.url ?? 'https://api.whatsapp.com/send';

  const whatsappConfirmUrl = useMemo(() => {
    return buildWhatsAppUrl(whatsappUrl, personalizedMessage);
  }, [whatsappUrl, personalizedMessage]);

  return (
    <div className={styles.page}>
      <ScrollProgress />
      <AudioPlayer />
      <HeroInvitation event={event} confirmSectionId={closing.sectionId} />
      <main>
        <Divider color="sand" />
        {specialInvitation && (
          <>
            <SpecialInvitation invitation={specialInvitation} />
            <Divider color="white" flip />
          </>
        )}
        <PlanGrid plan={plan} />
        <Divider color="white" flip />
        <VillaGallery venue={venue} />
        <Divider color="teal" />
        <SummerMood data={summerMood} />
        <Divider color="sand" flip />
        <MenuTimeline menu={menu} />
        <Divider color="white" />
        <CostTable summary={costs} />
        <Divider color="sand" flip />
        <MarketAccordion list={marketNormal} totals={marketNormalTotals} />
        <MarketAccordion list={marketGrill} totals={marketGrillTotals} />
        <Divider color="sand" flip />
        <DrinksSurvey
          survey={drinksSurvey}
          guestName={guestName}
          selectedOption={selectedDrink}
          onSelectOption={setSelectedDrink}
          customDetail={customDrinkDetail}
          onChangeCustomDetail={setCustomDrinkDetail}
        />
        <Divider color="white" />
        <ConfirmationLinks
          closing={closing}
          finalPrice={costs.perPerson}
          confirmUrl={whatsappConfirmUrl}
          confirmMessage={personalizedMessage}
        />
      </main>
      <Footer text={closing.footerText} />
      <StickyNav sections={navSections} />
    </div>
  );
}

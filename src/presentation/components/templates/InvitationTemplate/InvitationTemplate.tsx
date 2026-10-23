// InvitationTemplate — orden y espaciado de las secciones, con
// separadores de papel rasgado entre ellas. Recibe todo por props.
import type {
  ClosingSection,
  CostSummary,
  CostSummaryResult,
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
import { HeroInvitation } from '@presentation/components/organisms/HeroInvitation';
import { SpecialInvitation } from '@presentation/components/organisms/SpecialInvitation';
import { PlanGrid } from '@presentation/components/organisms/PlanGrid';
import { VillaGallery } from '@presentation/components/organisms/VillaGallery';
import { SummerMood } from '@presentation/components/organisms/SummerMood';
import { MenuTimeline } from '@presentation/components/organisms/MenuTimeline';
import { CostTable } from '@presentation/components/organisms/CostTable';
import { MarketAccordion } from '@presentation/components/organisms/MarketAccordion';
import { ConfirmationLinks } from '@presentation/components/organisms/ConfirmationLinks';
import { StickyNav } from '@presentation/components/organisms/StickyNav';
import { ScrollProgress } from '@presentation/components/organisms/ScrollProgress';
import { Footer } from '@presentation/components/organisms/Footer';
import { Divider } from '@presentation/components/atoms/Divider';
import styles from './InvitationTemplate.module.scss';

export interface InvitationTemplateProps {
  event: Event;
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
  closing: ClosingSection;
  navSections: NavSection[];
}

export function InvitationTemplate({
  event,
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
  closing,
  navSections,
}: InvitationTemplateProps) {
  return (
    <div className={styles.page}>
      <ScrollProgress />
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
        <Divider color="white" />
        <ConfirmationLinks closing={closing} />
      </main>
      <Footer text={closing.footerText} />
      <StickyNav sections={navSections} />
    </div>
  );
}

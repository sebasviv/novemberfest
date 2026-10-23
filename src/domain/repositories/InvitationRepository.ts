// Contrato del repositorio de contenido de la invitación.
// La capa data lo implementa con invitation.data.ts.
import type {
  ClosingSection,
  CostSummary,
  DrinksSurveySection,
  Event,
  SummerMoodData,
  MarketList,
  MenuSection,
  NavSection,
  Plan,
  SpecialInvitation,
  Venue,
} from '@domain/entities';

export interface InvitationRepository {
  getEventInfo(): Event;
  getSpecialInvitation(): SpecialInvitation;
  getPlan(): Plan;
  getVenue(): Venue;
  getSummerMood(): SummerMoodData;
  getMenu(): MenuSection;
  getCostSummary(): CostSummary;
  getMarketNormal(): MarketList;
  getMarketGrill(): MarketList;
  getDrinksSurvey(): DrinksSurveySection;
  getClosing(): ClosingSection;
  getNavSections(): NavSection[];
}

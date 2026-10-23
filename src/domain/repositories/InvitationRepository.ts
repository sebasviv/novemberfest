// Contrato del repositorio de contenido de la invitación.
// La capa data lo implementa con invitation.data.ts.
import type {
  ClosingSection,
  CostSummary,
  Event,
  SummerMoodData,
  MarketList,
  MenuSection,
  NavSection,
  Plan,
  Venue,
} from '@domain/entities';

export interface InvitationRepository {
  getEventInfo(): Event;
  getPlan(): Plan;
  getVenue(): Venue;
  getSummerMood(): SummerMoodData;
  getMenu(): MenuSection;
  getCostSummary(): CostSummary;
  getMarketNormal(): MarketList;
  getMarketGrill(): MarketList;
  getClosing(): ClosingSection;
  getNavSections(): NavSection[];
}

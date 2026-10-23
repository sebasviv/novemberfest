// Implementación del repositorio: lee el datasource local tipado.
import type { InvitationRepository } from '@domain/repositories/InvitationRepository';
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
import {
  closing,
  costs,
  drinksSurvey,
  event,
  summerMood,
  marketGrill,
  marketNormal,
  menu,
  navSections,
  plan,
  specialInvitation,
  venue,
} from '@data/datasources/invitation.data';

export class InvitationRepositoryImpl implements InvitationRepository {
  getEventInfo(): Event {
    return event;
  }
  getSpecialInvitation(): SpecialInvitation {
    return specialInvitation;
  }
  getPlan(): Plan {
    return plan;
  }
  getVenue(): Venue {
    return venue;
  }
  getSummerMood(): SummerMoodData {
    return summerMood;
  }
  getMenu(): MenuSection {
    return menu;
  }
  getCostSummary(): CostSummary {
    return costs;
  }
  getMarketNormal(): MarketList {
    return marketNormal;
  }
  getMarketGrill(): MarketList {
    return marketGrill;
  }
  getDrinksSurvey(): DrinksSurveySection {
    return drinksSurvey;
  }
  getClosing(): ClosingSection {
    return closing;
  }
  getNavSections(): NavSection[] {
    return navSections;
  }
}

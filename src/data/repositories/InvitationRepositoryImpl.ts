// Implementación del repositorio: lee el datasource local tipado.
import type { InvitationRepository } from '@domain/repositories/InvitationRepository';
import type {
  ClosingSection,
  CostSummary,
  Event,
  IbizaMoodData,
  MarketList,
  MenuSection,
  NavSection,
  Plan,
  Venue,
} from '@domain/entities';
import {
  closing,
  costs,
  event,
  ibiza,
  marketGrill,
  marketNormal,
  menu,
  navSections,
  plan,
  venue,
} from '@data/datasources/invitation.data';

export class InvitationRepositoryImpl implements InvitationRepository {
  getEventInfo(): Event {
    return event;
  }
  getPlan(): Plan {
    return plan;
  }
  getVenue(): Venue {
    return venue;
  }
  getIbizaMood(): IbizaMoodData {
    return ibiza;
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
  getClosing(): ClosingSection {
    return closing;
  }
  getNavSections(): NavSection[] {
    return navSections;
  }
}

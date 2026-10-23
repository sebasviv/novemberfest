import type { ClosingSection, IbizaMoodData, NavSection, Venue } from '@domain/entities';
import type { InvitationRepository } from '@domain/repositories/InvitationRepository';

export class GetVenue {
  constructor(private readonly repo: InvitationRepository) {}

  execute(): Venue {
    return this.repo.getVenue();
  }
}

export class GetIbizaMood {
  constructor(private readonly repo: InvitationRepository) {}

  execute(): IbizaMoodData {
    return this.repo.getIbizaMood();
  }
}

export class GetObservations {
  constructor(private readonly repo: InvitationRepository) {}

  execute(): ClosingSection {
    return this.repo.getClosing();
  }
}

export class GetNavSections {
  constructor(private readonly repo: InvitationRepository) {}

  execute(): NavSection[] {
    return this.repo.getNavSections();
  }
}

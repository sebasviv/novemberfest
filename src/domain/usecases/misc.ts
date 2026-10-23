import type { ClosingSection, NavSection, SummerMoodData, Venue } from '@domain/entities';
import type { InvitationRepository } from '@domain/repositories/InvitationRepository';

export class GetVenue {
  constructor(private readonly repo: InvitationRepository) {}

  execute(): Venue {
    return this.repo.getVenue();
  }
}

export class GetSummerMood {
  constructor(private readonly repo: InvitationRepository) {}

  execute(): SummerMoodData {
    return this.repo.getSummerMood();
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

import type { MenuSection } from '@domain/entities';
import type { InvitationRepository } from '@domain/repositories/InvitationRepository';

export class GetMenu {
  constructor(private readonly repo: InvitationRepository) {}

  execute(): MenuSection {
    return this.repo.getMenu();
  }
}

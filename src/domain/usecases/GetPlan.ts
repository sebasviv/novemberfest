import type { Plan } from '@domain/entities';
import type { InvitationRepository } from '@domain/repositories/InvitationRepository';

export class GetPlan {
  constructor(private readonly repo: InvitationRepository) {}

  execute(): Plan {
    return this.repo.getPlan();
  }
}

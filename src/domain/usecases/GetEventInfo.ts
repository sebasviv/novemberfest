import type { Event } from '@domain/entities';
import type { InvitationRepository } from '@domain/repositories/InvitationRepository';

export class GetEventInfo {
  constructor(private readonly repo: InvitationRepository) {}

  execute(): Event {
    return this.repo.getEventInfo();
  }
}

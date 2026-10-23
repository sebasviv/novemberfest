// GetSpecialInvitation — combina el contenido base del repo con el
// nombre del invitado que llega por query param (?para=Nombre).
// Sin nombre → null y la sección no se muestra.
import type { SpecialInvitationResult } from '@domain/entities';
import type { InvitationRepository } from '@domain/repositories/InvitationRepository';

export class GetSpecialInvitation {
  constructor(private readonly repo: InvitationRepository) {}

  execute(guestName: string | null): SpecialInvitationResult | null {
    const name = guestName?.trim();
    if (!name) return null;
    return { ...this.repo.getSpecialInvitation(), guestName: name };
  }
}

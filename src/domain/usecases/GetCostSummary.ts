import type { CostSummary, CostSummaryResult } from '@domain/entities';
import type { InvitationRepository } from '@domain/repositories/InvitationRepository';

// Calcula el total base y el aporte por persona (redondeado).
export class GetCostSummary {
  constructor(private readonly repo: InvitationRepository) {}

  execute(): CostSummary & CostSummaryResult {
    const summary = this.repo.getCostSummary();
    const total = summary.items.reduce((acc, item) => acc + item.amount, 0);
    const perPerson = Math.round(total / summary.guests);
    return { ...summary, total, perPerson };
  }
}

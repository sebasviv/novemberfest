import type { MarketList, MarketTotals } from '@domain/entities';
import type { InvitationRepository } from '@domain/repositories/InvitationRepository';

// Totales de una lista de mercado: subtotal, reserva, total y costo por persona.
function computeTotals(list: MarketList): MarketTotals {
  const subtotal = list.categories.reduce(
    (acc, category) => acc + category.items.reduce((sum, item) => sum + item.price, 0),
    0,
  );
  const reserve = Math.round(subtotal * list.reserveRate);
  const total = subtotal + reserve;
  const perPerson = Math.round(total / list.people);
  return { subtotal, reserve, total, perPerson };
}

export interface MarketListResult {
  list: MarketList;
  totals: MarketTotals;
}

export class GetMarketLists {
  constructor(private readonly repo: InvitationRepository) {}

  normal(): MarketListResult {
    const list = this.repo.getMarketNormal();
    return { list, totals: computeTotals(list) };
  }

  grill(): MarketListResult {
    const list = this.repo.getMarketGrill();
    return { list, totals: computeTotals(list) };
  }
}

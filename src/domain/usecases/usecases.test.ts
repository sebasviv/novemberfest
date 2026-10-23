// Pruebas de los cálculos de dinero contra los valores del brief.
import { describe, expect, it } from 'vitest';
import { InvitationRepositoryImpl } from '@data/repositories/InvitationRepositoryImpl';
import { GetCostSummary } from '@domain/usecases/GetCostSummary';
import { GetMarketLists } from '@domain/usecases/GetMarketLists';
import { GetSpecialInvitation } from '@domain/usecases/GetSpecialInvitation';

const repo = new InvitationRepositoryImpl();

describe('GetCostSummary', () => {
  it('total base = $4.968.755', () => {
    const result = new GetCostSummary(repo).execute();
    expect(result.total).toBe(4_968_755);
  });

  it('aporte base por persona (16) = $310.547 (redondeado)', () => {
    const result = new GetCostSummary(repo).execute();
    expect(result.perPerson).toBe(310_547);
  });
});

describe('GetMarketLists', () => {
  it('mercado normal: subtotal 1.611.000, reserva 161.100, total 1.772.100, pp 88.605', () => {
    const { totals } = new GetMarketLists(repo).normal();
    expect(totals.subtotal).toBe(1_611_000);
    expect(totals.reserve).toBe(161_100);
    expect(totals.total).toBe(1_772_100);
    expect(totals.perPerson).toBe(88_605);
  });

  it('asado: subtotal 422.000, reserva 42.200, total 464.200, pp 23.210', () => {
    const { totals } = new GetMarketLists(repo).grill();
    expect(totals.subtotal).toBe(422_000);
    expect(totals.reserve).toBe(42_200);
    expect(totals.total).toBe(464_200);
    expect(totals.perPerson).toBe(23_210);
  });
});

describe('GetSpecialInvitation', () => {
  it('sin nombre en la URL devuelve null (la sección no se muestra)', () => {
    expect(new GetSpecialInvitation(repo).execute(null)).toBeNull();
  });

  it('nombre vacío o solo espacios también devuelve null', () => {
    expect(new GetSpecialInvitation(repo).execute('   ')).toBeNull();
  });

  it('con nombre devuelve el contenido base + el nombre limpio', () => {
    const result = new GetSpecialInvitation(repo).execute('  Ana María  ');
    expect(result).not.toBeNull();
    expect(result?.guestName).toBe('Ana María');
    expect(result?.heading).toBe('INVITACIÓN');
    expect(result?.headingAccent).toBe('ESPECIAL PARA');
  });
});

// Pruebas de los cálculos de dinero contra los valores del brief.
import { describe, expect, it } from 'vitest';
import { InvitationRepositoryImpl } from '@data/repositories/InvitationRepositoryImpl';
import { GetCostSummary } from '@domain/usecases/GetCostSummary';
import { GetMarketLists } from '@domain/usecases/GetMarketLists';
import { GetSpecialInvitation } from '@domain/usecases/GetSpecialInvitation';
import { GetDrinksSurvey } from '@domain/usecases/misc';
import { buildAttendanceMessage } from '@core/utils/buildAttendanceMessage';
import { buildWhatsAppUrl } from '@core/utils/buildWhatsAppUrl';

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

describe('GetDrinksSurvey', () => {
  it('contiene la regla de las bebidas y las 3 opciones requeridas', () => {
    const survey = new GetDrinksSurvey(repo).execute();
    expect(survey.sectionId).toBe('bebidas');
    expect(survey.ruleText).toContain(
      'Aparte del valor final, cada persona debe traer 3 sixpack de cerveza o el licor de su preferencia.'
    );
    expect(survey.options).toHaveLength(3);
    const ids = survey.options.map((o) => o.id);
    expect(ids).toEqual(['beer', 'liquor', 'other']);
  });
});

describe('buildAttendanceMessage', () => {
  it('genera exactamente el mensaje requerido: "Soy ana y voy a llevar 3 six pack de cerveza"', () => {
    const msg = buildAttendanceMessage({
      guestName: 'ana',
      optionId: 'beer',
    });
    expect(msg).toBe('Soy ana y voy a llevar 3 six pack de cerveza');
  });

  it('soporta opción de licor con detalle personalizado', () => {
    const msg = buildAttendanceMessage({
      guestName: 'Carlos',
      optionId: 'liquor',
      customDetail: 'Tequila Don Julio',
    });
    expect(msg).toBe('Soy Carlos y voy a llevar Tequila Don Julio');
  });

  it('soporta opción de licor sin detalle personalizado', () => {
    const msg = buildAttendanceMessage({
      guestName: 'Laura',
      optionId: 'liquor',
    });
    expect(msg).toBe('Soy Laura y voy a llevar algún licor de mi preferencia');
  });

  it('soporta opción de otra cosa', () => {
    const msg = buildAttendanceMessage({
      guestName: 'Pedro',
      optionId: 'other',
      customDetail: 'bebidas sin alcohol y Red Bull',
    });
    expect(msg).toBe('Soy Pedro y voy a llevar bebidas sin alcohol y Red Bull');
  });

  it('funciona cuando no hay nombre de invitado', () => {
    const msg = buildAttendanceMessage({
      guestName: null,
      optionId: 'beer',
    });
    expect(msg).toBe('Hola, voy a llevar 3 six pack de cerveza');
  });
});

describe('buildWhatsAppUrl', () => {
  it('convierte enlaces de grupo en api.whatsapp.com/send cuando hay mensaje', () => {
    const groupUrl = 'https://chat.whatsapp.com/Bzi5DFgDZgHIGJ2Q1lgnal';
    const msg = 'Soy ana y voy a llevar 3 six pack de cerveza';
    const result = buildWhatsAppUrl(groupUrl, msg);
    expect(result).toBe(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`
    );
  });

  it('agrega el texto correctamente a urls directas', () => {
    const waUrl = 'https://api.whatsapp.com/send';
    const msg = 'Soy ana y voy a llevar 3 six pack de cerveza';
    const result = buildWhatsAppUrl(waUrl, msg);
    expect(result).toBe(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`
    );
  });
});

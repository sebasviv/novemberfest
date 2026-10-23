// InvitationPage — ÚNICA página que consume los use cases.
// Toda la data llega al template por props (los componentes de
// presentation no importan datos directamente).
import { useMemo } from 'react';
import { useDependencies } from '@presentation/providers/DependencyProvider';
import { InvitationTemplate } from '@presentation/components/templates/InvitationTemplate';
import { getQueryParam } from '@core/utils/getQueryParam';

export function InvitationPage() {
  const deps = useDependencies();

  // Los use cases son puros: se memoriza el resultado una sola vez
  const data = useMemo(() => {
    const guestName = getQueryParam('para') || getQueryParam('nombre');
    const marketNormal = deps.getMarketLists.normal();
    const marketGrill = deps.getMarketLists.grill();
    return {
      event: deps.getEventInfo.execute(),
      // Nombre del invitado vía URL (?para=Nombre o ?nombre=Nombre); sin él → null y no se muestra
      guestName,
      specialInvitation: deps.getSpecialInvitation.execute(guestName),
      plan: deps.getPlan.execute(),
      venue: deps.getVenue.execute(),
      summerMood: deps.getSummerMood.execute(),
      menu: deps.getMenu.execute(),
      costs: deps.getCostSummary.execute(),
      marketNormal: marketNormal.list,
      marketNormalTotals: marketNormal.totals,
      marketGrill: marketGrill.list,
      marketGrillTotals: marketGrill.totals,
      drinksSurvey: deps.getDrinksSurvey.execute(),
      closing: deps.getObservations.execute(),
      navSections: deps.getNavSections.execute(),
    };
  }, [deps]);

  return <InvitationTemplate {...data} />;
}

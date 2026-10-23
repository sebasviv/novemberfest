// InvitationPage — ÚNICA página que consume los use cases.
// Toda la data llega al template por props (los componentes de
// presentation no importan datos directamente).
import { useMemo } from 'react';
import { useDependencies } from '@presentation/providers/DependencyProvider';
import { InvitationTemplate } from '@presentation/components/templates/InvitationTemplate';

export function InvitationPage() {
  const deps = useDependencies();

  // Los use cases son puros: se memoriza el resultado una sola vez
  const data = useMemo(() => {
    const marketNormal = deps.getMarketLists.normal();
    const marketGrill = deps.getMarketLists.grill();
    return {
      event: deps.getEventInfo.execute(),
      plan: deps.getPlan.execute(),
      venue: deps.getVenue.execute(),
      ibiza: deps.getIbizaMood.execute(),
      menu: deps.getMenu.execute(),
      costs: deps.getCostSummary.execute(),
      marketNormal: marketNormal.list,
      marketNormalTotals: marketNormal.totals,
      marketGrill: marketGrill.list,
      marketGrillTotals: marketGrill.totals,
      closing: deps.getObservations.execute(),
      navSections: deps.getNavSections.execute(),
    };
  }, [deps]);

  return <InvitationTemplate {...data} />;
}

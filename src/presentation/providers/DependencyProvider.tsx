// Inyección simple de dependencias: crea repositorio + use cases
// una sola vez y los expone por contexto a InvitationPage.
import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { InvitationRepositoryImpl } from '@data/repositories/InvitationRepositoryImpl';
import { GetEventInfo } from '@domain/usecases/GetEventInfo';
import { GetSpecialInvitation } from '@domain/usecases/GetSpecialInvitation';
import { GetPlan } from '@domain/usecases/GetPlan';
import { GetMenu } from '@domain/usecases/GetMenu';
import { GetCostSummary } from '@domain/usecases/GetCostSummary';
import { GetMarketLists } from '@domain/usecases/GetMarketLists';
import {
  GetDrinksSurvey,
  GetNavSections,
  GetObservations,
  GetSummerMood,
  GetVenue,
} from '@domain/usecases/misc';

export interface Dependencies {
  getEventInfo: GetEventInfo;
  getSpecialInvitation: GetSpecialInvitation;
  getPlan: GetPlan;
  getMenu: GetMenu;
  getCostSummary: GetCostSummary;
  getMarketLists: GetMarketLists;
  getSummerMood: GetSummerMood;
  getDrinksSurvey: GetDrinksSurvey;
  getObservations: GetObservations;
  getVenue: GetVenue;
  getNavSections: GetNavSections;
}

const DependencyContext = createContext<Dependencies | null>(null);

export function DependencyProvider({ children }: { children: ReactNode }) {
  const deps = useMemo<Dependencies>(() => {
    const repo = new InvitationRepositoryImpl();
    return {
      getEventInfo: new GetEventInfo(repo),
      getSpecialInvitation: new GetSpecialInvitation(repo),
      getPlan: new GetPlan(repo),
      getMenu: new GetMenu(repo),
      getCostSummary: new GetCostSummary(repo),
      getMarketLists: new GetMarketLists(repo),
      getSummerMood: new GetSummerMood(repo),
      getDrinksSurvey: new GetDrinksSurvey(repo),
      getObservations: new GetObservations(repo),
      getVenue: new GetVenue(repo),
      getNavSections: new GetNavSections(repo),
    };
  }, []);

  return <DependencyContext.Provider value={deps}>{children}</DependencyContext.Provider>;
}

export function useDependencies(): Dependencies {
  const ctx = useContext(DependencyContext);
  if (!ctx) throw new Error('useDependencies debe usarse dentro de <DependencyProvider>');
  return ctx;
}

// Entidades del dominio — sin React ni librerías externas.
import type { IconKey } from '@core/types';

// ---------- 6.1 Hero / evento ----------
export interface Event {
  title: string; // "NOVEMBER"
  titleAccent: string; // "FEST"
  subtitle: string; // "Cumple de Sebas"
  datesLabel: string; // "20 · 21 · 22 NOV 2026"
  targetDateIso: string; // ISO con offset de Colombia
  location: string; // "La Mesa, Cundinamarca"
  tags: string[];
  floatingTexts: string[]; // textos manuscritos flotantes
  ctaLabel: string; // "Confirmar asistencia"
  startedLabel: string; // "¡Ya empezó!"
}

// ---------- 6.2 El plan ----------
export interface PlanItem {
  icon: IconKey;
  label: string;
  value: string;
  note?: string; // nota manuscrita opcional (ej. acompañante extra)
}

export interface Plan {
  sectionId: string;
  heading: string; // "EL"
  headingAccent: string; // "PLAN"
  items: PlanItem[];
  airbnbDisplayUrl: string; // URL corta visible
  airbnbUrl: string; // URL completa para href y QR
  airbnbQrLabel: string; // "Escanea aquí"
  floatingPhrases: string[];
}

// ---------- 6.3 La Villa ----------
export interface VenuePhoto {
  src: string;
  alt: string;
  caption: string;
  rotation: number; // grados de rotación de la polaroid
}

export interface Venue {
  sectionId: string;
  heading: string; // "La Villa"
  headingAccent: string; // "LA FINCA"
  texts: string[];
  photos: VenuePhoto[];
}

// ---------- 6.4 Ibiza all weekend ----------
export interface IbizaMoodData {
  sectionId: string;
  heading: string; // "IBIZA"
  headingAccent: string; // "all weekend"
  subtitle: string;
  mood: string[];
  music: string[];
  included: string[];
  closingText: string;
}

// ---------- 6.5 Menú ----------
export interface Meal {
  title: string; // "Desayuno", "Cena: Hamburguesa"…
  items: string[];
}

export type MenuDayColor = 'gold' | 'teal' | 'coral';

export interface MenuDay {
  id: string;
  label: string; // "Viernes 20"
  color: MenuDayColor;
  meals: Meal[];
}

export interface MenuSection {
  sectionId: string;
  heading: string; // "MENÚ"
  headingAccent: string; // "del finde"
  tagline: string; // "Ibiza vibes · Buena comida · Mejores amigos"
  days: MenuDay[];
  phrases: string[];
}

// ---------- 6.6 Cuentas claras ----------
export interface CostItem {
  label: string;
  amount: number; // COP
}

export interface CostNote {
  icon: IconKey;
  text: string;
}

export interface CostSummary {
  sectionId: string;
  heading: string; // "CUENTAS CLARAS"
  headingAccent: string; // "amigos duraderos"
  intro: string;
  items: CostItem[]; // base de la tabla
  totalLabel: string; // "Total base"
  perPersonLabel: string; // "Aporte base por persona (16)"
  considerations: string[];
  notes: CostNote[];
  phrases: string[];
  guests: number; // 16
}

// Resultado calculado por el use case
export interface CostSummaryResult {
  items: CostItem[];
  total: number;
  perPerson: number;
  guests: number;
}

// ---------- 6.7 / 6.8 Mercado ----------
export interface MarketItem {
  product: string;
  quantity: string;
  price: number; // COP
}

export interface MarketCategory {
  id: string;
  name: string;
  items: MarketItem[];
}

export interface MarketList {
  sectionId: string;
  heading: string; // "Mercado normal" / "Mercado para asado colombiano"
  tagline: string;
  intro: string;
  people: number; // 20
  reserveRate: number; // 0.10
  categories: MarketCategory[];
  closingPhrase?: string;
}

// Resultado calculado por el use case
export interface MarketTotals {
  subtotal: number;
  reserve: number;
  total: number;
  perPerson: number;
}

// ---------- 6.9 Observaciones + confirmación ----------
export interface Rule {
  icon: IconKey;
  text: string;
}

export interface ConfirmationLink {
  id: 'whatsapp' | 'airbnb';
  title: string;
  url: string;
  qrLabel: string;
  buttonLabel: string;
}

export interface ClosingSection {
  sectionId: string;
  heading: string; // "Observaciones"
  headingAccent: string; // "Confirmación"
  phrases: string[];
  rules: Rule[];
  links: ConfirmationLink[];
  footerText: string;
  polaroidCaptions: string[];
}

// ---------- Navegación ----------
export interface NavSection {
  id: string;
  label: string;
  icon: IconKey;
}

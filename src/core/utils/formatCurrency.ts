// Formato de moneda colombiana sin decimales: $310.547
const copFormatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
});

export function formatCurrency(value: number): string {
  return copFormatter.format(Math.round(value));
}

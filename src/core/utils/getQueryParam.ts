// Lee un query param de la URL actual (ej. ?para=Ana).
// También busca dentro del hash por si el link llega como
// #seccion?para=Ana (la invitación usa anclas tipo #confirmar).
// Devuelve null si el parámetro no existe o viene vacío.
export function getQueryParam(key: string): string | null {
  if (typeof window === 'undefined') return null;

  const sources = [window.location.search];
  const hashQueryStart = window.location.hash.indexOf('?');
  if (hashQueryStart >= 0) sources.push(window.location.hash.slice(hashQueryStart));

  for (const source of sources) {
    const value = new URLSearchParams(source).get(key)?.trim();
    if (value) return value;
  }
  return null;
}

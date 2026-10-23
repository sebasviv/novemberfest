// Construye una URL universal de WhatsApp (app o web) con mensaje opcional.
export function buildWhatsAppUrl(baseUrl: string, message?: string): string {
  if (!message) return baseUrl;
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}text=${encodeURIComponent(message)}`;
}

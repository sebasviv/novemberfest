// Construye una URL universal de WhatsApp (app o web) con mensaje opcional.
// Si baseUrl es una invitación de grupo (chat.whatsapp.com), WhatsApp no acepta ?text=;
// se conserva el enlace del grupo para no perder el destino de la confirmación.
export function buildWhatsAppUrl(baseUrl: string, message?: string, phone?: string): string {
  if (new URL(baseUrl).hostname === 'chat.whatsapp.com') return baseUrl;
  if (!message) return baseUrl;
  if (phone) {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
  }
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}text=${encodeURIComponent(message)}`;
}

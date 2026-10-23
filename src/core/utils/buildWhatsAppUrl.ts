// Construye una URL universal de WhatsApp (app o web) con mensaje opcional.
// Si baseUrl es una invitación de grupo (chat.whatsapp.com), WhatsApp no acepta ?text=;
// en ese caso se usa api.whatsapp.com/send?text= para que WhatsApp se abra con el mensaje
// listo para enviar al grupo o contacto deseado.
export function buildWhatsAppUrl(baseUrl: string, message?: string, phone?: string): string {
  if (!message) return baseUrl;
  if (phone) {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
  }
  if (baseUrl.includes('chat.whatsapp.com')) {
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  }
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}text=${encodeURIComponent(message)}`;
}

import type { DrinkOptionId } from '@domain/entities';

export interface AttendanceMessageParams {
  guestName?: string | null;
  optionId: DrinkOptionId;
  customDetail?: string;
}

/**
 * Genera el mensaje personalizado de confirmación para WhatsApp.
 * Ejemplo solicitado: "Soy ana y voy a llevar 3 six pack de cerveza"
 */
export function buildAttendanceMessage({
  guestName,
  optionId,
  customDetail,
}: AttendanceMessageParams): string {
  const trimmedName = guestName?.trim();

  let detail = '3 six pack de cerveza';
  if (optionId === 'beer') {
    detail = '3 six pack de cerveza';
  } else if (optionId === 'liquor') {
    const trimmedCustom = customDetail?.trim();
    detail = trimmedCustom ? trimmedCustom : 'algún licor de mi preferencia';
  } else if (optionId === 'other') {
    const trimmedCustom = customDetail?.trim();
    detail = trimmedCustom ? trimmedCustom : 'otra cosa de mi preferencia';
  }

  if (trimmedName) {
    return `Soy ${trimmedName} y voy a llevar ${detail}`;
  }
  return `Hola, voy a llevar ${detail}`;
}


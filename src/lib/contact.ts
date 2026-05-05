export const CONTACT_EMAIL = "info.jewelsfoundation@gmail.com";
export const CONTACT_WHATSAPP = "2348033203635";
export const CONTACT_WHATSAPP_DISPLAY = "+234 803 320 3635";

// All CTAs route to WhatsApp. Function name preserved for backwards compatibility.
export const buildMailto = (subject: string, body = "") => {
  const message = body ? `${subject}\n\n${body}` : subject;
  return `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(message)}`;
};

export const buildWhatsApp = buildMailto;
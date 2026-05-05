export const CONTACT_EMAIL = "info.jewelsfoundation@gmail.com";

export const buildMailto = (subject: string, body = "") =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
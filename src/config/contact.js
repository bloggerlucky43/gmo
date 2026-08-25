/* ------------------------------------------------------------------
 * Single source of truth for company contact details.
 * Change a number or address here and it updates everywhere.
 * ------------------------------------------------------------------ */

export const COMPANY_NAME = "GMO Technic Ltd";
export const ADDRESS =
  "No 7, Ajegunle Ewekoro, Lagos/Abeokuta Road, Ogun State";
export const PHONES = ["08165682612", "08032930304"];
export const EMAIL = "oshiektech4@gmail.com";

// TODO(owner): confirm this is the right WhatsApp line. Derived from the office
// number 08165682612 -> 234 816 568 2612. wa.me needs the country code with no
// "+", no spaces and no leading zero.
export const WHATSAPP_NUMBER = "2348165682612";

/* TODO(owner): paste the real profile URLs here. Anything left empty is
 * filtered out of the UI, so no dead links are ever rendered. */
export const SOCIAL_URLS = {
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",
};

// Nigerian mobile numbers: drop the leading 0, prefix +234.
export const telHref = (local) => `tel:+234${local.replace(/^0/, "")}`;

export const mailtoHref = (subject = "", body = "") => {
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${EMAIL}${params.length ? `?${params.join("&")}` : ""}`;
};

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${ADDRESS}, Nigeria`
)}`;

export const whatsappHref = (
  message = "Hello GMO, I would like to enquire about your services."
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

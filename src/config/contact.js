/* ------------------------------------------------------------------
 * Single source of truth for company contact details.
 * Change a number or address here and it updates everywhere.
 * ------------------------------------------------------------------ */

export const COMPANY_NAME = "GMO Technic Ltd";

/* Registered name and CAC number, taken from the company profile document in
 * src/assets. Procurement and tender teams look for both, so they are rendered
 * in the footer and on the About page rather than left in a file. */
export const LEGAL_NAME = "Godfrey M. Oshieku Technical Nigeria LTD";
export const RC_NUMBER = "636308";
export const FOUNDED_YEAR = 2005;
export const INDUSTRY =
  "General Contracting, Engineering & Industrial Services";

export const ADDRESS =
  "No 7, Ajegunle Ewekoro, Lagos/Abeokuta Road, Ogun State";

/* TODO(owner): the profile document gives the second line as 08035325022, but
 * the site has been publishing 08032930304. They differ from the 5th digit on,
 * so this is not a typo in one place - one of the two is the wrong number.
 * Confirm which is current and delete the other. */
export const PHONES = ["08165682612", "08032930304"];
export const EMAIL = "oshiektech4@gmail.com";

/* The profile document claims "over 20 years of industry experience" against a
 * 2005 founding date. Deriving the figure means the site never goes stale, and
 * flooring to the nearest five keeps it to the round, defensible number the
 * company itself publishes ("20+", not "21+"). */
export const yearsInIndustry = () =>
  Math.floor((new Date().getFullYear() - FOUNDED_YEAR) / 5) * 5;
export const yearsInIndustryLabel = () => `${yearsInIndustry()}+`;

/* Mission and vision, verbatim from the profile document. The vision doubles as
 * the company slogan, so it appears on its own as well as in the pairing. */
export const MISSION =
  "To provide dependable technical and contracting solutions that exceed client expectations through professionalism, innovation, and continuous growth.";
export const VISION = "Breaking Limits through Growth and Professionalism.";
export const SLOGAN = "Breaking Limits";

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

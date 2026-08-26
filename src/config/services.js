/* ------------------------------------------------------------------
 * Single source of truth for what the company offers.
 *
 * The first twelve entries are the "Our Services" list from the company profile
 * document in src/assets, in the document's own order.
 *
 * Equipment rental is the one entry not in that document. It is kept on the
 * owner's instruction - the company does hire plant out, and the site has a
 * whole /equipment page for it, so the document's list is incomplete rather
 * than the site being wrong. `documented: false` records that distinction.
 *
 * Removed on the owner's instruction, having had no backing in the document:
 * "Industrial Cleaning Services" and "Water Treatment & Sanitation".
 *
 * Everything that shows a service list reads from here: the services grid, the
 * footer, the quote form dropdown and the contact form dropdown. Add a service
 * once and it appears in all of them.
 * ------------------------------------------------------------------ */

export const SERVICES = [
  { name: "Electrical Installation & Maintenance", documented: true },
  { name: "Mechanical Fabrication & Fittings", documented: true },
  { name: "Civil Engineering Jobs", documented: true },
  { name: "Shutdown Services", documented: true },
  { name: "Rehabilitation of Mining Areas", documented: true },
  { name: "Vegetation Control Services", documented: true },
  { name: "Adhoc Industrial Services", documented: true },
  { name: "Landscaping & Site Preparation", documented: true },
  { name: "General Contracting Services", documented: true },
  { name: "Supply of Skilled & Unskilled Labour", documented: true },
  { name: "Pond & Lake Management Specialists", documented: true },
  { name: "Tree Planting & Maintenance", documented: true },
  { name: "Industrial Equipment Rental", documented: false },
];

export const SERVICE_NAMES = SERVICES.map((service) => service.name);

/* For form dropdowns: a visitor who cannot place their job in one of our
 * categories must still be able to send the enquiry. */
export const SERVICE_OPTIONS = [...SERVICE_NAMES, "Other / Not sure yet"];

/* Contact form subject list - service enquiries plus the things people write in
 * about that are not a service at all. */
export const ENQUIRY_SUBJECTS = [
  "General enquiry",
  ...SERVICE_NAMES,
  "Careers / job application",
  "Supplier or partnership enquiry",
  "Something else",
];

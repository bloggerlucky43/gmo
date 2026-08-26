/* ------------------------------------------------------------------
 * Single source of truth for what the company offers.
 *
 * The first twelve entries are the "Our Services" list from the company
 * profile document in src/assets, in the document's own order. The last three
 * are on the site but absent from that document - `documented: false` marks
 * them for the content review rather than changing anything on screen.
 *
 * Everything that shows a service list reads from here: the services grid, the
 * quote form dropdown and the contact form dropdown. Add a service once and it
 * appears in all three.
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
  { name: "Industrial Cleaning Services", documented: false },
  { name: "Water Treatment & Sanitation", documented: false },
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

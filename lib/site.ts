export const SITE_URL = "https://arcticbase.tech";

export const SITE_EMAIL = "hello@arcticbase.tech";

/** Trading / brand name — align with GST certificate when publishing GSTIN */
export const LEGAL_BUSINESS_NAME = "Arctic Base";

export const BUSINESS_TAGLINE =
  "Creative & digital agency · Web, design & official WhatsApp business messaging";

/**
 * Add your GSTIN when you want it shown on the site (must match Business Manager).
 * Example: "24XXXXXXXXXX1Z5"
 */
export const GSTIN: string | null = null;

/** Registered / studio address lines — contact page + footer */
export const COMPANY_ADDRESS_LINES = [
  "GF&FF, 17, Gurugovind Bag Society",
  "Opp. Balkeshwar Mahadev Temple",
  "Khokhara Road, Khokhara",
  "Ahmedabad, Gujarat 380008",
  "India",
] as const;

export const COMPANY_ADDRESS_SINGLE_LINE = COMPANY_ADDRESS_LINES.join(", ");

const COMPANY_MAPS_QUERY =
  "GF&FF, 17, Gurugovind Bag Society, Khokhara Road, Khokhara, Ahmedabad, Gujarat 380008";

export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  COMPANY_MAPS_QUERY
)}`;

export const SITE_PHONES = [
  {
    href: "tel:+919104320305",
    display: "+91 91043 20305",
    region: "India",
  },
  {
    href: "tel:+819016743347",
    display: "+81 9016743347",
    region: "Japan",
  },
] as const;

export const WHATSAPP_PLATFORM_PATH = "/whatsapp-platform";

export const PUBLIC_ROUTES = [
  "/",
  "/About",
  "/Services",
  "/Projects",
  "/contact",
  WHATSAPP_PLATFORM_PATH,
  "/privacy-policy",
  "/terms-and-conditions",
] as const;

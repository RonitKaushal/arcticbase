import type { Metadata } from "next";
import WhatsAppPlatformContent from "@/components/whatsapp/WhatsAppPlatformContent";
import { SITE_URL, WHATSAPP_PLATFORM_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "WhatsApp Business Platform | ArcticBase",
  description:
    "Official WhatsApp business communication—templates, automation, campaigns, and support using Meta WhatsApp Cloud API.",
  openGraph: {
    title: "WhatsApp Business Platform | ArcticBase",
    description:
      "Customer engagement and business messaging through Meta official WhatsApp APIs.",
    url: `${SITE_URL}${WHATSAPP_PLATFORM_PATH}`,
  },
};

export default function WhatsAppPlatformPage() {
  return <WhatsAppPlatformContent />;
}

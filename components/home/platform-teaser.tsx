import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { WHATSAPP_PLATFORM_PATH } from "@/lib/site";

export default function PlatformTeaser() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center border-y border-foreground/10 bg-white/5 py-20 md:py-28">
      <div className="flex w-[95%] max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-4">
          <div className="flex items-center gap-2 text-primary">
            <MessageSquare className="h-5 w-5" aria-hidden />
            <span className="text-xs GeistBold uppercase tracking-[0.2em]">
              WhatsApp for business
            </span>
          </div>
          <h2 className="GeistBold text-3xl uppercase leading-tight md:text-4xl">
            Official business messaging via Meta APIs
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground Geist md:text-lg">
            Templates, automation, campaigns, and support—built for customer
            engagement, not spam. Part of our creative and digital agency
            services in Ahmedabad.
          </p>
        </div>
        <Link
          href={WHATSAPP_PLATFORM_PATH}
          className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-8 py-4 text-sm GeistBold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Explore platform
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

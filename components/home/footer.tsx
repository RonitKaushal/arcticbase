"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Copy, Check, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { useState, type ReactNode } from "react";
import {
  SITE_EMAIL,
  COMPANY_ADDRESS_LINES,
  GOOGLE_MAPS_URL,
  SITE_PHONES,
  LEGAL_BUSINESS_NAME,
  BUSINESS_TAGLINE,
  GSTIN,
  WHATSAPP_PLATFORM_PATH,
} from "@/lib/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Services", href: "/Services" },
  { label: "WhatsApp Platform", href: WHATSAPP_PLATFORM_PATH },
  { label: "Projects", href: "/Projects" },
  { label: "Contact", href: "/contact" },
] as const;

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
] as const;

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/arctic-base" },
  { name: "Instagram", href: "https://www.instagram.com/arcticbase.tech" },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Arctic-Base/pfbid0vzkY6L8XPNzn8FCTx8LTNVWwsEebh7Jd2ACNUJs8X4L3vsFePHwbYwfsRtgug9Vjl/",
  },
  { name: "Behance", href: "https://www.behance.net/arcticbase" },
  { name: "Dribbble", href: "https://dribbble.com/arcticbase-org" },
  { name: "X", href: "https://x.com/arcticbase_tech" },
] as const;

function FooterLinkHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-4 text-[10px] GeistBold uppercase tracking-[0.22em] text-primary">
      {children}
    </h3>
  );
}

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = SITE_EMAIL;

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Fallback: Copy failed", err);
      }
      document.body.removeChild(textarea);
    }
  };

  return (
    <footer className="relative mt-24 w-full border-t border-foreground/10 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex w-[95%] max-w-6xl flex-col">
        {/* CTA stripe */}
        <div className="flex flex-col items-center gap-8 border-b border-foreground/10 py-14 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-xl space-y-3">
            <p className="text-xs GeistBold uppercase tracking-[0.25em] text-primary">
              Start something
            </p>
            <p className="text-3xl GeistBold uppercase leading-tight text-foreground md:text-4xl">
              Ready when you are.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground Geist md:text-base">
              Websites, branding, UI/UX—from a student-led team that keeps
              communication clear.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${email}`}>
              <Button className="rounded-full bg-primary px-8 py-6 text-base GeistBold uppercase text-primary-foreground md:text-lg">
                {email}
              </Button>
            </a>
            <Button
              type="button"
              onClick={handleCopy}
              className="h-14 w-14 cursor-pointer rounded-full border border-primary bg-transparent p-0 hover:bg-primary/10"
              size="icon"
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <Copy className="h-5 w-5 text-foreground" />
              )}
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-foreground/15 px-6 py-3 text-xs GeistBold uppercase tracking-widest text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Contact page →
            </Link>
          </div>
        </div>

        {/* Main columns */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/Arctic_Base_logo.png"
                alt="Arctic Base"
                width={200}
                height={40}
                className="h-8 w-auto dark:opacity-95"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground Geist">
              {BUSINESS_TAGLINE}
            </p>
            <p className="mt-3 text-xs text-muted-foreground Geist">
              {LEGAL_BUSINESS_NAME}
              {GSTIN ? ` · GSTIN ${GSTIN}` : null}
            </p>
          </div>

          <div className="lg:col-span-2">
            <FooterLinkHeading>Pages</FooterLinkHeading>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm GeistMedium text-foreground/85 transition-colors hover:text-primary md:text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <FooterLinkHeading>Legal</FooterLinkHeading>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm GeistMedium text-foreground/85 transition-colors hover:text-primary md:text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-3">
            <FooterLinkHeading>Contact</FooterLinkHeading>
            <ul className="flex flex-col gap-3">
              <li className="min-w-0">
                <a
                  href={`mailto:${email}`}
                  className="group inline-flex max-w-full items-center gap-2.5 text-sm text-foreground/90 whitespace-nowrap transition-colors hover:text-primary md:text-base"
                >
                  <Mail
                    className="h-4 w-4 shrink-0 text-primary opacity-80"
                    aria-hidden
                  />
                  <span className="Geist underline decoration-transparent underline-offset-2 transition-colors group-hover:decoration-primary/50">
                    {email}
                  </span>
                </a>
              </li>
              {SITE_PHONES.map((p) => (
                <li key={p.href} className="min-w-0">
                  <a
                    href={p.href}
                    className="group inline-flex max-w-full items-center gap-2.5 text-sm text-foreground/90 whitespace-nowrap transition-colors hover:text-primary tabular-nums md:text-base"
                  >
                    <Phone
                      className="h-4 w-4 shrink-0 text-primary opacity-80"
                      aria-hidden
                    />
                    <span className="Geist whitespace-nowrap">
                      {p.display}
                      <span className="ml-1.5 whitespace-nowrap text-xs text-muted-foreground uppercase tracking-wide">
                        {p.region}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <FooterLinkHeading>Address</FooterLinkHeading>
            <address className="not-italic">
              <div className="flex gap-3 text-sm leading-relaxed text-foreground/85 Geist md:text-[15px]">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-90"
                  aria-hidden
                />
                <span>
                  {COMPANY_ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs GeistBold uppercase tracking-widest text-primary transition-opacity hover:opacity-80"
              >
                Google Maps
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </address>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-6 border-t border-foreground/10 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] GeistBold uppercase tracking-[0.2em] text-muted-foreground">
            Social
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm GeistBold uppercase tracking-wide text-foreground transition-colors hover:text-primary md:text-base"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-foreground/10 py-8 text-center md:flex md:items-center md:justify-between md:text-left">
          <p className="text-xs text-muted-foreground Geist">
            © {new Date().getFullYear()} Arctic Base · Ahmedabad, India · Remote
            worldwide
          </p>
          <p className="mt-3 text-xs text-muted-foreground md:mt-0">
            <a href="https://arcticbase.tech" className="hover:text-primary">
              arcticbase.tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

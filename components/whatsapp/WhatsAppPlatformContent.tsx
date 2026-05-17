"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
  MessageSquare,
  LayoutTemplate,
  Workflow,
  BarChart3,
  Shield,
  Users,
  Webhook,
  ImageIcon,
  Bot,
  Inbox,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RequestAccessModal } from "@/components/whatsapp/RequestAccessModal";
import { SITE_EMAIL } from "@/lib/site";

const stats = [
  { value: "24/7", label: "Automated notifications" },
  { value: "Meta", label: "Official Cloud API" },
  { value: "Opt-in", label: "Policy-first messaging" },
  { value: "WABA", label: "Per-business accounts" },
];

const features = [
  {
    icon: MessageSquare,
    title: "Two-way conversations",
    description:
      "Support chats and session messages within Meta's 24-hour customer care window—professional handoffs, not blast-only tools.",
    large: true,
  },
  {
    icon: LayoutTemplate,
    title: "Template library",
    description:
      "Marketing, utility, and authentication templates submitted for Meta approval before you send at scale.",
    large: false,
  },
  {
    icon: Workflow,
    title: "Automation rules",
    description:
      "Trigger flows from forms, CRM events, or webhooks so the right message fires when something happens in your stack.",
    large: false,
  },
  {
    icon: BarChart3,
    title: "Delivery analytics",
    description:
      "Sent, delivered, read, and failed states—see what works and fix what doesn't without guessing.",
    large: false,
  },
  {
    icon: Webhook,
    title: "Webhooks & API",
    description:
      "Inbound messages and status callbacks wired into your backend for real-time routing and logging.",
    large: false,
  },
  {
    icon: ImageIcon,
    title: "Rich media",
    description:
      "Images, documents, and structured payloads where templates and sessions allow—within policy limits.",
    large: false,
  },
  {
    icon: Inbox,
    title: "Team inbox (roadmap)",
    description:
      "Assign threads, internal notes, and quick replies so sales and support stay aligned on one number.",
    large: false,
  },
  {
    icon: Bot,
    title: "Chatbot handoffs",
    description:
      "Bot-first flows with clean escalation to humans when customers need a real person.",
    large: true,
  },
];

const steps = [
  {
    step: "01",
    title: "Request access",
    body: "Share your business, use case, and volume. We confirm fit and compliance before onboarding.",
  },
  {
    step: "02",
    title: "Connect your WABA",
    body: "Link your WhatsApp Business Account and phone number through Meta's official flows.",
  },
  {
    step: "03",
    title: "Templates & opt-in",
    body: "Set up approved templates and lawful recipient lists—no purchased numbers, no spam.",
  },
  {
    step: "04",
    title: "Launch & measure",
    body: "Send campaigns and support messages, then refine using delivery and engagement data.",
  },
];

const useCases = [
  "Order confirmations & shipping updates",
  "Appointment reminders & rescheduling",
  "Support tickets & FAQ deflection",
  "Promotional campaigns to opted-in users",
  "Payment & account alerts (where permitted)",
  "Lead follow-up from ads and landing pages",
];

const faqs = [
  {
    q: "Is this official WhatsApp?",
    a: "Yes. We build on Meta's WhatsApp Business Platform (Cloud API). Messages go through approved business channels—not unofficial bulk senders.",
  },
  {
    q: "Do I need my own WhatsApp Business Account?",
    a: "For production use, each business typically operates its own WABA and verified phone number. We help you connect and configure it correctly.",
  },
  {
    q: "Can I send unlimited marketing messages?",
    a: "No. You must follow opt-in rules, template policies, and Meta's quality ratings. We focus on legitimate customer engagement.",
  },
  {
    q: "How long until we can go live?",
    a: "Depends on WABA setup, template approval, and your integration scope. Many teams start with a focused pilot in a few weeks.",
  },
];

function AccessButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <RequestAccessModal
      trigger={
        <Button className={clsx("rounded-full GeistBold uppercase", className)}>
          {children}
        </Button>
      }
    />
  );
}

export default function WhatsAppPlatformContent() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden pb-28">
      <div className="fixed top-0 z-0 flex h-screen w-screen items-center justify-center overflow-hidden">
        <Image
          src="/wallpaper.png"
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative z-10 w-[95%] max-w-6xl">
        <section className="border-b border-foreground/10 pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="h-1 w-16 bg-primary" />
          <p className="mt-8 text-xs GeistMedium uppercase tracking-[0.25em] text-primary">
            WhatsApp Business Platform
          </p>
          <h1 className="mt-6 max-w-4xl GeistBold text-4xl uppercase leading-[1.05] md:text-6xl lg:text-7xl">
            Official{" "}
            <span className="relative inline-block">
              <span className="relative z-10">business messaging</span>
              <span className="absolute bottom-2 left-0 -z-0 h-3 w-full bg-primary/25" />
            </span>{" "}
            on Meta&apos;s APIs
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground Geist md:text-xl">
            Arctic Base builds a WhatsApp communication platform for companies—templates,
            automation, campaigns, and support. Policy-compliant customer engagement, not
            unofficial bulk tools.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <AccessButton className="bg-primary px-8 py-6 text-base text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90">
              Request access
              <ArrowRight className="ml-2 inline h-5 w-5" />
            </AccessButton>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center rounded-full border border-foreground/15 px-6 py-3 text-xs GeistBold uppercase tracking-widest transition-colors hover:border-primary/40 hover:text-primary"
            >
              Privacy policy
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 border-b border-foreground/10 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="GeistBold text-3xl text-primary md:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground GeistMedium">
                {s.label}
              </p>
            </div>
          ))}
        </section>

        <section className="py-16 md:py-24">
          <h2 className="mb-3 GeistBold text-3xl uppercase md:text-4xl">Capabilities</h2>
          <p className="mb-10 max-w-2xl text-muted-foreground Geist">
            Everything you need to run WhatsApp as a business channel—built for teams that care
            about deliverability and compliance.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={clsx(
                  "group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500",
                  f.large ? "md:col-span-2 lg:row-span-1" : "",
                  hoveredFeature === i
                    ? "border-primary/40 bg-primary/10 shadow-lg shadow-primary/5"
                    : "border-foreground/10 bg-background/40 backdrop-blur-sm"
                )}
              >
                <f.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 GeistBold text-lg uppercase">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground Geist">
                  {f.description}
                </p>
                <div
                  className={clsx(
                    "absolute bottom-4 right-4 flex items-center gap-1 text-xs GeistBold uppercase text-primary transition-opacity",
                    hoveredFeature === i ? "opacity-100" : "opacity-0"
                  )}
                >
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-foreground/10 py-16 md:py-20">
          <h2 className="mb-12 GeistBold text-3xl uppercase text-primary md:text-4xl">
            How it works
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-foreground/10 bg-background/40 p-6 backdrop-blur-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 GeistBold text-lg text-primary">
                  {s.step}
                </span>
                <h3 className="mt-5 GeistBold text-lg uppercase">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground Geist">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="GeistBold text-3xl uppercase md:text-4xl">Use cases</h2>
              <p className="mt-4 text-muted-foreground Geist">
                Legitimate business communication your customers want to receive.
              </p>
              <ul className="mt-8 space-y-3">
                {useCases.map((item) => (
                  <li key={item} className="flex items-start gap-3 Geist text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <Zap className="h-10 w-10 text-primary" />
              <h3 className="mt-6 GeistBold text-2xl uppercase">Built for compliance</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground Geist">
                We do not support scraping, purchased lists, or policy bypasses. Messaging must
                follow opt-in rules and{" "}
                <a
                  href="https://www.whatsapp.com/legal/business-terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  WhatsApp Business Terms
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-foreground/10 py-16">
          <h2 className="mb-8 GeistBold text-2xl uppercase md:text-3xl">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-foreground/10 bg-background/40 px-5 py-4 backdrop-blur-sm open:border-primary/25"
              >
                <summary className="cursor-pointer list-none GeistBold text-base uppercase tracking-tight [&::-webkit-details-marker]:hidden">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground Geist">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-foreground/10 bg-gradient-to-br from-primary/15 via-background/80 to-background p-10 text-center md:p-14">
          <h2 className="GeistBold text-3xl uppercase md:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground Geist">
            Request access and we&apos;ll follow up at{" "}
            <a href={`mailto:${SITE_EMAIL}`} className="text-primary">
              {SITE_EMAIL}
            </a>{" "}
            within 1–2 business days.
          </p>
          <div className="mt-8 flex justify-center">
            <AccessButton className="bg-primary px-10 py-6 text-lg text-primary-foreground">
              Request access
            </AccessButton>
          </div>
        </section>
      </div>
    </div>
  );
}

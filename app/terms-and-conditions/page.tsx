import type { Metadata } from "next";
import { LegalDocPage } from "@/components/legal/LegalDocPage";
import { LEGAL_BUSINESS_NAME, SITE_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | ArcticBase",
  description:
    "Terms for Arctic Base creative, digital, and WhatsApp business messaging services.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalDocPage
      title="Terms & Conditions"
      updatedLabel="May 16, 2026"
      siblingHref="/privacy-policy"
      siblingShortLabel="Privacy policy"
      intro="These terms govern use of our website and services—including web, design, branding, and official WhatsApp business communication solutions."
      sections={[
        {
          id: "introduction",
          title: "Introduction",
          body: (
            <>
              Welcome to {LEGAL_BUSINESS_NAME} (&quot;Arctic Base&quot;,
              &quot;we&quot;, &quot;us&quot;). By using arcticbase.tech or
              engaging our services, you agree to these Terms &amp;
              Conditions.
            </>
          ),
        },
        {
          id: "services",
          title: "Services",
          body: (
            <>
              We provide creative and technical services including web design,
              development, branding, and digital solutions. We also offer
              WhatsApp business communication tools and related automation
              built on Meta&apos;s official WhatsApp Business Platform. Scope,
              fees, and deliverables are defined in separate proposals or
              agreements.
            </>
          ),
        },
        {
          id: "whatsapp-messaging",
          title: "WhatsApp messaging services",
          body: (
            <>
              Where you use our WhatsApp-related services, you agree to comply
              with Meta&apos;s WhatsApp Business policies, applicable laws, and
              our acceptable use rules. You are responsible for your WhatsApp
              Business Account (WABA), phone numbers, template approvals, and
              obtaining lawful opt-in from recipients before sending messages.
              We act as a technology provider; you remain responsible for the
              content and legality of messages sent through your account.
            </>
          ),
        },
        {
          id: "acceptable-use",
          title: "Acceptable use",
          body: (
            <>
              You must not use our services for spam, harassment, illegal
              content, purchased contact lists without consent, scraping, or
              any activity designed to bypass Meta or WhatsApp rules. We may
              suspend or terminate access if we reasonably believe your use
              violates these terms or puts our platform or other users at risk.
            </>
          ),
        },
        {
          id: "client-responsibilities",
          title: "Client responsibilities",
          body: (
            <>
              Provide accurate business and contact information, timely
              feedback, and required assets. For messaging services, maintain
              accurate recipient lists, honour opt-out requests, and use only
              approved message templates where required by Meta.
            </>
          ),
        },
        {
          id: "intellectual-property",
          title: "Intellectual property",
          body: (
            <>
              Unless agreed otherwise, we retain rights to pre-existing tools
              and frameworks. Upon full payment, usage rights for deliverables
              are as set out in your project agreement.
            </>
          ),
        },
        {
          id: "payments-revisions",
          title: "Payments & revisions",
          body: (
            <>
              Fees, deposits, and milestones are set per engagement. WhatsApp
              and Meta may charge separate messaging or platform fees billed
              through your Meta business account. Outstanding balances may
              suspend work or access.
            </>
          ),
        },
        {
          id: "third-party",
          title: "Third-party platforms",
          body: (
            <>
              WhatsApp and Meta services are provided by third parties. We are
              not responsible for outages, policy changes, or account actions
              taken by Meta. Your use of Meta products is also subject to
              their terms.
            </>
          ),
        },
        {
          id: "limitation-liability",
          title: "Limitation of liability",
          body: (
            <>
              To the maximum extent permitted by law, Arctic Base is not liable
              for indirect or consequential damages. Our total liability for any
              claim relating to a specific engagement is limited to fees paid
              for that engagement in the twelve (12) months before the claim.
            </>
          ),
        },
        {
          id: "changes-contact",
          title: "Changes & contact",
          body: (
            <>
              We may update these terms periodically. Questions:{" "}
              <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
            </>
          ),
        },
      ]}
    />
  );
}

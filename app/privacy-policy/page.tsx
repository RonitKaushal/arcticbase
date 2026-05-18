import type { Metadata } from "next";
import { LegalDocPage } from "@/components/legal/LegalDocPage";
import {
  LEGAL_BUSINESS_NAME,
  SITE_EMAIL,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | ArcticBase",
  description:
    "How Arctic Base collects, uses, and protects personal information—including website, contact, and WhatsApp Business Platform services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocPage
      title="Privacy Policy"
      updatedLabel="May 16, 2026"
      siblingHref="/terms-and-conditions"
      siblingShortLabel="Terms & conditions"
      intro="This policy explains how Arctic Base (a creative and digital agency based in Ahmedabad, India) handles information when you use our website, contact us, or use our WhatsApp business messaging solutions."
      sections={[
        {
          id: "who-we-are",
          title: "Who we are",
          body: (
            <>
              {LEGAL_BUSINESS_NAME} (&quot;Arctic Base&quot;, &quot;we&quot;,
              &quot;us&quot;) provides web development, design, branding, and
              official WhatsApp business communication solutions using
              Meta&apos;s WhatsApp Business Platform. Our website is{" "}
              <a href={SITE_URL}>{SITE_URL.replace("https://", "")}</a>.
              Privacy enquiries:{" "}
              <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
            </>
          ),
        },
        {
          id: "information-we-collect",
          title: "Information we collect",
          body: (
            <>
              <strong>Website and contact.</strong> When you enquire or use our
              contact form, we may collect your name, email, phone number,
              organisation, messages, and project details. We may also log basic
              technical data (browser type, approximate location, IP address)
              through hosting and analytics.
              <br />
              <br />
              <strong>WhatsApp messaging services.</strong> If you or your
              business use our WhatsApp-related products, we may process phone
              numbers, WhatsApp user identifiers, message content (text and
              media where applicable), delivery and read status, template
              names, campaign metadata, and logs needed to operate the service.
              Clients are responsible for obtaining valid opt-in from their
              end users before messaging.
            </>
          ),
        },
        {
          id: "whatsapp-api",
          title: "WhatsApp Business Platform",
          body: (
            <>
              Our WhatsApp solutions use Meta&apos;s WhatsApp Cloud API (and
              related Meta business products). Message data is transmitted to
              and processed by Meta as described in{" "}
              <a
                href="https://www.whatsapp.com/legal/business-terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Business Terms
              </a>{" "}
              and Meta&apos;s privacy materials. We use this data only to
              provide messaging, automation, templates, analytics, and support
              for authorised business communication—not for unrelated marketing
              without consent.
            </>
          ),
        },
        {
          id: "how-we-use",
          title: "How we use information",
          body: (
            <>
              We use information to respond to enquiries, deliver creative and
              technical services, operate WhatsApp messaging features for
              clients, troubleshoot issues, meet legal obligations, and improve
              our products. We do not sell personal information. Where required,
              we will ask for consent before broader marketing communications.
            </>
          ),
        },
        {
          id: "sharing-retention",
          title: "Sharing, subprocessors & retention",
          body: (
            <>
              We may share data with trusted providers who process it on our
              instructions, including Meta (WhatsApp), cloud hosting, email, and
              analytics. We retain contact and project records, and messaging
              logs, only as long as needed for the service, legal compliance, or
              dispute resolution, then delete or anonymise where practicable.
            </>
          ),
        },
        {
          id: "cookies-analytics",
          title: "Cookies & analytics",
          body: (
            <>
              Our site may use cookies or similar technologies for preferences
              and usage analytics. You can control cookies through your browser
              settings.
            </>
          ),
        },
        {
          id: "your-choices",
          title: "Your rights",
          body: (
            <>
              You may request access, correction, or deletion of personal
              information we hold, subject to applicable law and legitimate
              business needs. End users who receive messages from our clients
              should contact those businesses first; you may also contact us at{" "}
              <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a> for questions
              about how we process data as a service provider.
            </>
          ),
        },
        {
          id: "security",
          title: "Security",
          body: (
            <>
              We apply reasonable technical and organisational measures to
              protect information. No method of transmission over the internet
              is completely secure.
            </>
          ),
        },
        {
          id: "changes",
          title: "Changes",
          body: (
            <>
              We may update this policy when our practices or regulations
              change. The &quot;Last updated&quot; date at the top will reflect
              the latest version.
            </>
          ),
        },
      ]}
    />
  );
}

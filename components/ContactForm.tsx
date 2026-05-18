"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { toast } from "sonner";
import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  Clock,
  Globe,
  ExternalLink,
  User,
  Mail,
  Phone,
  MessageSquareText,
  Loader2,
  Send,
  CheckCircle2,
} from "lucide-react";
import {
  COMPANY_ADDRESS_LINES,
  GOOGLE_MAPS_URL,
  LEGAL_BUSINESS_NAME,
} from "@/lib/site";

const services = [
  "Logo Design",
  "Social Media Posts",
  "Website Design",
  "Branding",
];

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      if (!name || !email || !phone) {
        toast.error("Please fill in all fields");
        return;
      }
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!service || !message) {
      toast.error("Please select a service and provide a message");
      return;
    }

    if (!acceptedTerms) {
      toast.error("Please accept the Terms & Conditions");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          message,
          acceptedTerms: true,
        }),
      });

      const contentType = res.headers.get("content-type");

      if (!res.ok) {
        const errorData =
          contentType && contentType.includes("application/json")
            ? await res.json()
            : { message: "Unexpected server error" };

        toast.error(`Failed: ${errorData.message}`);
        return;
      }

      const data = await res.json();
      toast.success(data.message || "Message sent successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
      setAcceptedTerms(false);
      setStep(1);
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center overflow-x-hidden pb-24 md:pb-32">
      <div className="fixed top-0 z-0 flex h-screen w-screen items-center justify-center overflow-hidden">
        <Image
          src="/wallpaper.png"
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full object-cover opacity-[0.08] dark:opacity-[0.12]"
          priority={false}
        />
      </div>

      <div className="relative z-10 flex w-[95%] max-w-6xl flex-col items-center pb-10">
        <div className="w-full pt-32 md:pt-40 mb-14 border-b border-foreground/10 pb-14 md:pb-16">
          <div className="relative w-full space-y-6">
            <div className="h-1 w-16 animate-fade-in-up bg-primary" />
            <div className="overflow-hidden mb-6 mt-8">
              <span className="inline-block animate-fade-in-up text-xs GeistMedium uppercase tracking-[0.2em] text-primary [animation-delay:80ms]">
                Say hello
              </span>
            </div>

            <div className="overflow-hidden mb-8">
              <h1 className="animate-fade-in-up GeistBold text-5xl uppercase leading-[1.08] md:text-6xl lg:text-7xl [animation-delay:120ms]">
                Have a{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">project</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-0" />
                </span>
                ?
                <br />
                Tell us{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">everything</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-0" />
                </span>
                .
              </h1>
            </div>

            <div className="overflow-hidden mb-10 max-w-4xl">
              <p className="animate-fade-in-up Geist text-lg text-muted-foreground leading-relaxed md:text-xl lg:text-2xl [animation-delay:200ms]">
                Arctic Base is a student-led team working with clients remotely
                everywhere—our correspondence and studio are rooted in Ahmedabad,
                Gujarat. Use the form for briefs so scope stays clear—we reply
                inside{" "}
                <span className="text-foreground GeistMedium">1–2 business days</span>
                .
              </p>
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-in-up [animation-delay:260ms]">
              <Link
                href="/Services"
                className="inline-flex rounded-full border border-foreground/15 bg-background/60 px-5 py-2.5 text-xs GeistMedium uppercase tracking-widest backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                View services →
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex rounded-full border border-foreground/15 bg-background/60 px-5 py-2.5 text-xs GeistMedium uppercase tracking-widest text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
              >
                Privacy policy →
              </Link>
              <Link
                href="/terms-and-conditions"
                className="inline-flex rounded-full border border-foreground/15 bg-background/60 px-5 py-2.5 text-xs GeistMedium uppercase tracking-widest text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
              >
                Terms →
              </Link>
            </div>

            <div className="h-px w-28 bg-gradient-to-r from-primary to-transparent animate-fade-in-up [animation-delay:300ms]" />
          </div>
        </div>

        <div className="flex w-full flex-col md:flex-row relative items-start justify-between Geist max-w-6xl border-b pb-16 border-foreground/10 gap-14 md:gap-12 xl:gap-16">
          <div className="flex w-full flex-col justify-start items-start md:w-[40%] space-y-6">
            {/* Company details — Legal page card style */}
            <section className="w-full rounded-2xl border border-foreground/10 bg-background/45 p-6 shadow-sm shadow-black/5 backdrop-blur-md transition-colors hover:border-foreground/20 dark:bg-background/30 dark:shadow-black/40 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:gap-8">
                <div className="flex shrink-0 items-start gap-4 md:flex-col md:gap-3">
                  <span
                    aria-hidden
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 GeistBold text-lg text-primary tabular-nums md:h-14 md:w-14 md:text-xl"
                  >
                    1
                  </span>
                  <div className="hidden h-px w-full bg-gradient-to-r from-primary/40 to-transparent md:block" />
                </div>
                <div className="min-w-0 flex-1 space-y-4 pt-1">
                  <h2 className="GeistBold text-xl uppercase tracking-tight text-foreground md:text-2xl">
                    Reach us directly
                  </h2>
                  <div className="Geist flex flex-col gap-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                    <a
                      href="mailto:hello@arcticbase.tech"
                      className="font-medium text-primary transition-opacity hover:opacity-90"
                    >
                      hello@arcticbase.tech
                    </a>
                    <div className="flex flex-col gap-2 pt-1">
                      <a
                        href="tel:+919104320305"
                        className="transition-colors hover:text-primary"
                      >
                        +91 91043 20305
                        <span className="ml-2 text-xs text-muted-foreground uppercase tracking-wide">
                          India
                        </span>
                      </a>
                      <a
                        href="tel:+819016743347"
                        className="transition-colors hover:text-primary"
                      >
                        +81 9016743347
                        <span className="ml-2 text-xs text-muted-foreground uppercase tracking-wide">
                          Japan
                        </span>
                      </a>
                    </div>
                    <p className="border-t border-foreground/10 pt-4 text-muted-foreground text-sm leading-relaxed">
                      Share timelines, approximate budget bands, links to refs or
                      inspiration—anything that speeds up an accurate reply.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full rounded-2xl border border-foreground/10 bg-background/45 p-6 shadow-sm shadow-black/5 backdrop-blur-md transition-colors hover:border-foreground/20 dark:bg-background/30 dark:shadow-black/40 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:gap-8">
                <div className="flex shrink-0 items-start gap-4 md:flex-col md:gap-3">
                  <span
                    aria-hidden
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 GeistBold text-lg text-primary tabular-nums md:h-14 md:w-14 md:text-xl"
                  >
                    2
                  </span>
                  <div className="hidden h-px w-full bg-gradient-to-r from-primary/40 to-transparent md:block" />
                </div>
                <div className="min-w-0 flex-1 space-y-4 pt-1">
                  <h2 className="GeistBold text-xl uppercase tracking-tight text-foreground md:text-2xl">
                    {LEGAL_BUSINESS_NAME} · Ahmedabad
                  </h2>
                  <address className="not-italic Geist text-sm leading-relaxed text-foreground/90 md:text-base">
                    {COMPANY_ADDRESS_LINES.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs GeistBold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90 md:text-sm"
                    >
                      <MapPin className="h-4 w-4" aria-hidden />
                      Google Maps
                      <ExternalLink className="h-4 w-4 opacity-90" aria-hidden />
                    </a>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground Geist md:text-sm">
                    Landmark: Gurugovind Bag Society, opposite Balkeshwar Mahadev on
                    Khokhara Road—email ahead if you are visiting so we can confirm
                    availability.
                  </p>
                </div>
              </div>
            </section>

            <section className="w-full rounded-2xl border border-foreground/10 bg-background/45 p-6 shadow-sm shadow-black/5 backdrop-blur-md transition-colors hover:border-foreground/20 dark:bg-background/30 dark:shadow-black/40 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:gap-8">
                <div className="flex shrink-0 items-start gap-4 md:flex-col md:gap-3">
                  <span
                    aria-hidden
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 GeistBold text-lg text-primary tabular-nums md:h-14 md:w-14 md:text-xl"
                  >
                    3
                  </span>
                  <div className="hidden h-px w-full bg-gradient-to-r from-primary/40 to-transparent md:block" />
                </div>
                <div className="min-w-0 flex-1 space-y-4 pt-1">
                  <h2 className="GeistBold text-xl uppercase tracking-tight text-foreground md:text-2xl">
                    How we work
                  </h2>
                  <ul className="space-y-3 Geist text-sm text-muted-foreground md:text-base">
                    <li className="flex gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <span>
                        Written briefs preferred—helps both sides quote and plan
                        without playing telephone.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Globe className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <span>
                        Remote-first collaboration worldwide; Ahmedabad meetups when
                        it makes sense.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="flex w-full flex-col md:w-[50%]">
            <div className="w-full rounded-2xl border border-foreground/10 bg-background/45 p-6 shadow-lg shadow-black/5 backdrop-blur-md transition-colors hover:border-primary/15 dark:bg-background/30 dark:shadow-black/40 md:p-8 lg:p-9">
              <div className="mb-2 flex flex-col gap-4 border-b border-foreground/10 pb-8 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[10px] GeistBold uppercase tracking-[0.2em] text-primary">
                    Project brief
                  </p>
                  <h3 className="mt-3 GeistBold text-2xl uppercase tracking-tight text-foreground md:text-3xl">
                    {step === 1 ? "Your details" : "Tell us more"}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground Geist leading-relaxed">
                    {step === 1
                      ? "We use this only to reply about your enquiry."
                      : "Pick what you need and drop a note; we circle back shortly."}
                  </p>
                </div>
                <span
                  className="inline-flex w-fit shrink-0 items-center rounded-full border border-foreground/10 bg-background/60 px-3 py-1.5 GeistBold text-xs tabular-nums text-muted-foreground backdrop-blur-sm"
                  aria-live="polite"
                >
                  Step {step} / 2
                </span>
              </div>

              <div className="mb-10 mt-8 flex w-full items-center gap-2 sm:gap-4">
                <div className="flex flex-1 flex-col items-center gap-3 text-center">
                  <div
                    className={clsx(
                      "flex h-12 w-12 items-center justify-center rounded-full border-2 GeistBold text-sm transition-all duration-500 md:h-14 md:w-14 md:text-base",
                      step >= 1
                        ? "border-primary bg-primary/15 text-primary shadow-[0_0_24px_-4px_var(--primary)] dark:bg-primary/20"
                        : "border-foreground/20 text-muted-foreground"
                    )}
                    aria-current={step === 1 ? "step" : undefined}
                  >
                    {step === 2 ? (
                      <CheckCircle2 className="h-6 w-6 md:h-7 md:w-7" aria-hidden />
                    ) : (
                      "1"
                    )}
                  </div>
                  <span
                    className={clsx(
                      "text-[11px] GeistBold uppercase tracking-[0.12em] md:text-xs",
                      step >= 1 ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    Details
                  </span>
                </div>

                <div className="relative mb-7 h-[3px] min-w-[2rem] flex-1 px-2 sm:min-w-[3rem]">
                  <div
                    className="absolute inset-x-2 top-0 h-full rounded-full bg-foreground/10"
                    aria-hidden
                  />
                  <div
                    className={clsx(
                      "absolute left-2 top-0 h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-[width] duration-500 ease-out",
                      step === 2 ? "w-[calc(100%-16px)]" : "w-0"
                    )}
                    aria-hidden
                  />
                </div>

                <div className="flex flex-1 flex-col items-center gap-3 text-center">
                  <div
                    className={clsx(
                      "flex h-12 w-12 items-center justify-center rounded-full border-2 GeistBold text-sm transition-all duration-500 md:h-14 md:w-14 md:text-base",
                      step >= 2
                        ? "border-primary bg-primary/15 text-primary shadow-[0_0_24px_-4px_var(--primary)] dark:bg-primary/20"
                        : "border-foreground/20 text-muted-foreground"
                    )}
                    aria-current={step === 2 ? "step" : undefined}
                  >
                    2
                  </div>
                  <span
                    className={clsx(
                      "text-[11px] GeistBold uppercase tracking-[0.12em] md:text-xs max-w-[7rem]",
                      step >= 2 ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    Service & note
                  </span>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col items-stretch gap-8"
              >
                {step === 1 && (
                  <div className="flex w-full flex-col gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="block text-[10px] GeistBold uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        Full name
                      </label>
                      <div className="relative">
                        <User
                          className="pointer-events-none absolute left-4 top-1/2 h-[1.125rem] w-[1.125rem] -translate-y-1/2 text-muted-foreground"
                          aria-hidden
                        />
                        <input
                          id="contact-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="How should we address you?"
                          required
                          className="w-full rounded-xl border border-foreground/10 bg-background/40 py-3.5 pl-12 pr-4 text-base text-foreground Geist outline-none backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-primary/15 md:text-lg"
                          autoComplete="name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-email"
                        className="block text-[10px] GeistBold uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <Mail
                          className="pointer-events-none absolute left-4 top-1/2 h-[1.125rem] w-[1.125rem] -translate-y-1/2 text-muted-foreground"
                          aria-hidden
                        />
                        <input
                          id="contact-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="hello@yourdomain.com"
                          required
                          className="w-full rounded-xl border border-foreground/10 bg-background/40 py-3.5 pl-12 pr-4 text-base text-foreground Geist outline-none backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-primary/15 md:text-lg"
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-phone"
                        className="block text-[10px] GeistBold uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        Phone
                      </label>
                      <div className="relative">
                        <Phone
                          className="pointer-events-none absolute left-4 top-1/2 h-[1.125rem] w-[1.125rem] -translate-y-1/2 text-muted-foreground"
                          aria-hidden
                        />
                        <input
                          id="contact-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 …"
                          required
                          className="w-full rounded-xl border border-foreground/10 bg-background/40 py-3.5 pl-12 pr-4 text-base text-foreground Geist outline-none backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-primary/15 md:text-lg"
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="group mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-primary py-4 text-lg GeistBold uppercase tracking-wide text-primary-foreground shadow-md shadow-primary/20 transition-[transform,box-shadow] hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] md:text-xl"
                    >
                      Continue
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="flex w-full flex-col gap-8">
                    <div className="w-full space-y-4">
                      <label className="flex items-center gap-2 text-[10px] GeistBold uppercase tracking-[0.18em] text-muted-foreground">
                        <span>Service focus</span>
                        <span className="rounded-full bg-foreground/5 px-2 py-0.5 text-[9px] font-semibold tracking-normal normal-case text-muted-foreground">
                          Tap one
                        </span>
                      </label>
                      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        {services.map((serviceOption) => {
                          const chosen = service === serviceOption;
                          return (
                            <button
                              key={serviceOption}
                              type="button"
                              onClick={() => setService(serviceOption)}
                              className={clsx(
                                "group relative overflow-hidden rounded-xl border px-4 py-4 text-left GeistMedium text-sm transition-all duration-300 md:text-lg md:py-5",
                                chosen
                                  ? "border-primary bg-primary/15 text-foreground ring-2 ring-primary/25 ring-offset-2 ring-offset-background dark:bg-primary/20"
                                  : "border-foreground/10 bg-background/30 text-foreground hover:border-primary/25 hover:bg-primary/5 ring-0 ring-offset-0 dark:bg-transparent"
                              )}
                            >
                              <span
                                className={clsx(
                                  "pointer-events-none absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border-2 transition-colors",
                                  chosen
                                    ? "border-primary bg-primary"
                                    : "border-muted-foreground/40 bg-transparent opacity-60 group-hover:border-primary/50"
                                )}
                                aria-hidden
                              />
                              {serviceOption}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-message"
                        className="flex items-center gap-2 text-[10px] GeistBold uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        <MessageSquareText
                          className="h-3.5 w-3.5 text-primary opacity-70"
                          aria-hidden
                        />
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Goals, timelines, references, budget ballpark…"
                        rows={5}
                        required
                        className="min-h-[140px] w-full resize-y rounded-xl border border-foreground/10 bg-background/40 px-4 py-4 text-base text-foreground Geist outline-none backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-primary/15 md:text-lg"
                      />
                    </div>

                    <label
                      htmlFor="contact-terms"
                      className="flex cursor-pointer items-start gap-3 rounded-xl border border-foreground/10 bg-background/30 p-4 transition-colors hover:border-foreground/20 dark:bg-background/15"
                    >
                      <input
                        id="contact-terms"
                        type="checkbox"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-primary accent-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                      />
                      <span className="text-sm leading-relaxed Geist text-foreground/90 md:text-[15px]">
                        I agree to the{" "}
                        <Link
                          href="/terms-and-conditions"
                          className="font-medium text-primary underline decoration-primary/35 underline-offset-2 transition-colors hover:decoration-primary"
                        >
                          Terms &amp; Conditions
                        </Link>
                        .
                      </span>
                    </label>

                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex w-full flex-1 items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent py-3.5 text-lg GeistBold uppercase tracking-wide text-foreground backdrop-blur-sm transition-colors hover:border-foreground/40 hover:bg-foreground/[0.06] md:text-xl"
                      >
                        <ArrowLeft className="h-5 w-5" />
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className={clsx(
                          "flex w-full flex-[1.2] items-center justify-center gap-3 rounded-full bg-primary py-3.5 text-lg GeistBold uppercase tracking-wide text-primary-foreground shadow-md shadow-primary/20 transition-[transform,box-shadow,opacity] md:text-xl",
                          loading
                            ? "cursor-not-allowed opacity-75"
                            : "hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
                        )}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="h-5 w-5 shrink-0 animate-spin" aria-hidden />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send message
                            <Send className="h-5 w-5 shrink-0" aria-hidden />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

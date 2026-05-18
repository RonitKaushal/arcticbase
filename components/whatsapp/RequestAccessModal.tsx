"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const useCaseOptions = [
  "Customer support",
  "Marketing campaigns",
  "Order & delivery updates",
  "Appointment reminders",
  "CRM / sales automation",
  "Other",
] as const;

type RequestAccessModalProps = {
  trigger: ReactNode;
};

export function RequestAccessModal({ trigger }: RequestAccessModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [useCase, setUseCase] = useState<string>(useCaseOptions[0]);
  const [volume, setVolume] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const fieldClass =
    "rounded-xl border-foreground/15 bg-background/50 Geist focus-visible:ring-primary/20";

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setUseCase(useCaseOptions[0]);
    setVolume("");
    setMessage("");
    setAcceptedTerms(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone || !company) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!acceptedTerms) {
      toast.error("Please accept the Terms & Conditions");
      return;
    }

    setLoading(true);

    const fullMessage = [
      `Company: ${company}`,
      `Primary use case: ${useCase}`,
      volume ? `Expected monthly messages: ${volume}` : null,
      "",
      message || "No additional notes.",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          useCase,
          service: "WhatsApp Platform — Access Request",
          message: fullMessage,
          acceptedTerms: true,
        }),
      });

      const contentType = res.headers.get("content-type");
      if (!res.ok) {
        const errorData =
          contentType?.includes("application/json")
            ? await res.json()
            : { message: "Unexpected server error" };
        toast.error(errorData.message || "Failed to send request");
        return;
      }

      const data = await res.json();
      toast.success(data.message || "Request sent! We'll be in touch soon.");
      resetForm();
      setOpen(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-foreground/15 bg-background/95 backdrop-blur-xl sm:max-w-lg md:max-w-xl">
        <DialogHeader className="text-left">
          <DialogTitle className="GeistBold text-2xl uppercase tracking-tight">
            Request platform access
          </DialogTitle>
          <DialogDescription className="Geist text-base leading-relaxed">
            Tell us about your business. We&apos;ll review your use case and
            reply within 1–2 business days with next steps for official WhatsApp
            messaging via Meta APIs.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="wa-name" className="text-xs uppercase tracking-wider">
                Full name *
              </Label>
              <Input
                id="wa-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={fieldClass}
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="wa-email" className="text-xs uppercase tracking-wider">
                Work email *
              </Label>
              <Input
                id="wa-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={fieldClass}
                placeholder="you@company.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wa-phone" className="text-xs uppercase tracking-wider">
                Phone *
              </Label>
              <Input
                id="wa-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className={fieldClass}
                placeholder="+91 …"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wa-company" className="text-xs uppercase tracking-wider">
                Company *
              </Label>
              <Input
                id="wa-company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                className={fieldClass}
                placeholder="Business name"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="wa-usecase" className="text-xs uppercase tracking-wider">
                Primary use case *
              </Label>
              <select
                id="wa-usecase"
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                className={`${fieldClass} h-10 w-full px-3 text-sm`}
              >
                {useCaseOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="wa-volume" className="text-xs uppercase tracking-wider">
                Expected monthly messages (optional)
              </Label>
              <Input
                id="wa-volume"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className={fieldClass}
                placeholder="e.g. 5,000–20,000"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="wa-message" className="text-xs uppercase tracking-wider">
                Additional notes
              </Label>
              <Textarea
                id="wa-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className={fieldClass}
                placeholder="WABA status, integrations needed, timeline…"
              />
            </div>
            <label className="flex cursor-pointer items-start gap-3 sm:col-span-2">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border accent-primary"
              />
              <span className="text-sm leading-relaxed text-muted-foreground Geist">
                I agree to the{" "}
                <Link
                  href="/terms-and-conditions"
                  className="text-primary underline underline-offset-2"
                >
                  Terms &amp; Conditions
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-primary underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-primary py-6 text-base GeistBold uppercase text-primary-foreground"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending…
              </>
            ) : (
              "Submit request"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}


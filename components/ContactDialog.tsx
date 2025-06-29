"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";

interface ContactDialogProps {
  children: ReactNode; // The trigger element
}

export default function ContactDialog({ children }: ContactDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("Message sent!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send. Try again later.");
      }
    } catch {
      setStatus("Failed to send. Try again later.");
    }
    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl w-full text-left text-primary uppercase">
            Let`&apos;`s talk
          </DialogTitle>
          <DialogDescription className="Geist text-sm w-full text-left text-foreground/50">
            Contact us to discuss business opportunities, or just to say hello. you can also mail: <span className="text-primary/50">hello@arcticbase.tech</span>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            className="border-0 border-b outline-none focus:outline-none focus:ring-0 focus-visible:outline-none shadow-none px-0 py-3 rounded-none bg-transparent text-sm md:text-xl"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            className="border-0 border-b outline-none focus:outline-none focus:ring-0 focus-visible:outline-none shadow-none px-0 py-3 rounded-none bg-transparent text-sm md:text-xl"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <textarea
            className="border-0 border-b outline-none focus:outline-none focus:ring-0 focus-visible:outline-none shadow-none px-0 py-3 rounded-none bg-transparent text-sm md:text-xl"
            placeholder="Type your message here."
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
          <Button
            className="bg-primary w-auto max-w-[150px] cursor-pointer text-background px-6 py-2 text-lg rounded-full GeistBold uppercase"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </Button>
          {status && <div className="text-sm mt-2">{status}</div>}
        </form>
      </DialogContent>
    </Dialog>
  );
}

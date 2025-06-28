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
import { ReactNode } from "react";

interface ContactDialogProps {
  children: ReactNode; // The trigger element
}

export default function ContactDialog({ children }: ContactDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl w-full text-left text-primary uppercase">
            Let`&apos;`s talk
          </DialogTitle>
          <DialogDescription className="Geist text-sm w-full text-left text-foreground/50">
            Contact us to discuss business opportunities, or just to say hello. you can also mail: <span className="text-primary/50">Hello@ArcticBase.tech</span>
          </DialogDescription>
        </DialogHeader>
        <input
          className="border-0 border-b outline-none focus:outline-none focus:ring-0 focus-visible:outline-none shadow-none px-0 py-3 rounded-none bg-transparent text-sm md:text-xl"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="border-0 border-b outline-none focus:outline-none focus:ring-0 focus-visible:outline-none shadow-none px-0 py-3 rounded-none bg-transparent text-sm md:text-xl"
          type="email"
          placeholder="Email"
        />
        <textarea
          className="border-0 border-b outline-none focus:outline-none focus:ring-0 focus-visible:outline-none shadow-none px-0 py-3 rounded-none bg-transparent text-sm md:text-xl"
          placeholder="Type your message here."
        />
        <Button className="bg-primary w-auto max-w-[150px] cursor-pointer text-background px-6 py-2 text-lg rounded-full GeistBold uppercase">
          Send
        </Button>
      </DialogContent>
    </Dialog>
  );
}

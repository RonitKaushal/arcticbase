"use client";

import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "hello@arcticbase.tech";

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      // Fallback method
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
  ];

  return (
    <div className="relative flex flex-col w-full items-center justify-center bg-white/5">
      <div className="relative flex flex-col items-center justify-center GeistMedium max-w-6xl w-[95%] mt-40">
        <p className="text-4xl md:text-5xl w-[95%] max-w-3xl GeistBold text-center uppercase">
          Have a project in mind? Let&rsquo;s get to work.
        </p>{" "}
        <p className="text-sm md:text-lg Geist w-[95%] max-w-xl mt-3 text-foreground/50 text-center">
          Feel free to reach out if you want to collaborate with us, or simply
          have a chat.
        </p>
        <div className="flex justify-center items-center w-full space-x-3 mt-10">
          <a href={`mailto:${email}`}>
            <Button className="bg-primary text-background p-7 text-xl rounded-full">
              {email}
            </Button>
          </a>
          <Button
            onClick={handleCopy}
            className="bg-background hover:bg-background cursor-pointer border border-primary text-foreground p-7 text-xl rounded-full"
            size="icon"
          >
            {copied ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-30 border-y w-full border-foreground">
        <div className="w-full max-w-6xl h-auto">
          <div className="flex flex-col md:flex-row justify-between items-start w-[95%] h-auto text-3xl border-foreground uppercase transition-all duration-500 py-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-start items-start p-0 GeistBold w-auto bg-transparents hover:text-primary cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>{" "}
      <p>© ARCTIC BASE 2025</p>
    </div>
  );
}

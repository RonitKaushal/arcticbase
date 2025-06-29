"use client";

import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { initLenis, destroyLenis } from "@/hooks/useLenis";

export default function NavBar() {
  useEffect(() => {
    initLenis();
    return () => {
      destroyLenis();
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Services", href: "/Services" },
    { label: "Contact", href: "/Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-background text-foreground border-b shadow-md transition-all duration-300">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/Arctic_Base_logo.png"
                alt="Logo"
                width={250}
                height={50}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg uppercase font-medium hover:text-primary transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}

            <Link href="/Contact">
              <Button className="bg-primary text-background px-6 py-2 text-lg rounded-full GeistBold uppercase">
                Let’s Talk
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden relative w-full transition-all duration-300 overflow-hidden z-50 ${
          isOpen ? "h-[100vh] opacity-100" : "h-[0vh] opacity-0"
        }`}
      >
        <div className="relative flex flex-col justify-start items-start bg-background border-t p-4 h-[84vh] w-[100vw] space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl uppercase GeistMedium hover:text-primary transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="absolute flex flex-col justify-center items-center bottom-[0px] p-0 m-0 w-[95%] h-auto">
            <Link href="/Contact">
              <Button className="w-[90%] bg-primary text-background py-7 text-2xl rounded-full GeistBold uppercase">
                Let’s Talk
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Portfolio Sites",
    description:
      "We build stunning portfolio sites that make you look cooler and more hireable than you actually are.",
  },
  {
    title: "Business Websites",
    description:
      "Your business gets a sleek website so good, even your competitors might accidentally compliment it.",
  },
  {
    title: "Landing Pages",
    description:
      "We create landing pages that convince people to click stuff—even if they don’t know why.",
  },
  {
    title: "E-commerce Stores",
    description:
      "We build online stores that sell things fast, even if your product is just socks with jokes.",
  },
  {
    title: "Custom Apps",
    description:
      "Got a weird idea? We’ll turn it into a working app, no matter how weird—or weirder.",
  },
];

export default function Services() {
  const [scrollActiveIndex, setScrollActiveIndex] = useState<number | null>(
    null
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      let closestIndex = -1;
      let minDistance = Infinity;

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - sectionCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setScrollActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (index: number) => {
    return (
      hoveredIndex === index ||
      (hoveredIndex === null && scrollActiveIndex === index)
    );
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full items-center justify-center">
      <div className="relative flex flex-col items-center justify-center uppercase GeistMedium max-w-6xl w-[95%] my-40">
        <h2 className="text-xl md:text-2xl w-full text-left text-primary">
          Our Services
        </h2>
        <p className="text-4xl md:text-5xl GeistBold">
          We build websites, design stuff that actually looks good, and help
          brands stand out online. Whether you need a logo or a landing page,
          Arctic Base has your back—student budget friendly!
        </p>
      </div>

      {services.map((service, index) => (
        <div
          key={index}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={clsx(
            "transition-all duration-500 ease-in-out flex flex-col justify-center items-center border-y w-full border-foreground py-10",
            isActive(index)
              ? "bg-primary text-background"
              : "bg-background text-foreground"
          )}
        >
          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl md:px-0">
            <p className="w-[95%] text-left text-4xl md:text-5xl GeistBold">
              {service.title}
            </p>
            <p
              className={clsx(
                "w-[95%] max-w-[700px] mt-3 md:mt-0 text-left text-sm md:text-xl text-background transition-all duration-500",
                isActive(index) ? "opacity-100 h-10" : "opacity-0 h-0"
              )}
            >
              {service.description}
            </p>
          </div>
        </div>
      ))}
      <div className="transition-all duration-500 ease-in-out flex flex-col justify-center items-center w-full py-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl md:px-0">
          <div className="flex justify-center items-center space-x-2 text-xl md:text-2xl w-full text-center text-primary">
            <Link href="/Services">
              <p className="cursor-pointer hover:underline">View More</p>
            </Link>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

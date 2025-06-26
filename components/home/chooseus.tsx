"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const reasons = [
  "No boss breathing down our necks—just our team vibing and building cool stuff.",
  "Corporate gives you long meetings and short results, while we give you short chats and long-lasting websites.",
  "At corporates, one person does everything badly; here, one person does one thing really well.",
  "Corporate delays with “internal approvals,” we say “cool, done” and send it before you even ask.",
];

export default function ChooseUs() {
  const [scrollActiveIndex, setScrollActiveIndex] = useState<number | null>(
    null
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      let closestIndex = -1;
      let minDistance = Infinity;

      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - itemCenter);
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
    <div className="relative flex flex-col min-h-screen w-full items-center justify-center bg-white/5 mt-10">
      <div className="relative flex flex-col items-center justify-center uppercase GeistMedium max-w-6xl w-[95%] my-40">
        <h2 className="text-xl md:text-2xl w-full text-left text-primary">
          Why Choose Us?
        </h2>
        <p className="text-4xl md:text-5xl GeistBold">
          We build websites, design stuff that actually looks good, and help
          brands stand out online. Whether you need a logo or a landing page,
          Arctic Base has your back—student budget friendly!
        </p>
      </div>

      {reasons.map((reason, index) => (
        <div
          key={index}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={clsx(
            "group flex flex-col justify-center items-center w-full h-auto border-y border-foreground transition-all duration-500",
            isActive(index) ? "bg-primary" : "bg-transparent"
          )}
        >
          <div className="flex justify-between items-start w-[95%] py-5 max-w-6xl transition-all duration-500">
            <div
              className={clsx(
                "group-hover:text-background text-4xl md:text-5xl GeistBold transition-all duration-500",
                isActive(index)
                  ? "text-background"
                  : "text-foreground"
              )}
            >
              0{index + 1}
            </div>
            <div
              className={clsx(
                "group-hover:text-background text-2xl md:text-3xl GeistBold w-[70%] GeistBold transition-all duration-500",
                isActive(index)
                  ? "text-background"
                  : "text-foreground"
              )}
            >
              {reason}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

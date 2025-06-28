"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const reasons = [
  "We offer high-quality work at prices that won’t break your budget—perfect for startups, students, and small businesses.",
  "We may be students, but our work doesn’t look like homework. It’s clean, polished, and client-approved every time.",
  "No drama, just good vibes. We work together like a well-fed startup family—minus the beanbags and office dogs.",
  "You talk directly to the creators—no “Let me check with the team” nonsense. We are the team.",
  "We don’t do it for the hustle culture. We build because we love it—and that shows in our work."
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
          We’re a team of students who do professional work at affordable
          prices. We take deadlines seriously, communicate clearly, and always
          test everything before delivering. Our designs look great, our code is
          clean, and we make sure the whole process is smooth and easy for you.
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
                isActive(index) ? "text-background" : "text-foreground"
              )}
            >
              0{index + 1}
            </div>
            <div
              className={clsx(
                "group-hover:text-background text-2xl md:text-3xl GeistBold w-[70%] GeistBold transition-all duration-500",
                isActive(index) ? "text-background" : "text-foreground"
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

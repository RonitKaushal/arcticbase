"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface Service {
  title: string;
  description: string;
}

interface ServiceCategory {
  category: string;
  services: Service[];
}

export const runtime = "edge";


const serviceCategories: ServiceCategory[] = [
  {
    category: "Web Design ",
    services: [
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
    ],
  },
  {
    category: "E-commerce",
    services: [
      {
        title: "E-commerce Stores",
        description:
          "We build online stores that sell things fast, even if your product is just socks with jokes.",
      },
      {
        title: "Subscription Platforms",
        description:
          "Set up subscriptions so sticky your customers won’t ghost you like that Tinder match.",
      },
    ],
  },
  {
    category: "Web Development",
    services: [
      {
        title: "Custom Apps",
        description:
          "Got a weird idea? We’ll turn it into a working app, no matter how weird—or weirder.",
      },
      {
        title: "API Integrations",
        description:
          "Smoothly connect your tools so well, they’ll practically finish each other’s sentences.",
      },
    ],
  },
  {
    category: "Branding & Identity",
    services: [
      {
        title: "Logo Design",
        description:
          "We craft logos that even your grandma would recognize and love.",
      },
      {
        title: "Brand Style Guide",
        description:
          "We build you a consistent brand so you don’t look like 5 startups mashed into one.",
      },
      {
        title: "Voice & Tone",
        description:
          "We find that signature voice so you sound like a pro, not like you’re yelling in ALL CAPS.",
      },
    ],
  },
  {
    category: "Hosting & DevOps",
    services: [
      {
        title: "Managed Hosting",
        description:
          "Rock-solid servers so your site won’t crash when traffic spikes—or your ex visits.",
      },
      {
        title: "CI/CD Pipelines",
        description:
          "Automated builds and deploys—because human error is so 1999.",
      },
      {
        title: "Security Hardening",
        description:
          "We lock things down tighter than a bouncer at an exclusive club.",
      },
    ],
  },
  {
    category: "Maintenance & Support",
    services: [
      {
        title: "Site Monitoring",
        description:
          "We watch your site round-the-clock so you can sleep without nightmares of 404s.",
      },
      {
        title: "Emergency Fixes",
        description:
          "Quick fixes at 3 AM, because why should daylight have all the fun?",
      },
      {
        title: "Performance Optimization",
        description:
          "We speed up your site so visitors stick around—none of that ‘please come back later’ nonsense.",
      },
    ],
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
    <div className="relative flex flex-col w-full items-center justify-center">
      <div className="relative flex flex-col items-center justify-center uppercase GeistMedium max-w-6xl w-[95%] my-40">
        <h2 className="text-xl md:text-2xl w-full text-left text-primary">
          Our Services
        </h2>
        <p className="text-4xl md:text-5xl GeistBold">
          We offer web development, design, branding, and more—everything you
          need to bring your ideas to life, done by students who actually care
          (and won’t overcharge you).
        </p>
      </div>

      {serviceCategories.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="w-full flex flex-col md:flex-row justify-between items-start my-20 max-w-6xl border-t border-primary"
        >
          <h3 className="md:w-[40%] w-full text-4xl md:text-5xl GeistBold mb-6 text-primary uppercase py-10">
            {group.category}
          </h3>
          <div className="flex flex-col justify-start items-start w-full md:w-[60%]">
            {group.services.map((service, index) => {
              const absoluteIndex =
                serviceCategories
                  .slice(0, groupIndex)
                  .reduce((acc, curr) => acc + curr.services.length, 0) + index;

              return (
                <div
                  key={absoluteIndex}
                  ref={(el) => {
                    sectionRefs.current[absoluteIndex] = el;
                  }}
                  onMouseEnter={() => setHoveredIndex(absoluteIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={clsx(
                    "transition-all duration-500 ease-in-out flex flex-col justify-center items-center border-y w-full py-10",
                    isActive(absoluteIndex)
                      ? "bg-primary text-background"
                      : "bg-background text-foreground"
                  )}
                >
                  <div className="flex flex-col justify-between items-center w-full md:px-0 max-w-6xl">
                    <p className="w-[95%] text-left text-4xl md:text-5xl GeistBold">
                      {service.title}
                    </p>
                    <p
                      className={clsx(
                        "w-[95%] max-w-[700px] mt-3 md:mt-0 text-left text-sm md:text-xl text-background transition-all duration-500",
                        isActive(absoluteIndex)
                          ? "opacity-100 h-10"
                          : "opacity-0 h-0"
                      )}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* /////// */}
        </div>
      ))}
    </div>
  );
}

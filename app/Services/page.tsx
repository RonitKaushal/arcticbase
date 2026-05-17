"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";


interface Service {
  title: string;
  description: string;
  icon?: string;
}

interface ServiceCategory {
  category: string;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    category: "Web Design",
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
          "We create landing pages that convince people to click stuff—even if they don't know why.",
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
          "Set up subscriptions so sticky your customers won't ghost you like that Tinder match.",
      },
    ],
  },
  {
    category: "Web Development",
    services: [
      {
        title: "Custom Apps",
        description:
          "Got a weird idea? We'll turn it into a working app, no matter how weird—or weirder.",
      },
      {
        title: "API Integrations",
        description:
          "Smoothly connect your tools so well, they'll practically finish each other's sentences.",
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
          "We build you a consistent brand so you don't look like 5 startups mashed into one.",
      },
      {
        title: "Voice & Tone",
        description:
          "We find that signature voice so you sound like a pro, not like you're yelling in ALL CAPS.",
      },
    ],
  },
  {
    category: "Hosting & DevOps",
    services: [
      {
        title: "Managed Hosting",
        description:
          "Rock-solid servers so your site won't crash when traffic spikes—or your ex visits.",
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
          "We speed up your site so visitors stick around—none of that 'please come back later' nonsense.",
      },
    ],
  },
  {
    category: "WhatsApp Business Messaging",
    services: [
      {
        title: "Official API integration",
        description:
          "Customer engagement, notifications, and support through Meta's WhatsApp Cloud API—policy-compliant, not unofficial bulk tools.",
      },
      {
        title: "Templates & campaigns",
        description:
          "Approved message templates, campaign workflows, and delivery insights for businesses with proper opt-in.",
      },
      {
        title: "Automation & CRM hooks",
        description:
          "Connect your stack so sales and support teams send the right message at the right time.",
      },
    ],
  },
];

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(
    new Set()
  );
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = categoryRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCategories((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="relative flex flex-col w-full items-center justify-center min-h-screen">
      {/* Hero Section */}
      <div className="z-0 fixed top-0 flex justify-center items-center w-screen h-screen overflow-hidden">
        <Image src="/wallpaper.png" alt="services" width={1000} height={1000} className="object-cover w-full h-full opacity-10" />
      </div>
      <div className="z-10 relative flex flex-col items-start justify-center max-w-6xl w-[95%] mt-40 mb-32">
        <div className="relative w-full">
          {/* Decorative Line */}
          <div className="absolute left-0 top-0 w-16 h-1 bg-primary mb-6 animate-fade-in-up" />
          
          {/* Label */}
          <div className="overflow-hidden mb-6 mt-8">
            <div className="inline-block">
              <span className="text-sm md:text-base GeistMedium text-primary uppercase tracking-[0.2em] animate-fade-in-up inline-block">
                our services
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="overflow-hidden mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl GeistBold leading-tight animate-fade-in-up [animation-delay:150ms]">
              We offer{" "}
              <span className="relative inline-block">
                <span className="relative z-10">web development</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-0" />
              </span>
              ,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">design</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-0" />
              </span>
              ,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">branding</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-0" />
              </span>
              , and more
            </h1>
          </div>

          {/* Description */}
          <div className="overflow-hidden">
            <p className="text-lg md:text-xl lg:text-2xl Geist text-muted-foreground max-w-4xl leading-relaxed animate-fade-in-up [animation-delay:300ms]">
              Everything you need to bring your ideas to life, done by students who actually care
              <span className="text-primary"> (and won&apos;t overcharge you)</span>.
            </p>
          </div>

          {/* Bottom Decorative Element */}
          <div className="absolute -bottom-8 left-0 w-24 h-px bg-gradient-to-r from-primary to-transparent animate-fade-in-up [animation-delay:450ms]" />
        </div>
      </div>

      {/* Services Grid */}
      <div className="z-10 relative flex flex-col max-w-6xl w-[95%] my-20 gap-16 md:gap-24">
        {serviceCategories.map((group, groupIndex) => {
          const isVisible = visibleCategories.has(groupIndex);

          return (
            <div
              key={groupIndex}
              ref={(el) => {
                categoryRefs.current[groupIndex] = el;
              }}
              className={clsx(
                "flex flex-col gap-8 transition-all duration-1000",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{
                transitionDelay: `${groupIndex * 100}ms`,
              }}
            >
              {/* Category Header */}
              <div className="relative overflow-hidden">
                <h3
                  className={clsx(
                    "text-3xl md:text-4xl lg:text-5xl GeistBold text-primary uppercase transition-all duration-700",
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  )}
                  style={{
                    transitionDelay: `${groupIndex * 100 + 200}ms`,
                  }}
                >
                  {group.category}
                </h3>
                <div
                  className={clsx(
                    "absolute bottom-0 left-0 h-1 bg-primary transition-all duration-700",
                    isVisible ? "w-full" : "w-0"
                  )}
                  style={{
                    transitionDelay: `${groupIndex * 100 + 400}ms`,
                  }}
                />
              </div>

              {/* Services Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.services.map((service, serviceIndex) => {
                  const absoluteIndex =
                    serviceCategories
                      .slice(0, groupIndex)
                      .reduce((acc, curr) => acc + curr.services.length, 0) +
                    serviceIndex;
                  const isHovered = hoveredCard === absoluteIndex;

                  return (
                    <div
                      key={serviceIndex}
                      onMouseEnter={() => setHoveredCard(absoluteIndex)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={clsx(
                        "group relative flex flex-col p-6 md:p-8 border border-foreground/10 rounded-lg",
                        "bg-background/50 backdrop-blur-sm",
                        "transition-all duration-500 ease-out",
                        "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
                        isHovered && "scale-[1.02] border-primary/30",
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      )}
                      style={{
                        transitionDelay: `${
                          groupIndex * 100 + serviceIndex * 100 + 300
                        }ms`,
                      }}
                    >
                      {/* Hover Background Effect */}
                      <div
                        className={clsx(
                          "absolute inset-0 bg-primary/5 rounded-lg transition-opacity duration-500",
                          isHovered ? "opacity-100" : "opacity-0"
                        )}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col space-y-4">
                        {/* Title */}
                        <h4
                          className={clsx(
                            "text-xl md:text-2xl GeistBold transition-all duration-500",
                            isHovered && "text-primary translate-x-2"
                          )}
                        >
                          {service.title}
                        </h4>

                        {/* Description */}
                        <p
                          className={clsx(
                            "text-sm md:text-base Geist text-muted-foreground transition-all duration-500",
                            isHovered
                              ? "opacity-100 translate-y-0"
                              : "opacity-80 translate-y-1"
                          )}
                        >
                          {service.description}
                        </p>

                        {/* Hover Indicator */}
                        <div
                          className={clsx(
                            "flex items-center gap-2 mt-2 transition-all duration-500",
                            isHovered
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-4"
                          )}
                        >
                          <div className="h-0.5 w-8 bg-primary" />
                          <span className="text-xs text-primary GeistMedium uppercase tracking-wider">
                            Learn More
                          </span>
                        </div>
                      </div>

                      {/* Corner Accent */}
                      <div
                        className={clsx(
                          "absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/20 rounded-tr-lg transition-all duration-500",
                          isHovered && "border-primary/50 w-20 h-20"
                        )}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Spacing */}
      <div className="h-20" />
    </div>
  );
}

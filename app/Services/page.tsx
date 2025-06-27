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
    category: "Marketing & Strategy",
    services: [
      {
        title: "Social Media Strategy",
        description:
          "We help you go viral—or at least get your mom to share your posts.",
      },
      {
        title: "Ad Campaigns",
        description:
          "Launch ad campaigns that don’t feel like ads. Or at least don’t suck.",
      },
      {
        title: "Email Marketing",
        description:
          "We write emails that people actually open—no “unsubscribe” panic attacks here.",
      },
    ],
  },
  {
    category: "UX/UI Design",
    services: [
      {
        title: "Wireframing",
        description:
          "We sketch out your dreams so you don’t end up in a design nightmare.",
      },
      {
        title: "Interactive Prototypes",
        description:
          "Clickable mockups so real, you’ll swear they’re already live.",
      },
      {
        title: "User Testing",
        description:
          "We nail down pain points so your users won’t stab you with virtual pitchforks.",
      },
    ],
  },
  {
    category: "SEO & Analytics",
    services: [
      {
        title: "SEO Audits",
        description:
          "We sniff out hidden SEO issues so you can outrank that spammy site next door.",
      },
      {
        title: "Keyword Strategy",
        description:
          "We pick keywords that drive traffic—no more shouting into the void.",
      },
      {
        title: "Performance Tracking",
        description:
          "We monitor clicks and conversions so you’re never blind to your own brilliance.",
      },
    ],
  },
  {
    category: "Content Creation",
    services: [
      {
        title: "Copywriting",
        description:
          "Persuasive copy that sells without feeling like a used-car pitch.",
      },
      {
        title: "Blog Management",
        description:
          "We keep your blog buzzing so you don’t after three posts go radio silent.",
      },
      {
        title: "Video Production",
        description:
          "Short videos that captivate—yes, people still watch video these days.",
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
  {
    category: "Workshops & Training",
    services: [
      {
        title: "Team Workshops",
        description:
          "Interactive sessions that won’t feel like corporate death by PowerPoint.",
      },
      {
        title: "1-on-1 Coaching",
        description:
          "Personalized coaching so you actually learn something instead of dozing off.",
      },
    ],
  },
];


export default function Services() {
  const [scrollActiveIndex, setScrollActiveIndex] = useState<number | null>(null);
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
    return hoveredIndex === index || (hoveredIndex === null && scrollActiveIndex === index);
  };

  return (
    <div className="relative flex flex-col w-full items-center justify-center">
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

      {serviceCategories.map((group, groupIndex) => (
        <div key={groupIndex} className="w-full flex flex-col md:flex-row justify-between items-start my-20 max-w-6xl border-t border-primary">
          <h3 className="md:w-[40%] w-full text-4xl md:text-5xl GeistBold mb-6 text-primary uppercase py-10">
            {group.category}
          </h3>
          <div className="flex flex-col justify-start items-start w-full md:w-[60%]">
          {group.services.map((service, index) => {
            const absoluteIndex = serviceCategories
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
                      isActive(absoluteIndex) ? "opacity-100 h-10" : "opacity-0 h-0"
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

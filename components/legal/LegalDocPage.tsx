import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

type LegalDocPageProps = {
  title: string;
  updatedLabel: string;
  siblingHref: string;
  siblingShortLabel: string;
  eyebrow?: string;
  intro?: ReactNode;
  sections: LegalSection[];
};

export function LegalDocPage({
  title,
  updatedLabel,
  siblingHref,
  siblingShortLabel,
  eyebrow = "Legal",
  intro,
  sections,
}: LegalDocPageProps) {
  return (
    <div className="relative flex w-full flex-col items-center overflow-x-hidden pb-24 md:pb-32">
      <div className="fixed top-0 z-0 flex h-screen w-screen items-center justify-center overflow-hidden">
        <Image
          src="/wallpaper.png"
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full object-cover opacity-[0.08] dark:opacity-[0.12]"
          priority={false}
        />
      </div>

      <div className="relative z-10 w-[95%] max-w-6xl pt-32 md:pt-40">
        <div className="mb-14 flex flex-col gap-10 border-b border-foreground/10 pb-14 md:flex-row md:items-end md:justify-between">
          <div className="relative max-w-3xl space-y-6">
            <div className="h-1 w-16 animate-fade-in-up bg-primary" />
            <span className="inline-block animate-fade-in-up text-xs GeistMedium uppercase tracking-[0.25em] text-primary [animation-delay:80ms]">
              {eyebrow}
            </span>
            <h1 className="animate-fade-in-up GeistBold text-4xl uppercase leading-[1.08] tracking-tight md:text-5xl lg:text-6xl [animation-delay:120ms]">
              {title}
            </h1>
            <p className="animate-fade-in-up Geist text-sm text-muted-foreground md:text-base [animation-delay:180ms]">
              Last updated · {updatedLabel}
            </p>
            {intro ? (
              <p className="animate-fade-in-up Geist text-base leading-relaxed text-foreground/80 md:text-lg [animation-delay:220ms]">
                {intro}
              </p>
            ) : null}
            <div className="h-px w-28 bg-gradient-to-r from-primary to-transparent animate-fade-in-up [animation-delay:280ms]" />
          </div>

          <Link
            href={siblingHref}
            className="group flex shrink-0 items-center gap-3 self-start rounded-full border border-foreground/15 bg-background/60 px-5 py-3 text-xs GeistMedium uppercase tracking-widest backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 md:self-auto"
          >
            <span className="text-muted-foreground transition-colors group-hover:text-foreground">
              View
            </span>
            <span className="text-primary">{siblingShortLabel}</span>
            <span
              aria-hidden
              className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>

        <nav
          aria-label="On this page"
          className="mb-10 xl:hidden flex flex-wrap gap-2"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-foreground/10 bg-background/50 px-3 py-1.5 text-xs GeistMedium uppercase tracking-wide text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/30 hover:text-primary"
            >
              {s.title}
            </a>
          ))}
        </nav>

        <div className="grid gap-12 xl:grid-cols-[220px,minmax(0,1fr)] xl:gap-16">
          <aside className="hidden xl:block">
            <nav
              aria-label="On this page"
              className="sticky top-28 space-y-1 border-l border-foreground/10 pl-6"
            >
              <p className="mb-4 text-[10px] GeistBold uppercase tracking-[0.2em] text-muted-foreground">
                On this page
              </p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group block py-2 text-sm GeistMedium text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="border-b border-transparent transition-colors group-hover:border-primary/40">
                    {s.title}
                  </span>
                </a>
              ))}
            </nav>
          </aside>

          <div className="flex min-w-0 flex-col gap-6">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-2xl border border-foreground/10 bg-background/45 p-6 shadow-sm shadow-black/5 backdrop-blur-md transition-colors hover:border-foreground/20 dark:bg-background/30 dark:shadow-black/40 md:p-8"
              >
                <div className="flex flex-col gap-5 md:flex-row md:gap-8">
                  <div className="flex shrink-0 items-start gap-4 md:flex-col md:gap-3">
                    <span
                      aria-hidden
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 GeistBold text-lg text-primary tabular-nums md:h-14 md:w-14 md:text-xl"
                    >
                      {index + 1}
                    </span>
                    <div className="hidden h-px w-full bg-gradient-to-r from-primary/40 to-transparent md:block" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-4 pt-1">
                    <h2 className="GeistBold text-xl uppercase tracking-tight text-foreground md:text-2xl">
                      {section.title}
                    </h2>
                    <div className="Geist text-sm leading-relaxed text-foreground/85 md:text-base [&_a]:border-b [&_a]:border-primary/40 [&_a]:font-medium [&_a]:text-primary [&_a]:transition-colors hover:[&_a]:border-primary hover:[&_a]:opacity-90">
                      {section.body}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

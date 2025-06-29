// app/page.tsx or wherever your Home component is defined
"use client";

import About from "@/components/home/about";
import ChooseUs from "@/components/home/chooseus";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Testimony from "@/components/home/testimony";

export const runtime = "edge";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Hero />
      <About />
      <Services />
      <ChooseUs />
      <Testimony />
    </main>
  );
}

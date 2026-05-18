// app/page.tsx or wherever your Home component is defined
"use client";

import About from "@/components/home/about";
import ChooseUs from "@/components/home/chooseus";
import Hero from "@/components/home/hero";
import PlatformTeaser from "@/components/home/platform-teaser";
import Services from "@/components/home/services";
import Testimony from "@/components/home/testimony";

 
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Hero />
      <PlatformTeaser />
      <About />
      <Services />
      <ChooseUs />
      <Testimony />
    </main>
  );
}

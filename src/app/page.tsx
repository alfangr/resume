"use client";

import Hero from "@/components/hero/index";
import Projects from "@/components/projects/index";
import TechStack from "@/components/tech-stack/index";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Hero />
      <TechStack />
      <Projects />
    </main>
  );
}

import { Nav } from "@/components/nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { About } from "@/components/about";
import { Stack } from "@/components/stack";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="relative">
        <Hero />
        <Experience />
        <About />
        <Stack />
        <Contact />
      </main>
    </>
  );
}

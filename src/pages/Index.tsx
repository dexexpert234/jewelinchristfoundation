import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";
import WhyItMatters from "@/components/sections/WhyItMatters";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();
  return (
  <SiteLayout>
    <Seo
      title="Jewel in Christ Foundation — Empowering Women"
      description="Faith-driven NGO empowering women through skills, entrepreneurship, and advocacy. Donate, volunteer, and partner with us."
      path="/"
    />
    <Hero />
    <Stats />
    <About />
    <WhyItMatters />
    <Blog />
  </SiteLayout>
  );
};

export default Index;

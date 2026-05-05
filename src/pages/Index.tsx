import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";

const Index = () => (
  <SiteLayout>
    <Hero />
    <Stats />
    <About />
    <Blog />
  </SiteLayout>
);

export default Index;

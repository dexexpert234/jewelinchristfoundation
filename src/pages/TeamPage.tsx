import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Team from "@/components/sections/Team";
import CoreValues from "@/components/sections/CoreValues";

const TeamPage = () => (
  <SiteLayout>
    <Seo
      title="Our Team & Advisory Board | Jewel in Christ Foundation"
      description="Meet the leadership, staff, and advisory board guiding Jewel in Christ Foundation — and the core values that shape our work."
      path="/team"
    />
    <PageHero
      eyebrow="People & Principles"
      title="Our Team & Advisory Board"
      subtitle="Faith-led leaders, seasoned professionals, and trusted advisors united by one mission — empowered women, thriving communities."
    />
    <Team />
    <CoreValues />
  </SiteLayout>
);

export default TeamPage;
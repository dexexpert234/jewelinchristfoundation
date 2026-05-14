import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Programs from "@/components/sections/Programs";

const ProgramsPage = () => (
  <SiteLayout>
    <Seo title="Our Programs | Jewel in Christ Foundation" description="Vocational training, entrepreneurship, advocacy and outreach programs restoring dignity and unlocking potential." path="/programs" />
    <PageHero eyebrow="What We Do" title="Our Programs" subtitle="Holistic, community-rooted programs that restore dignity and unlock potential." />
    <Programs />
  </SiteLayout>
);
export default ProgramsPage;
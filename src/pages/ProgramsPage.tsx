import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import Programs from "@/components/sections/Programs";

const ProgramsPage = () => (
  <SiteLayout>
    <PageHero eyebrow="What We Do" title="Our Programs" subtitle="Holistic, community-rooted programs that restore dignity and unlock potential." />
    <Programs />
  </SiteLayout>
);
export default ProgramsPage;
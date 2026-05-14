import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/sections/Testimonials";

const TestimonialsPage = () => (
  <SiteLayout>
    <Seo title="Testimonials | Jewel in Christ Foundation" description="Stories from beneficiaries, partners, and volunteers transformed by our mission." path="/testimonials" />
    <PageHero eyebrow="Voices of Impact" title="Testimonials" subtitle="Stories from beneficiaries, partners, and volunteers transformed by the mission." />
    <Testimonials />
  </SiteLayout>
);
export default TestimonialsPage;
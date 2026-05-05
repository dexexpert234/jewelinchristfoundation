import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/sections/Testimonials";

const TestimonialsPage = () => (
  <SiteLayout>
    <PageHero eyebrow="Voices of Impact" title="Testimonials" subtitle="Stories from beneficiaries, partners, and volunteers transformed by the mission." />
    <Testimonials />
  </SiteLayout>
);
export default TestimonialsPage;
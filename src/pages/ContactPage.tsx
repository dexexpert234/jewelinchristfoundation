import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Contact from "@/components/sections/Contact";

const ContactPage = () => (
  <SiteLayout>
    <Seo title="Contact Us | Jewel in Christ Foundation" description="Reach out for partnerships, volunteering, or general questions. We'd love to hear from you." path="/contact" />
    <PageHero eyebrow="Get in Touch" title="Contact Us" subtitle="Have questions, partnership ideas, or want to volunteer? We'd love to hear from you." />
    <Contact />
  </SiteLayout>
);
export default ContactPage;
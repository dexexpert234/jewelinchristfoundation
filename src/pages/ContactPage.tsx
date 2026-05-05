import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import Contact from "@/components/sections/Contact";

const ContactPage = () => (
  <SiteLayout>
    <PageHero eyebrow="Get in Touch" title="Contact Us" subtitle="Have questions, partnership ideas, or want to volunteer? We'd love to hear from you." />
    <Contact />
  </SiteLayout>
);
export default ContactPage;
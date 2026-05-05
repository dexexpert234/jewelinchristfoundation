import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/sections/Gallery";

const GalleryPage = () => (
  <SiteLayout>
    <PageHero eyebrow="Moments of Impact" title="Gallery" subtitle="A visual journey through our outreach, programs, and community celebrations." />
    <Gallery />
  </SiteLayout>
);
export default GalleryPage;
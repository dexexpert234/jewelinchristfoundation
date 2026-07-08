import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/sections/Gallery";

const GalleryPage = () => (
  <SiteLayout>
    <Seo title="Gallery | Jewel in Christ Foundation" description="A visual journey through our outreach, programs, and community celebrations." path="/gallery" />
    <PageHero eyebrow="Moments of Impact" title="Gallery" subtitle="A visual journey through our outreach, programs, and community celebrations." />
    <Gallery />
  </SiteLayout>
);
export default GalleryPage;

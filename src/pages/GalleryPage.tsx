import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import DomeGallery from "@/components/DomeGallery";
import j1 from "@/assets/jewel-1.jpg";
import j2 from "@/assets/jewel-2.jpg";
import j3 from "@/assets/jewel-3.jpg";
import j4 from "@/assets/jewel-4.jpg";
import j5 from "@/assets/jewel-5.jpg";
import j6 from "@/assets/jewel-6.jpg";
import j7 from "@/assets/jewel-7.jpg";
import j8 from "@/assets/jewel-8.jpg";
import g1 from "@/assets/gallery-extra-1.jpg";
import g2 from "@/assets/gallery-extra-2.jpg";
import g3 from "@/assets/gallery-extra-3.jpg";
import g4 from "@/assets/gallery-extra-4.jpg";
import g5 from "@/assets/gallery-extra-5.jpg";
import g6 from "@/assets/gallery-extra-6.jpg";
import g7 from "@/assets/gallery-extra-7.jpg";
import g8 from "@/assets/gallery-extra-8.jpg";
import g9 from "@/assets/gallery-extra-9.jpg";
import g10 from "@/assets/gallery-extra-10.jpg";
import n1 from "@/assets/gallery-new-1.jpg";
import n2 from "@/assets/gallery-new-2.jpg";
import n3 from "@/assets/gallery-new-3.jpg";
import n4 from "@/assets/gallery-new-4.jpg";
import n5 from "@/assets/gallery-new-5.jpg";
import n6 from "@/assets/gallery-new-6.jpg";
import prayer1 from "@/assets/gallery-prayer-1.jpg";
import prayer2 from "@/assets/gallery-prayer-2.jpg";
import prayer3 from "@/assets/gallery-prayer-3.jpg";
import snacks from "@/assets/gallery-snacks.jpg";
import c1 from "@/assets/gallery-christmas-1.jpg.asset.json";
import c2 from "@/assets/gallery-christmas-2.jpg.asset.json";
import c3 from "@/assets/gallery-christmas-3.jpg.asset.json";
import c4 from "@/assets/gallery-christmas-4.jpg.asset.json";
import c5 from "@/assets/gallery-christmas-5.jpg.asset.json";
import c6 from "@/assets/gallery-christmas-6.jpg.asset.json";
import c7 from "@/assets/gallery-christmas-7.jpg.asset.json";
import c8 from "@/assets/gallery-christmas-8.jpg.asset.json";
import c9 from "@/assets/gallery-christmas-9.jpg.asset.json";
import videoAsset from "@/assets/gallery-video.mp4.asset.json";
import juvenileVideoAsset from "@/assets/gallery-juvenile-asero.mp4.asset.json";

const items = [
  { src: j1, caption: "Christmas Outreach" },
  { src: j2, caption: "Christmas Outreach" },
  { src: j3, caption: "International Day of the Girl Child" },
  { src: j4, caption: "International Day of the Girl Child" },
  { src: j5, caption: "International Day of the Girl Child" },
  { src: j6, caption: "International Day of the Girl Child" },
  { src: j7, caption: "International Day of the Girl Child" },
  { src: j8, caption: "Partnership with Obijackson Foundation" },
  { src: g1, caption: "International Women's Day" },
  { src: g2, caption: "International Women's Day" },
  { src: g3, caption: "International Women's Day" },
  { src: g4, caption: "International Women's Day" },
  { src: g5, caption: "International Women's Day" },
  { src: g6, caption: "International Women's Day" },
  { src: g7, caption: "Rural Women Empowerment" },
  { src: g8, caption: "Rural Women Empowerment" },
  { src: g9, caption: "Rural Women Empowerment" },
  { src: g10, caption: "Rural Women Empowerment" },
  { src: n1, caption: "Award for Philanthropy" },
  { src: n2, caption: "National Conference — Abeokuta" },
  { src: n3, caption: "International Women's Day" },
  { src: n4, caption: "International Women's Day" },
  { src: n5, caption: "International Women's Day" },
  { src: n6, caption: "Honouring Mrs. Titi Akinlawon, SAN" },
  { src: prayer1, caption: "Women's Monthly Prayer Meeting" },
  { src: prayer2, caption: "Women's Monthly Prayer Meeting" },
  { src: prayer3, caption: "Women's Monthly Prayer Meeting" },
  { src: snacks, caption: "Skills Acquisition — Baking" },
  { src: c1.url, caption: "Christmas Outreach — School Visit" },
  { src: c2.url, caption: "Christmas Outreach — School Visit" },
  { src: c3.url, caption: "Christmas Outreach — School Visit" },
  { src: c4.url, caption: "Christmas Outreach — School Visit" },
  { src: c5.url, caption: "Christmas Outreach — School Visit" },
  { src: c6.url, caption: "Christmas Outreach — School Visit" },
  { src: c7.url, caption: "Christmas Outreach — School Visit" },
  { src: c8.url, caption: "Christmas Outreach — School Visit" },
  { src: c9.url, caption: "Christmas Outreach — School Visit" },
];

const GalleryPage = () => (
  <SiteLayout>
    <Seo title="Gallery | Jewel in Christ Foundation" description="A visual journey through our outreach, programs, and community celebrations." path="/gallery" />
    <PageHero eyebrow="Moments of Impact" title="Gallery" subtitle="A visual journey through our outreach, programs, and community celebrations." />
    <section className="py-16 bg-background">
      <div className="container">
        <DomeGallery items={items} />
      </div>
    </section>

    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Video Highlights</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary">Stories in Motion</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <figure className="relative overflow-hidden rounded-3xl shadow-elegant">
            <video src={videoAsset.url} className="w-full h-auto" controls playsInline preload="metadata" />
            <figcaption className="p-4 text-sm text-primary font-medium">Highlights from our recent outreach</figcaption>
          </figure>
          <figure className="relative overflow-hidden rounded-3xl shadow-elegant">
            <video src={juvenileVideoAsset.url} className="w-full h-auto" controls playsInline preload="metadata" />
            <figcaption className="p-4 text-sm text-primary font-medium">Visit to Juvenile Correctional Home, Asero, Abeokuta</figcaption>
          </figure>
        </div>
      </div>
    </section>
  </SiteLayout>
);
export default GalleryPage;
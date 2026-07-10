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
import videoAsset from "@/assets/jic-video-1.mp4.asset.json";
import juvenileVideoAsset from "@/assets/gallery-juvenile-asero.mp4.asset.json";

const photos = [
  { src: j1, caption: "Make Someone Smile at Christmas Outreach" },
  { src: j2, caption: "Make Someone Smile at Christmas Outreach" },
  { src: j3, caption: "School Outreach — International Day of the Girl Child" },
  { src: j4, caption: "School Outreach — International Day of the Girl Child" },
  { src: j5, caption: "School Outreach — International Day of the Girl Child" },
  { src: j6, caption: "School Outreach — International Day of the Girl Child" },
  { src: j7, caption: "School Outreach — International Day of the Girl Child" },
  { src: j8, caption: "Partnership with Obijackson Foundation" },
  { src: g1, caption: "2026 International Women's Day Celebration" },
  { src: g2, caption: "2026 International Women's Day Celebration" },
  { src: g3, caption: "2026 International Women's Day Celebration" },
  { src: g4, caption: "2026 International Women's Day Celebration" },
  { src: g5, caption: "2026 International Women's Day Celebration" },
  { src: g6, caption: "2026 International Women's Day Celebration" },
  { src: g7, caption: "Rural Women Empowerment — Food & Micro-Grant Support" },
  { src: g8, caption: "Rural Women Empowerment — Food & Micro-Grant Support" },
  { src: g9, caption: "Rural Women Empowerment — Food & Micro-Grant Support" },
  { src: g10, caption: "Rural Women Empowerment — Food & Micro-Grant Support" },
  { src: n1, caption: "Award for Philanthropy — Judith Agu Esq." },
  { src: n2, caption: "National Conference & Presentation of Awards — Abeokuta" },
  { src: n3, caption: "2026 International Women's Day Celebration" },
  { src: n4, caption: "2026 International Women's Day Celebration" },
  { src: n5, caption: "2026 International Women's Day Celebration" },
  { src: n6, caption: "Honouring Mrs. Titi Akinlawon, SAN" },
  { src: prayer1, caption: "Women's Monthly Prayer Meeting" },
  { src: prayer2, caption: "Women's Monthly Prayer Meeting" },
  { src: prayer3, caption: "Women's Monthly Prayer Meeting" },
  { src: snacks, caption: "Trying out snacks after a skills acquisition program on baking" },
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

const Gallery = () => (
  <section id="gallery" className="py-28 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Moments of Impact</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
          Our <em className="text-gradient-royal not-italic font-semibold">Gallery</em>
        </h2>
        <p className="text-muted-foreground">A glimpse into the lives we touch and the communities we serve.</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
        <figure className="group relative overflow-hidden rounded-3xl shadow-card break-inside-avoid">
          <video
            src={videoAsset.url}
            className="w-full h-auto object-cover"
            controls
            playsInline
            preload="metadata"
          />
          <figcaption className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-primary/95 via-primary/60 to-transparent text-primary-foreground text-sm">
            Highlights from our recent outreach
          </figcaption>
        </figure>
        <figure className="group relative overflow-hidden rounded-3xl shadow-card break-inside-avoid">
          <video
            src={juvenileVideoAsset.url}
            className="w-full h-auto object-cover"
            controls
            playsInline
            preload="metadata"
          />
          <figcaption className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-primary/95 via-primary/60 to-transparent text-primary-foreground text-sm">
            Visit to Juvenile Correctional Home, Asero, Abeokuta
          </figcaption>
        </figure>
        {photos.map((p, i) => (
          <figure key={i} className="group relative overflow-hidden rounded-3xl shadow-card break-inside-avoid">
            <img
              src={p.src}
              alt={p.caption}
              className="w-full h-auto object-cover group-hover:scale-105 transition-smooth duration-700"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent text-primary-foreground text-sm opacity-0 group-hover:opacity-100 transition-smooth">
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
export default Gallery;
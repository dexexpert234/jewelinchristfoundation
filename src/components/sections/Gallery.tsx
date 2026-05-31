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
// duplicates of gallery-extra-7..10 removed

const photos = [
  { src: j1, caption: "Christmas outreach — gift presentation" },
  { src: j2, caption: "Jewel in Christ team with beneficiary" },
  { src: j3, caption: "Sharing care packages with pupils" },
  { src: j4, caption: "Empowering young scholars" },
  { src: j5, caption: "Joyful classroom celebration" },
  { src: j6, caption: "Balloon outreach in primary school" },
  { src: j7, caption: "School-wide pupils outreach" },
  { src: j8, caption: "Partnership with Obijackson Foundation" },
  { src: g1, caption: "2026 International Women's Day — high table address" },
  { src: g2, caption: "Honouring excellence — recognition award" },
  { src: g3, caption: "Welcome remarks at the IWD celebration" },
  { src: g4, caption: "Solidarity in purple — supporters of the cause" },
  { src: g5, caption: "Recognising women of distinction" },
  { src: g6, caption: "Award presentation to a community matriarch" },
  { src: g7, caption: "Food parcels distributed to women in need" },
  { src: g8, caption: "₦50,000 micro-grant presented to a beneficiary" },
  { src: g9, caption: "Group photo — women's empowerment gathering" },
  { src: g10, caption: "Community engagement & outreach in session" },
  { src: n1, caption: "Award for Philanthropy — Barrister Judith Agu Esq." },
  { src: n2, caption: "National Conference & Presentation of Awards — Abeokuta" },
  { src: n3, caption: "Plaque presentation at the 2026 IWD celebration" },
  { src: n4, caption: "Supporters standing with the foundation" },
  { src: n5, caption: "Recognising a woman of impact" },
  { src: n6, caption: "Honouring Mrs. Titi Akinlawon, SAN" },
  // duplicates removed: gallery-new-7..10 mirrored gallery-extra-7..10
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
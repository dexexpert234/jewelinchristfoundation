import j1 from "@/assets/jewel-1.jpg";
import j2 from "@/assets/jewel-2.jpg";
import j3 from "@/assets/jewel-3.jpg";
import j4 from "@/assets/jewel-4.jpg";
import j5 from "@/assets/jewel-5.jpg";
import j6 from "@/assets/jewel-6.jpg";
import j7 from "@/assets/jewel-7.jpg";
import j8 from "@/assets/jewel-8.jpg";

const photos = [
  { src: j1, caption: "Christmas outreach — gift presentation" },
  { src: j2, caption: "Jewel in Christ team with beneficiary" },
  { src: j3, caption: "Sharing care packages with pupils" },
  { src: j4, caption: "Empowering young scholars" },
  { src: j5, caption: "Joyful classroom celebration" },
  { src: j6, caption: "Balloon outreach in primary school" },
  { src: j7, caption: "School-wide pupils outreach" },
  { src: j8, caption: "Partnership with Obijackson Foundation" },
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
import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const items = [
  { name: "Adaeze Okonkwo", role: "Beneficiary, Fashion Program", initials: "AO", text: "Jewel in Christ gave me more than skills — they gave me hope. Today I run my own tailoring shop and employ two other women.", rating: 5 },
  { name: "Pastor James Eze", role: "Community Partner", initials: "JE", text: "Their integrity and impact is unmatched. Every program is executed with excellence, dignity, and a deep love for people.", rating: 5 },
  { name: "Grace Mbakwe", role: "Volunteer, 3 years", initials: "GM", text: "Volunteering here transformed my life. The team is family. The mission is sacred. The impact is real.", rating: 5 },
  { name: "Chiamaka N.", role: "Survivor & Advocate", initials: "CN", text: "When I had nothing, they walked with me. Now I help other women find their strength. This foundation saves lives.", rating: 5 },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-28 gradient-royal text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 40%)" }} />
      <div className="container relative z-10">
        <div className="text-center mb-14">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Voices of Impact</p>
          <h2 className="font-display text-4xl md:text-5xl">Stories That <em className="text-gradient-gold not-italic font-semibold">Inspire</em></h2>
        </div>

        <div className="max-w-3xl mx-auto relative min-h-[320px]">
          {items.map((t, idx) => (
            <div key={idx} className={`absolute inset-0 transition-all duration-700 ${idx === i ? "opacity-100 translate-x-0" : idx < i ? "opacity-0 -translate-x-12" : "opacity-0 translate-x-12 pointer-events-none"}`}>
              <Quote className="h-16 w-16 text-accent/40 mx-auto mb-6" />
              <p className="font-display text-2xl md:text-3xl italic text-center leading-relaxed mb-8">
                "{t.text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-14 w-14 rounded-full gradient-gold flex items-center justify-center font-display text-xl text-primary font-semibold">{t.initials}</div>
                <div>
                  <div className="font-semibold text-accent">{t.name}</div>
                  <div className="text-sm text-primary-foreground/70">{t.role}</div>
                </div>
              </div>
              <div className="flex justify-center gap-1 mt-4">
                {Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {items.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Testimonial ${idx + 1}`} className={`h-1.5 rounded-full transition-smooth ${idx === i ? "w-10 bg-accent" : "w-5 bg-primary-foreground/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;

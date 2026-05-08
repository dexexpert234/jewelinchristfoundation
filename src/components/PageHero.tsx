const PageHero = ({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) => (
  <section className="relative gradient-royal text-primary-foreground py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 45%)" }} />
    <div className="container relative z-10 text-center max-w-3xl mx-auto">
      <p className="text-primary-foreground/80 text-xs uppercase tracking-[0.4em] mb-4">{eyebrow}</p>
      <h1 className="font-display text-5xl md:text-6xl mb-5">{title}</h1>
      {subtitle && <p className="text-primary-foreground/85 text-lg leading-relaxed">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
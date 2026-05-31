import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { posts } from "@/data/posts";

const Blog = () => (
  <section id="blog" className="py-28 bg-background">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6 reveal">
        <div>
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Stories & Updates</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary">From the <em className="text-gradient-royal not-italic font-semibold">Field</em></h2>
        </div>
        <Link to="/stories" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-smooth">
          Get story updates <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <Link to={`/stories/${p.slug}`} key={p.slug} className="group cursor-pointer block reveal" style={{ transitionDelay: `${i * 90}ms` }}>
            <div className="relative h-72 rounded-3xl overflow-hidden mb-5 shadow-card">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" loading="lazy" width={800} height={600} />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-accent text-primary text-[10px] uppercase tracking-[0.2em] font-semibold">{p.tag}</div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
              <Calendar className="h-3.5 w-3.5 text-accent" /> {p.date}
            </div>
            <h3 className="font-display text-2xl text-primary mb-3 group-hover:text-accent transition-smooth">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-smooth">
              Read the story <ArrowRight className="h-3.5 w-3.5 transition-smooth group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
export default Blog;

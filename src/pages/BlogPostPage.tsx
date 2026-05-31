import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, Heart, Share2 } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { getPost, posts } from "@/data/posts";
import { buildMailto } from "@/lib/contact";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getPost(slug ?? "");

  if (!post) {
    return (
      <SiteLayout>
        <Seo title="Story not found | Jewel in Christ Foundation" description="The story you are looking for does not exist." path={`/stories/${slug}`} />
        <div className="container py-32 text-center">
          <h1 className="font-display text-4xl text-primary mb-4">Story not found</h1>
          <Link to="/stories" className="text-primary underline">Back to all stories</Link>
        </div>
      </SiteLayout>
    );
  }

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <SiteLayout>
      <Seo title={`${post.title} | Jewel in Christ Foundation`} description={post.excerpt} path={`/stories/${post.slug}`} />

      <article>
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 flex items-end">
            <div className="container pb-12">
              <Link to="/stories" className="inline-flex items-center gap-2 text-sm text-primary mb-5 hover:text-accent transition-smooth">
                <ArrowLeft className="h-4 w-4" /> All stories
              </Link>
              <div className="inline-block px-3 py-1.5 rounded-full bg-accent text-primary text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">{post.tag}</div>
              <h1 className="font-display text-4xl md:text-6xl text-primary max-w-3xl mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4 text-accent" /> {post.date}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-accent" /> {post.readMinutes} min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-16 max-w-3xl">
          <div className="prose-content space-y-6 text-lg leading-relaxed text-foreground/90">
            {post.content.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-none" : ""}>{p}</p>
            ))}
          </div>

          {/* Inline donation CTA */}
          <div className="mt-14 rounded-3xl gradient-royal text-primary-foreground p-10 shadow-elegant text-center">
            <Heart className="h-10 w-10 mx-auto mb-4 text-primary-foreground" />
            <h3 className="font-display text-3xl mb-3">Be the next chapter in someone's story.</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">Every gift, no matter the size, becomes food, training, or a future for a woman who has been overlooked for far too long.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild variant="hero" size="lg">
                <a href={buildMailto(`Donation Inquiry — inspired by '${post.title}'`)} target="_blank" rel="noopener noreferrer"><Heart className="h-4 w-4" /> Donate Now</a>
              </Button>
              <Button asChild variant="outlineGold" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href={buildMailto(`Share my story idea: ${post.title}`)} target="_blank" rel="noopener noreferrer"><Share2 className="h-4 w-4" /> Share Our Mission</a>
              </Button>
            </div>
          </div>

          {more.length > 0 && (
            <div className="mt-16">
              <h3 className="font-display text-2xl text-primary mb-6">Continue reading</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {more.map((m) => (
                  <Link key={m.slug} to={`/stories/${m.slug}`} className="group block rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elegant transition-smooth">
                    <div className="h-44 overflow-hidden">
                      <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">{m.tag}</p>
                      <h4 className="font-display text-lg text-primary group-hover:text-accent transition-smooth">{m.title}</h4>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read story <ArrowRight className="h-3.5 w-3.5" /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </SiteLayout>
  );
};

export default BlogPostPage;
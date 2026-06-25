import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";
import { buildMailto } from "@/lib/contact";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-20 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Logo" className="h-14 w-14 object-contain rounded-2xl bg-white/90 p-1 shadow-card" width={56} height={56} loading="lazy" decoding="async" />
            <div>
              <div className="font-display text-2xl font-extrabold tracking-tight">Jewel in Christ</div>
              <div className="text-[11px] font-bold tracking-[0.3em] text-primary-foreground/95 uppercase">Foundation</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/90 leading-relaxed mb-5">
            Empowering women, transforming families, and building thriving communities through faith, skills, and advocacy.
          </p>
          <div className="flex gap-2">
            <a href="https://www.facebook.com/share/17Q7pPSwRC/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-9 w-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-background transition-smooth">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/judith-agu-60649b57?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-9 w-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-background transition-smooth">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-xs italic text-primary-foreground/80 border-l-2 border-accent pl-3">
            "Service rooted in compassion leaves a legacy that outlives generations."
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-accent">
            Empowering People · Strengthening Families · Transforming Communities
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary-foreground mb-5">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/90">
            {[
              { l: "Home", to: "/" },
              { l: "About Us", to: "/#about" },
              { l: "Team", to: "/team" },
              { l: "Programs", to: "/programs" },
              { l: "Events", to: "/events" },
              { l: "Gallery", to: "/gallery" },
              { l: "Stories", to: "/stories" },
              { l: "Contact", to: "/contact" },
            ].map((x) => (
              <li key={x.l}><Link to={x.to} className="hover:text-primary-foreground transition-smooth">{x.l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary-foreground mb-5">Programs</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/90">
            {["Vocational Training", "Entrepreneurship", "Economic Empowerment", "Support & Advocacy", "Community Outreach"].map((x) => (
              <li key={x}><Link to="/programs" className="hover:text-primary-foreground transition-smooth">{x}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary-foreground mb-5">Stay Connected</h4>
          <div className="space-y-3 text-sm text-primary-foreground/90 mb-5">
            <a href="mailto:info.jewelsfoundation@gmail.com" className="flex items-start gap-2 hover:text-primary-foreground transition-smooth">
              <Mail className="h-4 w-4 text-primary-foreground/80 mt-0.5" /> info.jewelsfoundation@gmail.com
            </a>
            <a href="tel:+2348036430902" className="flex items-center gap-2 hover:text-primary-foreground transition-smooth">
              <Phone className="h-4 w-4 text-primary-foreground/80" /> +234 803 643 0902
            </a>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary-foreground/80" /> Abeokuta, Nigeria</div>
          </div>
          <p className="text-xs text-primary-foreground/85 mb-2">Subscribe to our newsletter</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value;
              window.location.href = buildMailto("Newsletter Signup", `Please add this email to your newsletter: ${email}`);
            }}
            className="flex gap-2"
          >
            <Input name="email" placeholder="Your email" className="h-10 bg-primary-foreground/10 border-accent/20 text-primary-foreground placeholder:text-primary-foreground/80 rounded-lg" />
            <Button type="submit" variant="hero" size="sm">Join</Button>
          </form>
        </div>
      </div>

      <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/85">
        <p>© 2026 Jewel in Christ Foundation. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-primary-foreground transition-smooth">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary-foreground transition-smooth">Terms of Use</Link>
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-shimmer" /> Donations Secured</span>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;

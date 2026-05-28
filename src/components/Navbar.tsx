import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";

const menu = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/#about" },
  { label: "Team", to: "/team" },
  { label: "Programs", to: "/programs" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/#blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-smooth ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-background"
      }`}
    >
      <nav className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-14 w-14 rounded-xl gradient-royal p-1.5 shadow-elegant ring-2 ring-accent/40 group-hover:scale-105 transition-smooth">
            <img src={logo} alt="Jewel in Christ Foundation logo" className="h-full w-full object-contain rounded-md" width={56} height={56} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-2xl font-bold text-primary">Jewel in Christ</div>
            <div className="text-[11px] font-semibold tracking-[0.3em] text-accent uppercase">Foundation</div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {menu.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="hero" size="lg">
            <a href={buildMailto("Donation Inquiry — Jewel in Christ Foundation")} target="_blank" rel="noopener noreferrer"><Heart className="h-4 w-4" /> Donate</a>
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-primary" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in-up">
          <div className="container py-4 flex flex-col gap-1">
            {menu.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 px-3 rounded-md hover:bg-secondary text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <a href={buildMailto("Donation Inquiry — Jewel in Christ Foundation")} target="_blank" rel="noopener noreferrer">Donate Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;

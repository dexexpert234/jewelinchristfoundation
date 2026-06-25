import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";

const menu = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/#about" },
  { label: "About the Founder", to: "/founder" },
  { label: "Team", to: "/team" },
  { label: "Programs", to: "/programs" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Stories", to: "/stories" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const isActive = (to: string) => {
    if (to === "/") return pathname === "/" && !hash;
    if (to.startsWith("/#")) return pathname === "/" && hash === to.slice(1);
    return pathname === to || pathname.startsWith(to + "/");
  };

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
      <nav className="container flex items-center justify-between h-24 md:h-28 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Jewel in Christ Foundation logo" className="h-14 w-14 md:h-16 md:w-16 object-contain rounded-2xl bg-white/60 p-1 ring-1 ring-border shadow-card group-hover:scale-105 transition-smooth" width={64} height={64} loading="eager" decoding="async" />
          <div className="leading-tight">
            <div className="font-display text-2xl md:text-3xl font-extrabold text-primary tracking-tight">Jewel in Christ</div>
            <div className="text-[11px] md:text-xs font-bold tracking-[0.35em] text-accent uppercase">Foundation</div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {menu.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-smooth ${
                  isActive(item.to) ? "text-primary" : "text-foreground hover:text-primary"
                } after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-1 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-primary after:to-primary-light after:transition-all after:duration-300 ${
                  isActive(item.to) ? "after:opacity-100 after:scale-x-100" : "after:opacity-0 after:scale-x-0 hover:after:opacity-100 hover:after:scale-x-100"
                } after:origin-left`}
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
        <div className="lg:hidden bg-card/95 backdrop-blur-md border-t border-border animate-fade-in-up">
          <div className="container py-4 flex flex-col gap-1">
            {menu.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`py-3 px-3 rounded-md text-sm font-medium transition-smooth ${
                  isActive(item.to) ? "bg-secondary text-primary" : "hover:bg-secondary"
                }`}
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

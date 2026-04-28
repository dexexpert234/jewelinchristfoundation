import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const menu = [
  { label: "Home", href: "#home" },
  {
    label: "About Us",
    href: "#about",
    children: [
      { label: "Our Story", href: "#about" },
      { label: "Vision & Mission", href: "#about" },
      { label: "Leadership", href: "#about" },
    ],
  },
  {
    label: "Programs",
    href: "#programs",
    children: [
      { label: "Community Outreach", href: "#programs" },
      { label: "Youth Empowerment", href: "#programs" },
      { label: "Women Support", href: "#programs" },
    ],
  },
  {
    label: "Events",
    href: "#events",
    children: [
      { label: "Upcoming Events", href: "#events" },
      { label: "Past Events", href: "#events" },
    ],
  },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
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
        <a href="#home" className="flex items-center gap-3 group">
          <img src={logo} alt="Jewel in Christ Foundation logo" className="h-12 w-12 object-contain" width={48} height={48} />
          <div className="leading-tight">
            <div className="font-display text-xl font-semibold text-primary">Jewel in Christ</div>
            <div className="text-[10px] tracking-[0.25em] text-accent uppercase">Foundation</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {menu.map((item) => (
            <li key={item.label} className="relative group">
              <a
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
              {item.children && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
                  <div className="min-w-[220px] bg-card rounded-xl shadow-elegant border border-border overflow-hidden">
                    {item.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className="block px-5 py-3 text-sm hover:bg-secondary hover:text-primary transition-smooth border-l-2 border-transparent hover:border-accent"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="hero" size="lg">
            <a href="#donate"><Heart className="h-4 w-4" /> Donate</a>
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
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 px-3 rounded-md hover:bg-secondary text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <a href="#donate">Donate Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;

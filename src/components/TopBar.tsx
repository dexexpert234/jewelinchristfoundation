import { Mail, Phone } from "lucide-react";

const TopBar = () => {
  const items = [
    "Welcome to Jewel in Christ Foundation",
    "Empowering Women. Transforming Communities.",
    "info.jewelsfoundation@gmail.com",
    "+234 803 643 0902",
  ];
  return (
    <div className="gradient-royal text-primary-foreground overflow-hidden border-b border-accent/20">
      <div className="flex items-center h-9 text-xs">
        <div className="hidden md:flex items-center gap-6 px-6 shrink-0 border-r border-accent/20 h-full">
          <a href="mailto:info.jewelsfoundation@gmail.com" className="flex items-center gap-2 hover:text-accent transition-smooth">
            <Mail className="h-3.5 w-3.5 text-accent" /> info.jewelsfoundation@gmail.com
          </a>
          <a href="tel:+2348036430902" className="flex items-center gap-2 hover:text-accent transition-smooth">
            <Phone className="h-3.5 w-3.5 text-accent" /> +234 803 643 0902
          </a>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...items, ...items, ...items].map((t, i) => (
              <span key={i} className="mx-8 opacity-90">✦ {t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;

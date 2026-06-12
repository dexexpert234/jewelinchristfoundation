import { Calendar, Clock, MapPin, Heart, BookOpen, Users } from "lucide-react";

const activities = [
  "Prayer Meeting",
  "Counseling",
  "Resolution of Marital Conflicts",
  "Sharing Experiences",
  "Couples Luncheon (Annual)",
  "Single & Married Program (Bi-annual)",
];

const whatWeDo = [
  "We pray together",
  "We study and share the Word of God",
  "We share practical experiences on life issues",
  "We are there for each other",
  "We intercede for our husbands, children and society",
  "We engage in acts of charity",
  "We read life-transforming books and share knowledge",
  "We mentor and we teach",
  "We preach the Word by our lifestyle",
];

const WomensMinistry = () => (
  <section id="womens-ministry" className="py-24 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14 reveal">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">A Women's Ministry</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
          Jewels in <em className="text-gradient-royal not-italic font-semibold">Christ</em>
        </h2>
        <p className="text-muted-foreground">A sisterhood of married women, growing together in faith, purpose and service.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="p-8 rounded-3xl bg-card border border-border shadow-card reveal">
          <div className="h-12 w-12 rounded-2xl gradient-royal flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="font-display text-2xl text-primary mb-2">Our Vision</h3>
          <p className="text-muted-foreground">To build godly, happy and fulfilled homes.</p>
        </div>
        <div className="p-8 rounded-3xl gradient-royal text-primary-foreground shadow-elegant reveal">
          <div className="h-12 w-12 rounded-2xl bg-accent flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-display text-2xl mb-2">Our Mission</h3>
          <p className="text-primary-foreground/90">To assist women build better homes and fulfil their purpose in life.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <div className="p-6 rounded-2xl bg-secondary flex items-start gap-3 reveal">
          <Calendar className="h-5 w-5 text-accent mt-0.5 shrink-0" />
          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-1">Meeting Day</p>
            <p className="text-primary font-medium">2nd Saturday of every month</p>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-secondary flex items-start gap-3 reveal">
          <Clock className="h-5 w-5 text-accent mt-0.5 shrink-0" />
          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-1">Meeting Time</p>
            <p className="text-primary font-medium">10:00 AM</p>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-secondary flex items-start gap-3 reveal">
          <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-1">Venue</p>
            <p className="text-primary font-medium">Club House, Ogun-Osun River Basin Development Authority</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl bg-card border border-border shadow-card reveal">
          <h4 className="font-display text-xl text-primary mb-4">Our Activities</h4>
          <ul className="space-y-2 text-muted-foreground">
            {activities.map((a) => <li key={a} className="flex gap-2"><span className="text-accent">✦</span>{a}</li>)}
          </ul>
        </div>
        <div className="p-8 rounded-3xl bg-card border border-border shadow-card reveal">
          <h4 className="font-display text-xl text-primary mb-4">What We Do</h4>
          <ul className="space-y-2 text-muted-foreground">
            {whatWeDo.map((a) => <li key={a} className="flex gap-2"><span className="text-accent">✦</span>{a}</li>)}
          </ul>
        </div>
      </div>

      <div className="mt-10 p-6 rounded-2xl bg-secondary flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 reveal">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-accent" />
          <p className="text-primary"><span className="font-semibold">Membership:</span> For married women only · <span className="font-semibold">Convener:</span> Lady Judith Ngozi Agu</p>
        </div>
        <a href="tel:+2348033203635" className="text-accent font-semibold hover:underline">Enquiries: 0803 320 3635</a>
      </div>
    </div>
  </section>
);

export default WomensMinistry;
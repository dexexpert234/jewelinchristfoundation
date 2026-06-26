import { useState } from "react";
import { Heart, Lock, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buildMailto } from "@/lib/contact";

const presets = [
  { amount: 25, impact: "Provides training materials for 1 woman" },
  { amount: 75, impact: "Sponsors a week of vocational training" },
  { amount: 150, impact: "Funds startup tools for a micro-business" },
  { amount: 500, impact: "Empowers an entire training cohort" },
];

const Donate = () => {
  const [recurring, setRecurring] = useState(false);
  const [amount, setAmount] = useState<number>(75);
  const [custom, setCustom] = useState("");

  const selected = custom ? Number(custom) : amount;
  const impact = presets.find((p) => p.amount === amount)?.impact ?? "Your gift creates lasting change.";

  return (
    <section id="donate" className="py-28 gradient-soft">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Make a Difference</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Your Gift, Her <em className="text-gradient-royal not-italic font-semibold">Future</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every donation directly funds skills training, micro-grants, and advocacy for women rebuilding their lives. 100% transparent. 100% impact.
            </p>
            <div className="mb-8 p-5 rounded-2xl bg-card border-l-4 border-accent shadow-card">
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                Every donation creates an opportunity. A small act of generosity can become someone's beginning — just as a simple ₦3,000 act of kindness inspired the birth of this foundation. Together we can continue creating opportunities that empower people, strengthen families, and transform communities.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: ShieldCheck, t: "Secure & encrypted", d: "Bank-grade SSL on every transaction" },
                { icon: Lock, t: "Privacy first", d: "Your data stays yours — never shared" },
                { icon: Sparkles, t: "Tax-deductible", d: "Receive a receipt instantly via email" },
              ].map((x) => (
                <div key={x.t} className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border">
                  <div className="h-10 w-10 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                    <x.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">{x.t}</div>
                    <div className="text-xs text-muted-foreground">{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-card rounded-3xl shadow-elegant border border-border p-8 md:p-10">
            <div className="flex p-1 bg-secondary rounded-full mb-8">
              <button onClick={() => setRecurring(false)} className={`flex-1 py-3 rounded-full text-sm font-semibold transition-smooth ${!recurring ? "bg-card text-primary shadow-card" : "text-muted-foreground"}`}>One-Time Gift</button>
              <button onClick={() => setRecurring(true)} className={`flex-1 py-3 rounded-full text-sm font-semibold transition-smooth ${recurring ? "bg-card text-primary shadow-card" : "text-muted-foreground"}`}>Monthly Giving</button>
            </div>

            <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3 block">Choose an amount (USD)</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {presets.map((p) => (
                <button
                  key={p.amount}
                  onClick={() => { setAmount(p.amount); setCustom(""); }}
                  className={`relative py-5 rounded-2xl border-2 font-display text-2xl transition-smooth ${
                    !custom && amount === p.amount
                      ? "border-accent bg-accent/10 text-primary shadow-gold"
                      : "border-border bg-secondary/50 hover:border-accent/50 text-primary"
                  }`}
                >
                  ${p.amount}
                </button>
              ))}
            </div>

            <div className="relative mb-6">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-primary font-display text-xl">$</span>
              <Input
                type="number"
                placeholder="Other amount"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                className="h-14 pl-10 text-lg border-2 rounded-2xl"
              />
            </div>

            <div className="p-5 rounded-2xl gradient-royal text-primary-foreground mb-6">
              <div className="text-primary-foreground/80 text-xs uppercase tracking-[0.3em] mb-1">Your Impact</div>
              <div className="text-sm">{impact} {recurring && "— every month."}</div>
            </div>

            <Button asChild variant="hero" size="lg" className="w-full h-14 text-base">
              <a
                href={buildMailto(
                  `Donation: $${selected || 0}${recurring ? "/month" : ""}`,
                  `Hello Jewel in Christ Foundation,\n\nI'd like to make a ${recurring ? "monthly" : "one-time"} donation of $${selected || 0}.\n\nPlease send me the next steps.\n\nThank you.`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="h-5 w-5" /> Donate ${selected || 0} {recurring ? "/month" : "Today"}
              </a>
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
              <Lock className="h-3 w-3" /> Secured by industry-standard encryption
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Donate;

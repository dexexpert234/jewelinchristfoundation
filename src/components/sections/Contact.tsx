import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const WEB3FORMS_ACCESS_KEY = "e91aff43-a55e-4843-bf29-e66ea665d09e";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.subject.trim() || !form.message.trim()) {
      toast({ title: "Please complete all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: `Website Inquiry: ${form.subject}`,
          message: `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\n${form.message}\n\nSubmitted: ${new Date().toLocaleString()}\nSource: ${window.location.href}`,
          replyto: form.email,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Thank you for contacting Barrister Judith", description: "Your inquiry has been received successfully. We will respond as soon as possible." });
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Let's <em className="text-gradient-royal not-italic font-semibold">Connect</em></h2>
          <p className="text-muted-foreground">Have questions, partnership ideas, or want to volunteer? We'd love to hear from you.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="gradient-royal text-primary-foreground p-8 rounded-3xl shadow-elegant">
              <h3 className="font-display text-2xl text-primary-foreground mb-2">Nkechi Ahurah</h3>
              <p className="text-primary-foreground/80 text-sm mb-6">Programs Director</p>
              <div className="space-y-4 text-sm">
                <a href="mailto:info.jewelsfoundation@gmail.com" className="flex items-start gap-3 hover:text-primary-foreground transition-smooth">
                  <Mail className="h-5 w-5 text-primary-foreground/80 shrink-0 mt-0.5" />
                  <span>info.jewelsfoundation@gmail.com</span>
                </a>
                <a href="tel:+2348036430902" className="flex items-start gap-3 hover:text-primary-foreground transition-smooth">
                  <Phone className="h-5 w-5 text-primary-foreground/80 shrink-0 mt-0.5" />
                  <span>+234 803 643 0902</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-foreground/80 shrink-0 mt-0.5" />
                  <span>Abuja, Nigeria</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card border border-border h-64">
              <iframe
                title="Jewel in Christ Foundation location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=7.40%2C9.00%2C7.60%2C9.15&layer=mapnik&marker=9.0765%2C7.3986"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-3 bg-card rounded-3xl shadow-elegant border border-border p-8 md:p-10 space-y-5">
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 block">Your Name</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="h-12 rounded-xl border-2" placeholder="Jane Doe" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 block">Email Address</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} className="h-12 rounded-xl border-2" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 block">Phone Number</label>
                <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={30} className="h-12 rounded-xl border-2" placeholder="+234 800 000 0000" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 block">Subject</label>
              <Input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} maxLength={150} className="h-12 rounded-xl border-2" placeholder="How can we help?" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 block">Message</label>
              <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} rows={6} className="rounded-xl border-2" placeholder="How can we help?" />
            </div>
            <Button type="submit" variant="royal" size="lg" className="w-full h-14" disabled={sending}>
              <Send className="h-4 w-4" /> {sending ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;

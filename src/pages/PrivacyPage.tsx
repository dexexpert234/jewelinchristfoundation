import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="font-display text-2xl text-primary mb-3">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </section>
);

const PrivacyPage = () => (
  <SiteLayout>
    <Seo
      title="Privacy Policy | Jewel in Christ Foundation"
      description="How Jewel in Christ Foundation collects, uses, and protects personal information of donors, volunteers, partners, beneficiaries, and visitors."
      path="/privacy"
    />
    <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last Updated: June 2026" />
    <div className="container max-w-3xl py-16">
      <p className="text-muted-foreground leading-relaxed mb-10">
        Jewel in Christ Foundation ("we," "our," or "us") is committed to protecting the privacy of our donors,
        volunteers, partners, beneficiaries, and website visitors. This Privacy Policy explains how we collect,
        use, store, and protect your personal information when you visit our website or engage with our programs
        and services.
      </p>

      <Section title="Information We Collect">
        <p>We may collect personal information including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Full name</li><li>Email address</li><li>Phone number</li><li>Postal address</li>
          <li>Donation information</li><li>Volunteer application details</li>
          <li>Information submitted through contact forms</li><li>Newsletter subscription details</li>
          <li>Any other information you voluntarily provide</li>
        </ul>
        <p>We may also collect non-personal information such as browser type, device information, IP address, and website usage statistics.</p>
      </Section>

      <Section title="How We Use Your Information">
        <ul className="list-disc pl-6 space-y-1">
          <li>Respond to inquiries and requests</li>
          <li>Process donations</li>
          <li>Manage volunteer applications</li>
          <li>Send newsletters and organizational updates</li>
          <li>Improve our programs and website services</li>
          <li>Maintain records for administrative and legal purposes</li>
          <li>Communicate with donors, supporters, and beneficiaries</li>
        </ul>
      </Section>

      <Section title="Donation Information">
        <p>Donations made through our website may be processed by trusted third-party payment providers. We do not store sensitive payment card information on our servers.</p>
      </Section>

      <Section title="Information Sharing">
        <p>We do not sell, rent, or trade personal information. We may share information with trusted service providers who assist us in operating our website and delivering our services, provided they maintain appropriate confidentiality and security measures.</p>
        <p>We may also disclose information when required by law or to protect our legal rights.</p>
      </Section>

      <Section title="Data Security">
        <p>We implement reasonable administrative, technical, and physical safeguards to protect personal information from unauthorized access, disclosure, alteration, or destruction.</p>
        <p>While we strive to protect your information, no method of electronic transmission or storage is completely secure.</p>
      </Section>

      <Section title="Cookies and Analytics">
        <p>Our website may use cookies and similar technologies to improve user experience, analyze website traffic, and enhance website functionality. Users may disable cookies through their browser settings, although some website features may not function properly.</p>
      </Section>

      <Section title="Your Rights">
        <ul className="list-disc pl-6 space-y-1">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Update your information</li>
          <li>Withdraw consent for communications</li>
          <li>Request deletion of personal information where legally permissible</li>
        </ul>
      </Section>

      <Section title="Third-Party Links">
        <p>Our website may contain links to external websites. We are not responsible for the privacy practices of third-party websites.</p>
      </Section>

      <Section title="Children's Privacy">
        <p>Our website is not intended to collect personal information from children without appropriate parental or guardian consent.</p>
      </Section>

      <Section title="Changes to This Policy">
        <p>We reserve the right to update this Privacy Policy at any time. Updates will be posted on this page with a revised effective date.</p>
      </Section>

      <Section title="Contact Us">
        <p>Jewel in Christ Foundation<br/>Abeokuta, Ogun State, Nigeria<br/>Email: info.jewelsfoundation@gmail.com<br/>Phone: +234 803 643 0902</p>
      </Section>
    </div>
  </SiteLayout>
);

export default PrivacyPage;
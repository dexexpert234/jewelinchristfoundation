import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="font-display text-2xl text-primary mb-3">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </section>
);

const TermsPage = () => (
  <SiteLayout>
    <Seo
      title="Terms of Use | Jewel in Christ Foundation"
      description="The terms governing the use of the Jewel in Christ Foundation website, donations, intellectual property, volunteer submissions, and liability."
      path="/terms"
    />
    <PageHero eyebrow="Legal" title="Terms of Use" subtitle="Last Updated: June 2026" />
    <div className="container max-w-3xl py-16">
      <p className="text-muted-foreground leading-relaxed mb-10">
        Welcome to the Jewel in Christ Foundation website. By accessing or using this website, you agree to comply with and be bound by these Terms of Use.
      </p>

      <Section title="Acceptance of Terms">
        <p>By using this website, you acknowledge that you have read, understood, and agreed to these Terms of Use.</p>
      </Section>

      <Section title="About the Organization">
        <p>Jewel in Christ Foundation is a nonprofit organization dedicated to serving communities through charitable, educational, humanitarian, and faith-inspired initiatives.</p>
      </Section>

      <Section title="Website Use">
        <p>You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the website.</p>
        <p>You must not:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Engage in fraudulent activities</li>
          <li>Upload harmful or malicious content</li>
          <li>Attempt unauthorized access to website systems</li>
          <li>Interfere with website functionality</li>
        </ul>
      </Section>

      <Section title="Donations">
        <p>All donations made to Jewel in Christ Foundation are voluntary and support the organization's mission and programs.</p>
        <p>Donors are encouraged to verify donation details before completing transactions.</p>
        <p>Unless otherwise required by applicable law, donations may not be refundable once processed.</p>
      </Section>

      <Section title="Intellectual Property">
        <p>All content on this website, including text, graphics, logos, images, documents, and multimedia materials, is the property of Jewel in Christ Foundation or its licensors and is protected by applicable intellectual property laws.</p>
        <p>Content may not be copied, reproduced, distributed, or modified without prior written permission.</p>
      </Section>

      <Section title="Volunteer Applications and Submissions">
        <p>Information submitted through volunteer forms, applications, contact forms, or other communication channels must be accurate and truthful.</p>
        <p>Submission of an application does not guarantee acceptance into any program or volunteer opportunity.</p>
      </Section>

      <Section title="Disclaimer">
        <p>The information provided on this website is for general informational purposes only.</p>
        <p>While we strive to ensure accuracy, Jewel in Christ Foundation makes no guarantees regarding the completeness, accuracy, or reliability of website content.</p>
      </Section>

      <Section title="Limitation of Liability">
        <p>To the fullest extent permitted by law, Jewel in Christ Foundation shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of this website.</p>
      </Section>

      <Section title="Third-Party Links">
        <p>This website may contain links to external websites. We do not control or endorse third-party content and are not responsible for their practices or policies.</p>
      </Section>

      <Section title="Changes to Terms">
        <p>We reserve the right to modify these Terms of Use at any time. Continued use of the website following any updates constitutes acceptance of the revised terms.</p>
      </Section>

      <Section title="Governing Law">
        <p>These Terms of Use shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria.</p>
      </Section>

      <Section title="Contact Information">
        <p>Jewel in Christ Foundation<br/>Abeokuta, Ogun State, Nigeria<br/>Email: info.jewelsfoundation@gmail.com<br/>Phone: +234 803 643 0902</p>
      </Section>
    </div>
  </SiteLayout>
);

export default TermsPage;
import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Donate from "@/components/sections/Donate";

const DonatePage = () => (
  <SiteLayout>
    <Seo title="Donate | Jewel in Christ Foundation" description="Fund skills training, micro-grants, and advocacy that help women rebuild their lives. Give securely today." path="/donate" />
    <PageHero eyebrow="Make a Difference" title="Donate" subtitle="Your generosity funds skills training, micro-grants, and advocacy for women rebuilding their lives." />
    <Donate />
  </SiteLayout>
);
export default DonatePage;
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import Donate from "@/components/sections/Donate";

const DonatePage = () => (
  <SiteLayout>
    <PageHero eyebrow="Make a Difference" title="Donate" subtitle="Your generosity funds skills training, micro-grants, and advocacy for women rebuilding their lives." />
    <Donate />
  </SiteLayout>
);
export default DonatePage;
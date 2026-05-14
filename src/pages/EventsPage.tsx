import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Events from "@/components/sections/Events";

const EventsPage = () => (
  <SiteLayout>
    <Seo title="Upcoming Events | Jewel in Christ Foundation" description="Join us at upcoming events to serve, learn, and connect with our community of changemakers." path="/events" />
    <PageHero eyebrow="What's Next" title="Upcoming Events" subtitle="Join us in shaping change. Every event is an opportunity to serve, learn, and connect." />
    <Events />
  </SiteLayout>
);
export default EventsPage;
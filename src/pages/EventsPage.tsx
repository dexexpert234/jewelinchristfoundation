import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import Events from "@/components/sections/Events";

const EventsPage = () => (
  <SiteLayout>
    <PageHero eyebrow="What's Next" title="Upcoming Events" subtitle="Join us in shaping change. Every event is an opportunity to serve, learn, and connect." />
    <Events />
  </SiteLayout>
);
export default EventsPage;
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Events from "@/components/sections/Events";
import Donate from "@/components/sections/Donate";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Navbar />
    <main>
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Events />
      <Donate />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;

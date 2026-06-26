import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ProgramsPage from "./pages/ProgramsPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import TestimonialsPage from "./pages/TestimonialsPage.tsx";
import TeamPage from "./pages/TeamPage.tsx";
import BlogPostPage from "./pages/BlogPostPage.tsx";
import ProgramDetailPage from "./pages/ProgramDetailPage.tsx";
import PrivacyPage from "./pages/PrivacyPage.tsx";
import TermsPage from "./pages/TermsPage.tsx";
import FounderPage from "./pages/FounderPage.tsx";
import OurStoryPage from "./pages/OurStoryPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import Preloader from "./components/Preloader";
import PageTransition from "./components/PageTransition";

const queryClient = new QueryClient();

const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);
  return null;
};

const App = () => {
  const [loaded, setLoaded] = useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem("jicf:preloaded") === "1";
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!loaded && (
          <Preloader
            onDone={() => {
              sessionStorage.setItem("jicf:preloaded", "1");
              setLoaded(true);
            }}
          />
        )}
        <BrowserRouter>
          <ScrollManager />
          <PageTransition>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/programs/:slug" element={<ProgramDetailPage />} />
              <Route path="/events" element={<Navigate to="/programs#events" replace />} />
              <Route path="/donate" element={<Navigate to="/programs#donate" replace />} />
              <Route path="/stories" element={<Navigate to="/programs#stories" replace />} />
              <Route path="/volunteer" element={<Navigate to="/programs#volunteer" replace />} />
              <Route path="/publications" element={<Navigate to="/programs#publications" replace />} />
              <Route path="/leadership-legacy" element={<Navigate to="/founder" replace />} />
              <Route path="/why-we-exist" element={<Navigate to="/our-story" replace />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/stories/:slug" element={<BlogPostPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/founder" element={<FounderPage />} />
              <Route path="/our-story" element={<OurStoryPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

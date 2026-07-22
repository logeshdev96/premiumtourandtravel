import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import GlobeSection from "@/components/GlobeSection";
import ToursSection from "@/components/ToursSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <GlobeSection />
      <ToursSection />
      <Footer />
    </main>
  );
}

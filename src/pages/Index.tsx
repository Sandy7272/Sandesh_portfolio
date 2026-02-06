import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectGrid } from "@/components/home/ProjectGrid";

const Index = () => {
  return (
    <PageTransition>
      <Navigation />
      <main>
        <HeroSection />
        <ProjectGrid />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Index;

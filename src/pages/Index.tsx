import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { ProjectGrid } from "@/components/home/ProjectGrid";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <PageTransition>
      <Navigation />
      <main>
        <HeroSection />
        <ClientsSection />
        <ImpactSection />
        <ProjectGrid />
        <ExpertiseSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Index;

import { CustomCursor } from "./components/CustomCursor";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { Clients } from "./components/Clients";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { ImpactBar } from "./components/ImpactBar";
import { Projects } from "./components/Projects";
import { Strengths } from "./components/Strengths";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Tools } from "./components/Tools";
import { Research } from "./components/Research";
import { Testimonials } from "./components/Testimonials";
import { YouTube } from "./components/YouTube";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <CustomCursor />
      <Nav />
      <main id="main-content">
        <Hero />
        <Ticker />
        <Clients />
        <About />
        <Experience />
        <ImpactBar />
        <Projects />
        <Strengths />
        <Services />
        <Skills />
        <Tools />
        <Research />
        <Testimonials />
        <YouTube />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

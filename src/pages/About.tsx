import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

const skills = [
  {
    category: "AI & Automation",
    items: ["Machine Learning Pipelines", "Computer Vision", "LLM Integration", "Workflow Automation", "Neural Radiance Fields"]
  },
  {
    category: "3D & Motion",
    items: ["Unreal Engine 5", "Blender", "Cinema 4D", "After Effects", "Houdini"]
  },
  {
    category: "Development",
    items: ["Python", "TypeScript", "React", "Three.js", "WebGL"]
  },
  {
    category: "Project Execution",
    items: ["Technical Direction", "Team Leadership", "Client Relations", "Agile Workflows", "Enterprise Delivery"]
  }
];

const About = () => {
  return (
    <PageTransition>
      <Navigation />
      <main className="pt-32">
        {/* Hero */}
        <section className="px-6 lg:px-12 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                    alt="Sandeesh Gadakh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center glow"
                >
                  <span className="text-primary-foreground text-center text-sm font-medium leading-tight">
                    8+ Years<br />Experience
                  </span>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-sm uppercase tracking-widest text-primary">
                  About Me
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
                  Building the future<br />of visual technology
                </h1>
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg">
                    I'm a Senior Creative Technologist specializing in the intersection of artificial intelligence, 3D visualization, and immersive experiences.
                  </p>
                  <p>
                    With over 8 years of experience, I've led teams and delivered enterprise-scale projects that push the boundaries of what's possible with modern technology. My work spans from AI-powered video-to-3D pipelines to photorealistic architectural visualizations.
                  </p>
                  <p>
                    I believe in the power of visual storytelling combined with cutting-edge technology to create experiences that inform, inspire, and transform how businesses communicate.
                  </p>
                </div>

                <motion.a
                  href="#"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
                >
                  <Download size={18} />
                  <span className="font-medium">Download Resume</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="px-6 lg:px-12 py-24 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sm uppercase tracking-widest text-primary">
                Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Skills & Technologies
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-background rounded-lg shadow-card"
                >
                  <h3 className="font-semibold mb-4 text-lg">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-12 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's create something amazing together
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always interested in hearing about new projects, collaborations, and opportunities to push creative boundaries.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default About;

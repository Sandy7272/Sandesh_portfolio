import { motion } from "framer-motion";
import { ArrowRight, Award, Calendar, MapPin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { experience, education, awards, skills } from "@/data/projects";

const About = () => {
  const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "154", label: "3D Products Shipped" },
    { value: "3x", label: "Best Employee Award" },
    { value: "3-4", label: "Models/Day" },
  ];

  const timeline = [
    ...education.map((edu) => ({
      year: edu.year,
      title: edu.degree,
      subtitle: edu.institution,
      description: edu.description,
      type: "education" as const,
    })),
    ...experience.map((exp) => ({
      year: exp.period.split(" - ")[0],
      title: exp.role,
      subtitle: exp.company,
      description: exp.description,
      type: "work" as const,
    })),
  ].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <PageTransition>
      <Navigation />
      <main className="pt-24">
        {/* Hero */}
        <section className="px-6 lg:px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                    alt="Sandesh Gadakh"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-mesh rounded-3xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-sm uppercase tracking-[0.2em] text-primary mb-4 block">
                  About Me
                </span>
                <h1 className="text-display-lg font-bold mb-6">
                  Sandesh "Sandy" Gadakh
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Senior VFX & motion designer focused on turning video into immersive 3D experiences, 
                  production-ready walkthroughs, and cinematic motion graphics for product marketing 
                  and interactive VR/AR.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Currently leading video-to-3D research and production at MetaShop AI, where I've 
                  shipped 154+ product models, built hotel walkthroughs for Kesari Weddings, and 
                  scaled a cloud processing pipeline that handles 3-4 models daily.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-gradient-primary text-primary-foreground">
                    <Link to="/contact">
                      Let's Work Together
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="glass">
                    <a 
                      href="https://youtube.com/@SandeshGadakh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Youtube className="w-4 h-4 mr-2" />
                      YouTube Channel
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 lg:px-12 py-16 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-background rounded-2xl shadow-card"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-6 lg:px-12 py-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-primary mb-3 block">
                Journey
              </span>
              <h2 className="text-display-md font-bold">Career Timeline</h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[15px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-primary/20" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10">
                    {item.type === "education" ? (
                      <Calendar className="w-3 h-3 text-primary" />
                    ) : (
                      <MapPin className="w-3 h-3 text-primary" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-primary text-sm mb-2">{item.subtitle}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Overview */}
        <section className="px-6 lg:px-12 py-24 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-primary mb-3 block">
                Expertise
              </span>
              <h2 className="text-display-md font-bold">What I Do</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎬",
                  title: "VFX & Motion Graphics",
                  description: "Cinematic visual effects, motion graphics, and compositing for brand campaigns and educational content."
                },
                {
                  icon: "🎮",
                  title: "Video-to-3D Conversion",
                  description: "Pioneering NeRF-based pipelines that transform video footage into production-ready 3D assets."
                },
                {
                  icon: "🏨",
                  title: "3D Walkthroughs",
                  description: "Interactive 3D experiences for real estate, hospitality, and e-commerce visualization."
                }
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-background rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="px-6 lg:px-12 py-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-primary mb-3 block">
                Recognition
              </span>
              <h2 className="text-display-md font-bold">Awards</h2>
            </motion.div>

            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 p-6 bg-secondary/50 rounded-2xl"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{award.title}</h3>
                  <p className="text-primary text-sm mb-2">{award.organization} • {award.year}</p>
                  <p className="text-muted-foreground">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-12 py-24 bg-gradient-mesh">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display-md font-bold mb-6">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you need VFX, motion graphics, or video-to-3D conversion, 
                I'm here to bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground px-8">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="glass px-8">
                  <Link to="/resume">View Resume</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default About;

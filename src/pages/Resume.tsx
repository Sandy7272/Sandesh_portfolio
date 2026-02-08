import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, Globe, Award, Briefcase, GraduationCap } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { experience, education, awards, skills } from "@/data/projects";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <PageTransition>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header with download button */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 no-print">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm uppercase tracking-[0.2em] text-primary mb-2 block"
              >
                Resume
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-display-md font-bold"
              >
                Curriculum Vitae
              </motion.h1>
            </div>
            <Button
              onClick={handlePrint}
              className="bg-gradient-primary text-primary-foreground"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>

          {/* Resume Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl shadow-elevated p-8 md:p-12"
          >
            {/* Personal Header */}
            <header className="border-b border-border pb-8 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Sandesh "Sandy" Gadakh
              </h1>
              <p className="text-lg text-primary font-medium mb-4">
                VFX Artist · 3D & Motion Graphics · Video→3D Researcher
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  India
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  sandesh@example.com
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  youtube.com/@SandeshGadakh
                </span>
              </div>
            </header>

            {/* Summary */}
            <section className="mb-10">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  📋
                </span>
                Professional Summary
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Senior VFX & motion designer focused on turning video into immersive 3D experiences, 
                production-ready walkthroughs, and cinematic motion graphics for product marketing and 
                interactive VR/AR. 6+ years of experience delivering high-impact visual content for 
                ed-tech, e-commerce, and hospitality industries. Pioneered video-to-3D conversion 
                pipelines processing 3-4 models daily with 154+ products shipped.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-10">
              <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-primary" />
                </span>
                Work Experience
              </h2>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-border">
                    <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{job.role}</h3>
                      <span className="text-sm text-muted-foreground">{job.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">
                      {job.company} • {job.location}
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">{job.description}</p>
                    <ul className="space-y-1">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-10">
              <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-primary" />
                </span>
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-border">
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-accent" />
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-primary text-sm">{edu.institution} • {edu.year}</p>
                  <p className="text-muted-foreground text-sm mt-1">{edu.description}</p>
                </div>
              ))}
            </section>

            {/* Awards */}
            <section className="mb-10">
              <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </span>
                Awards & Recognition
              </h2>
              {awards.map((award, index) => (
                <div key={index} className="p-4 bg-secondary/50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{award.title}</h3>
                    <span className="text-sm text-primary">{award.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{award.organization} — {award.description}</p>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section className="mb-10">
              <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  🛠️
                </span>
                Skills & Tools
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Technical</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 text-sm bg-secondary rounded-full"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Software</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-sm bg-secondary rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Selected Projects */}
            <section>
              <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  🎬
                </span>
                Selected Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-xl">
                  <h4 className="font-medium">Italica 3D Product Library</h4>
                  <p className="text-sm text-muted-foreground">154 products converted to 3D</p>
                </div>
                <div className="p-4 border border-border rounded-xl">
                  <h4 className="font-medium">Kesari Weddings</h4>
                  <p className="text-sm text-muted-foreground">50-100 hotel 3D walkthroughs</p>
                </div>
                <div className="p-4 border border-border rounded-xl">
                  <h4 className="font-medium">Byju's Educational Content</h4>
                  <p className="text-sm text-muted-foreground">500+ motion graphics animations</p>
                </div>
                <div className="p-4 border border-border rounded-xl">
                  <h4 className="font-medium">Video-to-3D Pipeline</h4>
                  <p className="text-sm text-muted-foreground">3-4 models processed daily</p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Resume;
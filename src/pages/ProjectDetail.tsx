import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, Calendar, Users, Building2 } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageTransition>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 text-sm uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-4">
                  {project.category}
                </span>
                <h1 className="text-display-lg font-bold max-w-4xl">
                  {project.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Meta */}
        <section className="px-6 lg:px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  {project.description}
                </p>
                
                {/* Quick stats row */}
                <div className="flex flex-wrap gap-6">
                  {project.company && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span>{project.company}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                  {project.teamSize && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{project.teamSize}</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Meta Info Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-8 p-6 rounded-2xl glass"
              >
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    My Role
                  </h4>
                  <p className="font-medium">{project.role}</p>
                </div>
                {project.duration && (
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                      Duration
                    </h4>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                )}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Tools & Tech
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 text-xs font-medium bg-secondary rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                {project.links && project.links.length > 0 && (
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                      Links
                    </h4>
                    <div className="flex flex-col gap-2">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                          {link.label}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="px-6 lg:px-12 py-16 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.2em] text-primary mb-8 block"
            >
              Project Overview
            </motion.span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-background rounded-2xl shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.overview.problem}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 bg-background rounded-2xl shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.overview.solution}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contributions */}
        {project.contributions && (
          <section className="px-6 lg:px-12 py-16">
            <div className="max-w-6xl mx-auto">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm uppercase tracking-[0.2em] text-primary mb-4 block"
              >
                My Contribution
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-display-md font-bold mb-12"
              >
                What I Did
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.contributions.map((contribution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-foreground leading-relaxed pt-1">{contribution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Gallery */}
        <section className="px-6 lg:px-12 py-16 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.2em] text-primary mb-4 block"
            >
              Visual Gallery
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-display-md font-bold mb-12"
            >
              Project Visuals
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="aspect-square overflow-hidden rounded-2xl group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`${project.title} gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="px-6 lg:px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.2em] text-primary mb-4 block"
            >
              Results & Impact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-display-md font-bold mb-12"
            >
              Key Outcomes
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-secondary/50 rounded-2xl text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {result.metric}
                  </div>
                  <div className="text-lg font-medium mb-2">{result.value}</div>
                  {result.description && (
                    <div className="text-sm text-muted-foreground">{result.description}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="px-6 lg:px-12 py-16 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back to all projects</span>
              </Link>
              
              <Link
                to={`/project/${nextProject.id}`}
                className="group flex items-center gap-4"
              >
                <div className="text-right">
                  <span className="text-sm text-muted-foreground block">Next Project</span>
                  <span className="text-lg font-medium group-hover:text-primary transition-colors">
                    {nextProject.shortTitle}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden">
                  <img
                    src={nextProject.thumbnail}
                    alt={nextProject.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default ProjectDetail;
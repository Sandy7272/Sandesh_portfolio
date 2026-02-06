import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageTransition>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[70vh] overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="text-sm uppercase tracking-widest text-primary">
                  {project.category}
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 max-w-4xl">
                  {project.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Info */}
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
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Year
                  </h4>
                  <p className="font-medium">{project.year}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Role
                  </h4>
                  <p className="font-medium">{project.role}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-xs bg-secondary rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="px-6 lg:px-12 py-16 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-widest text-muted-foreground mb-12"
            >
              Project Overview
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-destructive rounded-full" />
                  The Problem
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.overview.problem}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  The Solution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.overview.solution}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="px-6 lg:px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-widest text-muted-foreground mb-12"
            >
              Visual Gallery
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="aspect-square overflow-hidden rounded-lg group"
                >
                  <img
                    src={image}
                    alt={`${project.title} gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="px-6 lg:px-12 py-16 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-widest text-muted-foreground mb-12"
            >
              Results & Impact
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-background rounded-lg shadow-card"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium">{result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Back Button */}
        <section className="px-6 lg:px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to all projects</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default ProjectDetail;

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Calendar, Briefcase, Clock, DollarSign, MapPin, Youtube, Linkedin, Github } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    roleType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      roleType: "",
      budget: "",
      timeline: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "sandesh@example.com",
      href: "mailto:sandesh@example.com"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "+91 XXXXX XXXXX",
      href: "https://wa.me/91XXXXXXXXXX"
    },
    {
      icon: Calendar,
      label: "Schedule a Call",
      value: "Book a 30-min intro",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@SandeshGadakh" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/" },
    { icon: Github, label: "GitHub", href: "https://github.com/" },
  ];

  return (
    <PageTransition>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-[0.2em] text-primary mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-display-lg font-bold mb-6">
              Let's Work Together
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Looking for a VFX artist or 3D specialist? 
              I'd love to hear from you. Fill out the form below or reach out directly.
            </p>
          </motion.div>

          {/* Availability Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-3 p-4 bg-success/10 rounded-2xl mb-12"
          >
            <span className="w-3 h-3 rounded-full bg-success animate-pulse" />
            <span className="font-medium text-success">Currently available for freelance & full-time opportunities</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="p-8 bg-card rounded-2xl shadow-card">
                <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company / Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="mt-2"
                    />
                  </div>

                  {/* Project Brief Section */}
                  <div className="p-4 bg-secondary/50 rounded-xl space-y-4">
                    <p className="text-sm font-medium text-muted-foreground">Quick Brief (Optional)</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="roleType" className="text-xs flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          Project Type
                        </Label>
                        <select
                          id="roleType"
                          name="roleType"
                          value={formData.roleType}
                          onChange={handleChange}
                          className="mt-1 w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                        >
                          <option value="">Select...</option>
                          <option value="vfx">VFX & Motion Graphics</option>
                          <option value="3d">3D Visualization</option>
                          <option value="video-to-3d">Video-to-3D Conversion</option>
                          <option value="fulltime">Full-time Position</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="budget" className="text-xs flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          Budget Range
                        </Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="mt-1 w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                        >
                          <option value="">Select...</option>
                          <option value="<5k">Under $5K</option>
                          <option value="5k-15k">$5K - $15K</option>
                          <option value="15k-50k">$15K - $50K</option>
                          <option value=">50k">$50K+</option>
                          <option value="salary">Full-time Salary</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="timeline" className="text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Timeline
                        </Label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="mt-1 w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                        >
                          <option value="">Select...</option>
                          <option value="asap">ASAP</option>
                          <option value="1-2weeks">1-2 Weeks</option>
                          <option value="1month">1 Month</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, and how I can help..."
                      required
                      rows={5}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary text-primary-foreground py-6"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Direct Contact */}
              <div className="p-6 bg-card rounded-2xl shadow-card">
                <h3 className="text-lg font-semibold mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{method.label}</p>
                        <p className="font-medium">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="p-6 bg-card rounded-2xl shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Location</h3>
                </div>
                <p className="text-muted-foreground">
                  Based in India, available for remote work worldwide. 
                  Open to relocation for the right opportunity.
                </p>
              </div>

              {/* Social Links */}
              <div className="p-6 bg-card rounded-2xl shadow-card">
                <h3 className="text-lg font-semibold mb-4">Follow My Work</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="p-4 glass rounded-2xl text-center">
                <p className="text-sm text-muted-foreground">
                  Average response time: <span className="text-foreground font-medium">Under 24 hours</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Contact;

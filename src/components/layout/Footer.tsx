import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const socialLinks = [
  { name: "Email", href: "mailto:sandeesh@example.com", icon: Mail },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-semibold">
              Sandeesh<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Creative Technologist crafting AI-powered visual experiences and immersive 3D systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm hover:text-primary transition-colors">
                Work
              </Link>
              <Link to="/about" className="text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sandeesh Gadakh. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with precision & passion
          </p>
        </div>
      </div>
    </footer>
  );
}

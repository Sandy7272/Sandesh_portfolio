import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, Youtube } from "lucide-react";

const socialLinks = [
  { name: "Email", href: "mailto:sandesh@example.com", icon: Mail },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/Sandy7272", icon: Github },
  { name: "YouTube", href: "https://youtube.com/@SandeshGadakh", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm font-bold tracking-[0.15em] uppercase">
              Sandy G<span className="text-primary">.</span>
            </Link>
            <span className="hidden md:block h-4 w-px bg-border" />
            <p className="text-xs text-muted-foreground">
              VFX Artist · 3D & Motion Graphics
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="hr-accent mt-8 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-muted-foreground/60">
            © {new Date().getFullYear()} Sandesh Gadakh. All rights reserved.
          </p>
          <nav className="flex gap-6">
            {[
              { label: "Work", href: "/" },
              { label: "About", href: "/about" },
              { label: "Resume", href: "/resume" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-[11px] text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

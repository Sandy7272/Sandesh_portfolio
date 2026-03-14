export interface CaseStudy {
  client: string;
  year: string;
  role: string;
  duration: string;
  challenge: string;
  solution: string;
  process: string[];
  results: { value: string; label: string }[];
  tools: string[];
}

export interface Project {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  caseStudy?: CaseStudy;
  externalLink?: string;
}

export const projects: Project[] = [
  {
    id: "video-to-3d",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1400&q=80",
    category: "Product · AI Pipeline",
    title: "Video-to-3D Platform",
    description: "Transformed amateur video-to-3D pipeline into enterprise-grade system. Built automation infrastructure reducing manual ops by 70%. Delivered in 12 months from prototype to production-ready.",
    tags: ["Nerfstudio", "Gaussian Splatting", "Python", "Automation"],
    caseStudy: {
      client: "MetaShop AI",
      year: "2023–2024",
      role: "Product Builder & Operations Lead",
      duration: "12 months",
      challenge: "MetaShop AI had a promising video-to-3D concept but an amateur, manual pipeline that couldn't scale beyond a handful of projects. Every step required manual intervention, quality was inconsistent, and client delivery was unpredictable.",
      solution: "I rebuilt the entire pipeline from capture guidelines to final delivery. Created standardized processes, built automation tools that eliminated 70% of manual operations, developed a custom 3D viewer for client self-service, and implemented project tracking systems.",
      process: [
        "Audited existing pipeline and identified 23 bottlenecks",
        "Designed standardized video capture protocol for consistent input quality",
        "Built automated file tracking and processing workflows",
        "Created custom 3D viewer with user customization capabilities",
        "Implemented quality control checkpoints at each pipeline stage",
        "Developed client-facing delivery system with self-service access",
      ],
      results: [
        { value: "70%", label: "Manual work reduction" },
        { value: "50+", label: "Client projects managed" },
        { value: "12mo", label: "Amateur to enterprise-grade" },
      ],
      tools: ["Nerfstudio", "Gaussian Splatting", "Python", "Three.js", "WebGL", "React"],
    },
  },
  {
    id: "kesari-3d",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=80",
    category: "3D · Hospitality",
    title: "Kesari Weddings 3D Tours",
    description: "Custom 3D viewer with user customization for 50+ luxury venues.",
    tags: ["Gaussian Splatting", "Three.js", "WebGL"],
    caseStudy: {
      client: "Kesari Weddings",
      year: "2023–2024",
      role: "3D Pipeline Engineer",
      duration: "Ongoing",
      challenge: "Kesari Weddings needed a way to showcase 50+ luxury wedding venues to clients remotely, with interactive 3D walkthroughs that felt immersive and premium.",
      solution: "Built end-to-end 3D digitization pipeline using Gaussian Splatting, delivered through a custom WebGL viewer allowing clients to explore venues with customizable viewing options.",
      process: [
        "Developed video capture guidelines for venue teams",
        "Processed footage through Gaussian Splatting pipeline",
        "Built custom Three.js viewer with environment controls",
        "Optimized for mobile delivery under 2s load time",
      ],
      results: [
        { value: "50+", label: "Hotels digitized" },
        { value: "<2s", label: "Mobile load time" },
        { value: "100%", label: "Client satisfaction" },
      ],
      tools: ["Gaussian Splatting", "Three.js", "WebGL", "Nerfstudio"],
    },
  },
  {
    id: "italica",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
    category: "E-Commerce · Automation",
    title: "Italica 3D Library",
    description: "154 furniture products → interactive 3D in 8 weeks.",
    tags: ["Blender", "Photogrammetry", "WebGL"],
    caseStudy: {
      client: "Italica Furniture",
      year: "2023",
      role: "3D Production Lead",
      duration: "8 weeks",
      challenge: "Italica needed their entire furniture catalog digitized into interactive 3D assets for their e-commerce platform within a tight 8-week deadline.",
      solution: "Designed and executed a high-throughput 3D production pipeline, processing 154 products from photography to web-ready 3D assets with consistent quality.",
      process: [
        "Created standardized photography setup guide",
        "Built batch processing pipeline for 3D reconstruction",
        "Optimized assets for web delivery (< 2MB per model)",
        "Integrated with e-commerce product pages",
      ],
      results: [
        { value: "154", label: "Products digitized" },
        { value: "8wk", label: "Total delivery time" },
        { value: "<2MB", label: "Average asset size" },
      ],
      tools: ["Blender", "Photogrammetry", "Python", "WebGL"],
    },
  },
  {
    id: "byjus",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700&q=80",
    category: "Motion Graphics · EdTech",
    title: "Byju's Animations",
    description: "500+ educational animations. 3× Best Employee Award.",
    tags: ["After Effects", "Cinema 4D", "Blender"],
    caseStudy: {
      client: "Byju's",
      year: "2021–2023",
      role: "Senior Motion Graphics Artist",
      duration: "1.5 years",
      challenge: "Byju's needed high-quality educational animations at scale — hundreds of complex concept visualizations for millions of students, with fast turnaround and consistent quality.",
      solution: "Created 500+ animations, built a reusable template library that improved team efficiency by 40%, and managed 15+ concurrent projects with 100% on-time delivery.",
      process: [
        "Developed modular animation template system",
        "Created style guide for consistent visual language",
        "Built asset library reducing setup time by 60%",
        "Trained junior artists on pipeline and standards",
      ],
      results: [
        { value: "500+", label: "Animations created" },
        { value: "40%", label: "Team efficiency gain" },
        { value: "3×", label: "Best Employee Awards" },
      ],
      tools: ["After Effects", "Cinema 4D", "Blender", "Premiere Pro"],
    },
  },
  {
    id: "vfx-reel",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=700&q=80",
    category: "VFX · Showreel",
    title: "VFX & Compositing",
    description: "Cinematic VFX, compositing and 3D work across 5+ years.",
    tags: ["Nuke", "After Effects", "Blender"],
    externalLink: "https://youtube.com/@SandeshGadakh",
  },
];

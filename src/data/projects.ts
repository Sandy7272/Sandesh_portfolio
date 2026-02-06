export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  thumbnail: string;
  heroImage: string;
  year: string;
  role: string;
  tools: string[];
  overview: {
    problem: string;
    solution: string;
  };
  gallery: string[];
  results: string[];
}

export const projects: Project[] = [
  {
    id: "ai-video-to-3d",
    title: "AI Video-to-3D Conversion Pipeline",
    shortTitle: "AI Video-to-3D",
    category: "AI & Automation",
    description: "Revolutionary pipeline converting 2D video footage into immersive 3D environments using neural radiance fields and custom machine learning models.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1920&q=80",
    year: "2024",
    role: "Lead Technical Architect",
    tools: ["Python", "PyTorch", "NVIDIA Omniverse", "Blender", "Custom ML Models"],
    overview: {
      problem: "Traditional 3D reconstruction from video required extensive manual work and specialized equipment, limiting accessibility and scalability.",
      solution: "Developed an end-to-end automated pipeline leveraging NeRF technology and custom AI models to convert standard video into navigable 3D scenes within hours instead of weeks."
    },
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    ],
    results: [
      "90% reduction in 3D reconstruction time",
      "Processed 500+ video-to-3D conversions",
      "Licensed to 3 enterprise clients"
    ]
  },
  {
    id: "hotel-3d-walkthroughs",
    title: "Hotel & Resort 3D Walkthroughs",
    shortTitle: "3D Walkthroughs",
    category: "3D Visualization",
    description: "Photorealistic interactive 3D experiences for luxury hospitality brands, enabling virtual tours before construction completion.",
    thumbnail: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80",
    year: "2023",
    role: "Creative Director & 3D Lead",
    tools: ["Unreal Engine 5", "3ds Max", "V-Ray", "Substance Painter"],
    overview: {
      problem: "Hospitality clients struggled to market properties under construction and secure pre-bookings without physical spaces to showcase.",
      solution: "Created cinematic-quality 3D walkthroughs with real-time interactivity, allowing potential guests to explore every detail of unbuilt properties."
    },
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    ],
    results: [
      "35% increase in pre-bookings for clients",
      "Delivered 12 property visualizations",
      "Featured in Architectural Digest"
    ]
  },
  {
    id: "manufacturing-3d-library",
    title: "Manufacturing Product 3D Library",
    shortTitle: "Product 3D Library",
    category: "Enterprise Systems",
    description: "Comprehensive 3D asset management system for manufacturing giant, cataloging 10,000+ products with real-time configurators.",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80",
    year: "2023",
    role: "Technical Lead",
    tools: ["Three.js", "React", "Node.js", "PostgreSQL", "Blender Pipeline"],
    overview: {
      problem: "Enterprise client managed thousands of products with outdated 2D catalogs, losing sales opportunities and creating friction in the sales process.",
      solution: "Built a scalable 3D asset library with automated rendering pipelines, real-time product configurators, and seamless CRM integration."
    },
    gallery: [
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
      "https://images.unsplash.com/photo-1563520240344-52b067aa5f84?w=800&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    ],
    results: [
      "10,000+ products digitized in 3D",
      "45% faster sales cycle",
      "$2M+ attributed revenue increase"
    ]
  },
  {
    id: "motion-graphics-campaigns",
    title: "Motion Graphics Campaigns",
    shortTitle: "Motion Campaigns",
    category: "Motion Design",
    description: "Award-winning motion graphics and visual effects for global brand campaigns, combining artistic vision with technical precision.",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80",
    year: "2022-2024",
    role: "Motion Director",
    tools: ["After Effects", "Cinema 4D", "Houdini", "DaVinci Resolve"],
    overview: {
      problem: "Brands needed standout visual content that could capture attention in saturated digital spaces while maintaining consistent brand identity.",
      solution: "Developed signature motion language combining kinetic typography, 3D integration, and data-driven animation for memorable brand experiences."
    },
    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    ],
    results: [
      "15+ campaigns delivered",
      "200M+ combined views",
      "2 industry awards"
    ]
  },
  {
    id: "unreal-environments",
    title: "Unreal Engine Environments",
    shortTitle: "Unreal Environments",
    category: "Real-time 3D",
    description: "Cutting-edge real-time environments for virtual production, gaming, and architectural visualization using Unreal Engine 5.",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80",
    year: "2024",
    role: "Environment Artist & Technical Director",
    tools: ["Unreal Engine 5", "Megascans", "World Machine", "Substance Designer"],
    overview: {
      problem: "Traditional pre-rendered environments couldn't meet the demand for real-time interactivity in modern production workflows.",
      solution: "Pioneered virtual production pipelines using UE5's Nanite and Lumen for film-quality real-time environments."
    },
    gallery: [
      "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    ],
    results: [
      "Used in 3 virtual productions",
      "Sub-16ms frame times achieved",
      "Template licensed to studios"
    ]
  },
  {
    id: "ai-automation-bot",
    title: "AI Automation Bot Project",
    shortTitle: "AI Automation",
    category: "AI & Automation",
    description: "Intelligent workflow automation system using LLMs and computer vision to streamline creative production pipelines.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
    year: "2024",
    role: "AI Systems Architect",
    tools: ["Python", "LangChain", "OpenAI API", "Computer Vision", "Zapier"],
    overview: {
      problem: "Creative teams spent 40% of time on repetitive tasks: file organization, asset tagging, render management, and client communications.",
      solution: "Developed an AI-powered automation suite that handles routine tasks, enabling teams to focus on creative work while maintaining quality control."
    },
    gallery: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    ],
    results: [
      "40% time savings on routine tasks",
      "99.2% automation accuracy",
      "Deployed across 5 teams"
    ]
  },
];

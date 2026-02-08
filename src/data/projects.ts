export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  thumbnail: string;
  heroImage: string;
  heroVideo?: string;
  year: string;
  role: string;
  company?: string;
  teamSize?: string;
  duration?: string;
  tools: string[];
  overview: {
    problem: string;
    solution: string;
  };
  contributions?: string[];
  process?: string[];
  gallery: string[];
  results: {
    metric: string;
    value: string;
    description?: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  links?: {
    label: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "video-to-3d-pipeline",
    title: "Video-to-3D Conversion Pipeline",
    shortTitle: "Video→3D",
    category: "AI Research & VFX",
    description: "Revolutionary AI pipeline converting standard video footage into production-ready 3D assets using neural radiance fields and custom automation.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1920&q=80",
    year: "2023-Present",
    role: "VFX Artist, Researcher & Operations Manager",
    company: "MetaShop AI",
    teamSize: "5 members",
    duration: "Ongoing",
    tools: ["Nerfstudio", "Python", "Blender", "After Effects", "Cloud Processing"],
    overview: {
      problem: "Traditional 3D product modeling required expensive photogrammetry setups, specialized equipment, and 2-3 weeks per model — making it impractical for e-commerce scale.",
      solution: "Developed an end-to-end pipeline that converts simple video footage into production-ready 3D models in 3-4 hours, leveraging NeRF technology and custom automation scripts."
    },
    contributions: [
      "Led R&D in video-to-3D conversion technology using Nerfstudio",
      "Built automated processing pipeline reducing manual work by 80%",
      "Established quality control standards for 3D asset delivery",
      "Managed daily operations processing 3-4 models per day",
      "Coordinated with clients on video capture requirements"
    ],
    process: [
      "Video capture guidelines & client briefing",
      "Frame extraction & preprocessing",
      "NeRF training & optimization",
      "Mesh extraction & cleanup",
      "Texture baking & material setup",
      "Final QC & delivery"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    ],
    results: [
      { metric: "154", value: "Products Converted", description: "3D models for Italica plastics catalog" },
      { metric: "3-4hrs", value: "Per Model", description: "Down from 2-3 weeks traditional" },
      { metric: "3-4", value: "Daily Output", description: "Models processed per day" }
    ]
  },
  {
    id: "hotel-3d-walkthroughs",
    title: "Hotel & Resort 3D Walkthroughs",
    shortTitle: "3D Walkthroughs",
    category: "3D Visualization",
    description: "Immersive 3D virtual tours for luxury hospitality brands, enabling guests to explore properties before booking.",
    thumbnail: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80",
    year: "2023-2024",
    role: "Lead 3D Artist & Technical Director",
    company: "MetaShop AI (Kesari Weddings Project)",
    teamSize: "3 members",
    duration: "6 months",
    tools: ["Drone Capture", "Nerfstudio", "Blender", "Three.js", "WebGL"],
    overview: {
      problem: "Kesari Weddings needed to showcase 50-100 partner hotels and resorts to wedding planners, but physical site visits were costly and time-consuming.",
      solution: "Created interactive 3D walkthroughs combining drone footage and interior video, allowing virtual exploration of venues from anywhere."
    },
    contributions: [
      "Directed drone and interior video capture workflow",
      "Processed raw footage through NeRF pipeline",
      "Optimized 3D scenes for web-based viewing",
      "Developed embed-ready viewer components",
      "Trained hotel staff on video capture best practices"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    ],
    results: [
      { metric: "50-100", value: "Hotels Planned", description: "Venues in pipeline" },
      { metric: "Goa", value: "First Resort", description: "Completed as proof of concept" },
      { metric: "40%", value: "Cost Reduction", description: "Vs traditional photography" }
    ]
  },
  {
    id: "italica-product-library",
    title: "Italica 3D Product Library",
    shortTitle: "Product 3D Library",
    category: "E-Commerce 3D",
    description: "Complete 3D digitization of Italica's plastic furniture catalog — 154 products converted to interactive 3D for e-commerce.",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80",
    year: "2023",
    role: "Lead VFX Artist & Pipeline Developer",
    company: "MetaShop AI",
    teamSize: "4 members",
    duration: "8 weeks",
    tools: ["Nerfstudio", "Blender", "Python Automation", "WebGL Viewer"],
    overview: {
      problem: "Italica's e-commerce platform relied on 2D product photos that couldn't convey true product dimensions, textures, or how items would look in customers' spaces.",
      solution: "Systematically converted the entire 154-product catalog into interactive 3D models with consistent quality, enabling 360° viewing and AR placement."
    },
    contributions: [
      "Established video capture protocols for product consistency",
      "Built batch processing pipeline for efficiency",
      "Developed quality metrics and approval workflow",
      "Created viewer integration documentation",
      "Managed delivery timeline and client communication"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
      "https://images.unsplash.com/photo-1563520240344-52b067aa5f84?w=800&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    ],
    results: [
      { metric: "154", value: "Products", description: "Complete catalog converted" },
      { metric: "8", value: "Weeks", description: "Total project duration" },
      { metric: "100%", value: "Catalog Coverage", description: "All SKUs digitized" }
    ]
  },
  {
    id: "motion-graphics-byjus",
    title: "Motion Graphics & 3D for Byju's",
    shortTitle: "Byju's Motion",
    category: "Motion Design",
    description: "Educational motion graphics and 3D animations for India's largest ed-tech platform, making complex concepts visually engaging.",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80",
    year: "2019-2022",
    role: "Senior Motion Graphics Artist",
    company: "Byju's",
    teamSize: "12 members",
    duration: "3 years",
    tools: ["After Effects", "Cinema 4D", "Blender", "Premiere Pro"],
    overview: {
      problem: "Abstract educational concepts (physics, chemistry, mathematics) were difficult for students to visualize and retain from traditional teaching methods.",
      solution: "Created engaging 3D animations and motion graphics that brought scientific concepts to life, improving student comprehension and engagement."
    },
    contributions: [
      "Produced 3D animations for science curriculum",
      "Developed motion design templates for team efficiency",
      "Collaborated with subject matter experts on accuracy",
      "Mentored junior designers on 3D workflows",
      "Received 'Best Employee' award 3x for quality work"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    ],
    results: [
      { metric: "3x", value: "Best Employee", description: "Award recognition" },
      { metric: "500+", value: "Animations", description: "Produced during tenure" },
      { metric: "3", value: "Years", description: "Of consistent delivery" }
    ]
  },
  {
    id: "vfx-showreel",
    title: "VFX & Compositing Showreel",
    shortTitle: "VFX Showreel",
    category: "VFX & Compositing",
    description: "Personal collection of visual effects work spanning product visualization, motion graphics, and experimental 3D projects.",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80",
    year: "2018-Present",
    role: "VFX Artist & Motion Designer",
    tools: ["After Effects", "Nuke", "Cinema 4D", "Blender", "DaVinci Resolve"],
    overview: {
      problem: "Demonstrating the range and quality of VFX capabilities requires a curated showcase of diverse project work.",
      solution: "Compiled a comprehensive showreel featuring the best visual effects, compositing, and 3D work across various industries and styles."
    },
    contributions: [
      "Product visualization for various brands",
      "Cinematic motion graphics and title sequences",
      "Green screen compositing and cleanup",
      "3D integration with live-action footage",
      "Color grading and final delivery"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    ],
    results: [
      { metric: "6+", value: "Years", description: "Industry experience" },
      { metric: "50+", value: "Projects", description: "Completed works" },
      { metric: "YouTube", value: "Channel", description: "Breakdown tutorials" }
    ],
    links: [
      { label: "YouTube Channel", url: "https://youtube.com/@SandeshGadakh" }
    ]
  }
];

export const skills = {
  technical: [
    { name: "3D & Motion Graphics", level: 95 },
    { name: "Video-to-3D / NeRF Pipeline", level: 90 },
    { name: "VFX & Compositing", level: 88 },
    { name: "UI/UX Design", level: 75 },
    { name: "Python Scripting", level: 70 },
    { name: "Unreal Engine", level: 45, note: "Learning" }
  ],
  tools: [
    "After Effects",
    "Blender",
    "Cinema 4D",
    "Nerfstudio",
    "Premiere Pro",
    "DaVinci Resolve",
    "Figma",
    "Three.js"
  ],
  soft: [
    "Project Management",
    "Team Coordination",
    "Client Communication",
    "Operations & Workflow Design",
    "Technical Documentation"
  ]
};

export const experience = [
  {
    company: "MetaShop AI",
    role: "VFX Artist, Researcher & Operations Manager",
    period: "2023 - Present",
    location: "Remote",
    description: "Leading video-to-3D research, VFX production, and operations for AI-powered 3D commerce platform.",
    highlights: [
      "Pioneered video-to-3D pipeline using Nerfstudio",
      "Converted 154 products to 3D for Italica",
      "Managing Kesari Weddings hotel 3D project",
      "Processing 3-4 3D models daily"
    ]
  },
  {
    company: "Byju's",
    role: "Senior Motion Graphics & 3D Artist",
    period: "2019 - 2022",
    location: "Bangalore, India",
    description: "Created educational motion graphics and 3D animations for India's largest ed-tech platform.",
    highlights: [
      "Produced 500+ educational animations",
      "Awarded 'Best Employee' 3 times",
      "Developed motion design templates",
      "Mentored junior designers"
    ]
  },
  {
    company: "Global Studio",
    role: "3D & Motion Graphics Artist",
    period: "2017 - 2019",
    location: "Mumbai, India",
    description: "Created 3D animations and motion graphics for advertising and corporate clients.",
    highlights: [
      "Worked on national brand campaigns",
      "Product visualization for e-commerce",
      "Title sequences and broadcast graphics"
    ]
  }
];

export const education = [
  {
    degree: "Bachelor's in Multimedia & Animation",
    institution: "University of Mumbai",
    year: "2017",
    description: "Specialized in 3D animation, motion graphics, and visual effects."
  }
];

export const awards = [
  {
    title: "Best Employee Award",
    organization: "Byju's",
    year: "2020, 2021, 2022",
    description: "Recognized 3x for exceptional quality and consistency in motion graphics production."
  }
];
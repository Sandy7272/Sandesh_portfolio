export interface ResearchCard {
  tag: string;
  title: string;
  description: string;
  status: "active" | "complete" | "ongoing";
  statusLabel: string;
}

export const research: ResearchCard[] = [
  {
    tag: "Spatial AI",
    title: "Real-Time Gaussian Splat Streaming",
    description: "Researching WebXR delivery pipelines for streaming high-fidelity Gaussian Splats to mobile browsers. Target: sub-2s load on 4G.",
    status: "active",
    statusLabel: "In Progress",
  },
  {
    tag: "Automation",
    title: "AI-Powered Motion Templates",
    description: "Built system using AI to generate After Effects motion presets from natural language briefs. Dramatically reduces setup time for repeat animation formats.",
    status: "complete",
    statusLabel: "Deployed at MetaShop",
  },
  {
    tag: "Computer Vision",
    title: "Auto Camera Path Extraction",
    description: "CV pipeline extracting optimal camera trajectories from raw video for NeRF input — improving reconstruction quality 40% on complex architectural subjects.",
    status: "complete",
    statusLabel: "Production Ready",
  },
  {
    tag: "3D Commerce",
    title: "Custom 3D Viewer with User Customization",
    description: "Built WebGL-based 3D property viewer enabling clients to customize views, materials, and environments without technical support. Company's first self-service product.",
    status: "complete",
    statusLabel: "Live in Production",
  },
  {
    tag: "Workflow",
    title: "70% Automation of Manual Operations",
    description: "Complete automation infrastructure: file tracking system, processing workflows, and project management tools replacing manual operations entirely.",
    status: "complete",
    statusLabel: "Live at MetaShop",
  },
  {
    tag: "Generative 3D",
    title: "Text-to-3D for Commerce",
    description: "Exploring TripoSR + Stable Diffusion for rapid product 3D prototyping — generating textured meshes from product descriptions.",
    status: "ongoing",
    statusLabel: "Ongoing Experiments",
  },
];

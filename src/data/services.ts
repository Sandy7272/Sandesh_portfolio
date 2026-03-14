export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  { icon: "🎬", title: "Video-to-3D Pipeline", description: "End-to-end systems converting video footage into photorealistic 3D assets using Gaussian Splatting and NeRF at production scale." },
  { icon: "🏗️", title: "Product Building", description: "From 0 to 1 — building AI-powered tools, custom viewers, automation systems, and client-facing self-service products that work without technical support." },
  { icon: "✨", title: "VFX & Compositing", description: "Cinematic visual effects, compositing, and 3D integration with live-action footage for broadcast, streaming, and digital." },
  { icon: "🌐", title: "3D Walkthroughs", description: "Immersive photorealistic virtual tours for hospitality, real estate, and events. Custom viewer with user customization." },
  { icon: "⚡", title: "Motion Graphics", description: "Purposeful animation systems, motion design libraries, and micro-interaction design for products and content platforms." },
  { icon: "🤖", title: "AI Workflow Automation", description: "Integrating generative AI and automation into production pipelines — reducing manual work and amplifying creative output." },
];

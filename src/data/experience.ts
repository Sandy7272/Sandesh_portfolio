export interface Job {
  period: string;
  company: string;
  location: string;
  role: string;
  bullets: string[];
  badge?: string;
}

export const experience: Job[] = [
  {
    period: "Jan 2023 – Present",
    company: "MetaShop AI",
    location: "Pune, India",
    role: "Product Builder & Creative Operations Lead",
    bullets: [
      "Transformed amateur pipeline into enterprise-grade system in 12 months",
      "Built AI-powered website and custom 3D viewer (first self-service product)",
      "Created automation infrastructure reducing manual ops by 70%",
      "Managed 50+ client projects (Kesari Weddings, L&T Realty)",
      "Built file tracking, processing workflows, and project management tools",
      "Awarded equity by founder for irreplaceable strategic value",
    ],
    badge: "★ Awarded Equity — Irreplaceable Strategic Value",
  },
  {
    period: "Oct 2021 – Jan 2023",
    company: "Byju's",
    location: "Bangalore, India",
    role: "Motion Graphics Artist & 3D Specialist",
    bullets: [
      "Created 500+ educational animations for millions of students",
      "Built reusable template library improving team efficiency by 40%",
      "Managed 15+ concurrent projects with 100% on-time delivery",
      "Promoted from intern to full-time for demonstrating 3D capabilities",
    ],
    badge: "★ 3× Best Employee Award — 2021, 2022, 2023",
  },
  {
    period: "Jan 2020 – Sep 2021",
    company: "Global Studio",
    location: "Pune, India",
    role: "3D Artist & Motion Designer (Freelance)",
    bullets: [
      "3D modeling and motion graphics for gaming and commercial projects",
      "Maintained 100% on-time delivery managing independent pipeline",
      "Built foundational expertise across full creative stack",
    ],
  },
];

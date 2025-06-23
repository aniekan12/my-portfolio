import {
  Smartphone,
  Code,
  Zap,
  Users,
  Database,
  Globe,
  Shield,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: string;
}

export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const skills: Skill[] = [
  { name: "Flutter/Dart", icon: Smartphone, level: "Expert" },
  { name: "React/TypeScript", icon: Code, level: "Advanced" },
  { name: "REST API Integration", icon: Database, level: "Expert" },
  { name: "Mobile Architecture", icon: TrendingUp, level: "Expert" },
  { name: "Team Leadership", icon: Users, level: "Advanced" },
  { name: "Performance Optimization", icon: Zap, level: "Expert" },
  { name: "Cross-platform Development", icon: Globe, level: "Expert" },
  { name: "Security Implementation", icon: Shield, level: "Advanced" },
];

export const values: Value[] = [
  {
    title: "Clean Code",
    description:
      "Writing maintainable, readable, and well-documented code that stands the test of time.",
    icon: Code,
  },
  {
    title: "Collaboration",
    description:
      "Working closely with teams, stakeholders, and users to deliver exceptional products.",
    icon: Users,
  },
  {
    title: "Continuous Learning",
    description:
      "Staying updated with the latest technologies and best practices in software development.",
    icon: TrendingUp,
  },
];

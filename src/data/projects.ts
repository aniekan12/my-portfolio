import { Heart, CreditCard, BookOpen, Target, Gift } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  name: string;
  description: string;
  icon: LucideIcon;
  category: string;
  tech: string[];
  links: {
    web?: string;
    android?: string;
    ios?: string;
  };
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "iDonatio",
    description:
      "iDonatio makes it easy to make and receive donations. They connect donors with the people and organisations they care about and provide donees with helpful tools to conveniently track and manage received donations.",
    icon: Heart,
    category: "Mobile App",
    tech: ["Flutter", "Dart", "REST API"],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.idonatio.idonatio&pli=1",
      ios: "https://apps.apple.com/ng/app/idonatio/id1627754544",
    },
    features: [
      "Donation Management",
      "Organization Tools",
      "Tracking System",
      "Cross-platform",
    ],
  },
  {
    id: 2,
    name: "iRecharge",
    description:
      "iRecharge is a comprehensive bill payments app that allows users to pay for various services including airtime, data, electricity, and more.",
    icon: CreditCard,
    category: "Mobile App",
    tech: ["Flutter", "Dart", "Payment Integration"],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.ist.irecharge&hl=en",
      ios: "https://apps.apple.com/ng/app/irecharge/id971084808",
    },
    features: [
      "Bill Payments",
      "Airtime & Data",
      "Electricity",
      "Multiple Payment Options",
    ],
  },
  {
    id: 3,
    name: "Accelerate",
    description:
      "Accelerate is a fast, secure, and seamless payment solution designed to help individuals and businesses accept payments from their customers for either one-off or recurring transactions by providing them over 10 payment options.",
    icon: CreditCard,
    category: "Mobile App",
    tech: ["Flutter", "Dart", "Payment Gateway"],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.ist.accelerate.accelerate_mobile&hl=en",
      ios: "https://apps.apple.com/ng/app/accelerate-by-irecharge/id1623395617",
    },
    features: [
      "10+ Payment Options",
      "Recurring Payments",
      "Business Solutions",
      "Secure Transactions",
    ],
  },
  {
    id: 4,
    name: "Obodo",
    description:
      "Obodo is an innovative Igbo language learning app designed to help users learn and preserve the Igbo language through interactive lessons and cultural content.",
    icon: BookOpen,
    category: "Mobile App",
    tech: ["Flutter", "Dart", "Educational Content", "Transcription"],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.droid.obodo&hl=en",
      ios: "https://apps.apple.com/us/app/obodo-full-circle/id1623822418?l=en",
    },
    features: [
      "Language Learning",
      "Cultural Content",
      "Interactive Lessons",
      "Progress Tracking",
    ],
  },
  {
    id: 5,
    name: "Goalspaces",
    description:
      "Goalspaces is a productivity app that helps users set, track, and achieve their personal and professional goals through organized workspace management.",
    icon: Target,
    category: "Mobile App",
    tech: ["Flutter", "Dart", "Productivity Tools"],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=space.mvpapp.centralspace&hl=en",
      ios: "https://apps.apple.com/us/app/goalspaces/id1589210832",
    },
    features: [
      "Goal Setting",
      "Progress Tracking",
      "Workspace Management",
      "Productivity Tools",
    ],
  },
  {
    id: 6,
    name: "iRecharge POS",
    description:
      "A specialized bill payments app designed to run on FETS POS terminals, enabling merchants to process payments and manage transactions efficiently.",
    icon: CreditCard,
    category: "POS Application",
    tech: ["Flutter", "Dart", "POS Integration"],
    links: {},
    features: [
      "POS Integration",
      "Merchant Tools",
      "Transaction Management",
      "Hardware Compatibility",
    ],
  },
  {
    id: 7,
    name: "Giv.ng",
    description:
      "Giv.ng is a web application that allows individuals and organisations to create campaigns and also allows users to donate to those campaigns, with comprehensive donation tracking capabilities.",
    icon: Gift,
    category: "Web Application",
    tech: ["React", "TypeScript", "Web Development"],
    links: {
      web: "https://giv.ng/",
    },
    features: [
      "Campaign Creation",
      "Donation Tracking",
      "Organization Tools",
      "Web Platform",
    ],
  },
];

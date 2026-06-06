import {
  Building2,
  Anchor,
  HardHat,
  Hammer,
  KeyRound,
  Route,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "construction",
    title: "Residential, Commercial & Industrial Construction",
    short: "Buildings of every scale.",
    description:
      "End-to-end execution of housing societies, office complexes, factories, and warehouses — engineered for the load, life, and use case.",
    icon: Building2,
  },
  {
    slug: "piling",
    title: "Piling & Foundation Work",
    short: "Foundations done right.",
    description:
      "Bored piling, driven piling, and deep foundation systems sized to the soil report and the structure above. Tested load capacity, every time.",
    icon: Anchor,
  },
  {
    slug: "civil-structural",
    title: "Civil & Structural Works",
    short: "RCC, steel, and beyond.",
    description:
      "Reinforced concrete and structural steel works delivered to drawing — from columns and slabs to complex composite frames.",
    icon: HardHat,
  },
  {
    slug: "renovation",
    title: "Renovation & Remodeling",
    short: "Transform existing spaces.",
    description:
      "Structural retrofits, layout reconfigurations, and full-scale remodels that breathe new life into ageing buildings without disrupting use.",
    icon: Hammer,
  },
  {
    slug: "turnkey",
    title: "Turnkey Construction Projects",
    short: "Hand us the brief, take the keys.",
    description:
      "Single-point responsibility from design coordination through finishing — you get a fully operational asset on day one.",
    icon: KeyRound,
  },
  {
    slug: "infrastructure",
    title: "Infrastructure & Road Works",
    short: "Roads, bridges, drainage.",
    description:
      "Heavy civil works including bituminous and concrete roadways, culverts, drainage networks, and site infrastructure development.",
    icon: Route,
  },
  {
    slug: "pmc",
    title: "Project Management & Supervision",
    short: "Plan, monitor, deliver.",
    description:
      "Independent PMC services covering scheduling, vendor coordination, quality audits, and milestone-based reporting through to handover.",
    icon: ClipboardCheck,
  },
];

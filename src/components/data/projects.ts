export const projectCategories = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Interior",
] as const;

export type ProjectCategory = Exclude<(typeof projectCategories)[number], "All">;

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  year: string;
  image: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "skyline-residency",
    title: "Skyline Residency",
    location: "Patna, Bihar",
    category: "Residential",
    year: "2025",
    image: "/images/projects/p1.jpg",
    summary: "84-unit premium apartment tower with rooftop amenities.",
  },
  {
    slug: "ganga-business-park",
    title: "Ganga Business Park",
    location: "Patna, Bihar",
    category: "Commercial",
    year: "2024",
    image: "/images/projects/p2.jpg",
    summary: "G+8 LEED-aligned commercial complex with 3-level basement.",
  },
  {
    slug: "amrit-warehouse",
    title: "Amrit Warehouse Hub",
    location: "Hajipur, Bihar",
    category: "Industrial",
    year: "2024",
    image: "/images/projects/p3.jpg",
    summary: "Pre-engineered steel warehouse spanning 1.2 lakh sq.ft.",
  },
  {
    slug: "lotus-villas",
    title: "Lotus Villas",
    location: "Gaya, Bihar",
    category: "Residential",
    year: "2023",
    image: "/images/projects/p4.jpg",
    summary: "Gated community of 24 contemporary independent villas.",
  },
  {
    slug: "horizon-mall",
    title: "Horizon Mall Atrium",
    location: "Bhagalpur, Bihar",
    category: "Interior",
    year: "2025",
    image: "/images/projects/p5.jpg",
    summary: "Atrium and food court interior fit-out with custom joinery.",
  },
  {
    slug: "metro-tech-tower",
    title: "Metro Tech Tower",
    location: "Patna, Bihar",
    category: "Commercial",
    year: "2023",
    image: "/images/projects/p6.jpg",
    summary: "B+G+12 grade-A office tower with smart-building automation.",
  },
  {
    slug: "saraswati-school",
    title: "Saraswati School Campus",
    location: "Muzaffarpur, Bihar",
    category: "Commercial",
    year: "2024",
    image: "/images/projects/p7.jpg",
    summary: "Educational campus with academic blocks, hostel, and sports facility.",
  },
  {
    slug: "bharat-cement-plant",
    title: "Bharat Cement Plant",
    location: "Rohtas, Bihar",
    category: "Industrial",
    year: "2022",
    image: "/images/projects/p8.jpg",
    summary: "Heavy industrial site development and RCC silo structures.",
  },
  {
    slug: "aurum-penthouse",
    title: "Aurum Penthouse",
    location: "Patna, Bihar",
    category: "Interior",
    year: "2025",
    image: "/images/projects/p9.jpg",
    summary: "Luxury penthouse interior with imported finishes.",
  },
];

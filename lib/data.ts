export const properties = [
  {
    eyebrow: "Signature residence",
    title: "The Garden Villas",
    description:
      "Sculpted around private courtyards, generous terraces and quiet garden views — a modern home with an enduring sense of calm.",
    price: "From PKR 2.45 Cr",
    area: "10 Marla · 4 Beds",
    image: "/images/garden-villa.jpg",
  },
  {
    eyebrow: "Elevated living",
    title: "Paradise Residences",
    description:
      "Light-filled apartments with crafted interiors, considered proportions and a private residents’ lounge above the boulevard.",
    price: "From PKR 1.25 Cr",
    area: "1,850 sq. ft. · 3 Beds",
    image: "/images/paradise-residence.jpg",
  },
  {
    eyebrow: "A rare address",
    title: "The Grand Estate",
    description:
      "An exceptional family estate where monumental architecture meets private landscaping, poolside living and effortless hospitality.",
    price: "From PKR 5.80 Cr",
    area: "1 Kanal · 6 Beds",
    image: "/images/grand-estate.jpg",
  },
  {
    eyebrow: "Urban retreat",
    title: "Skyline Penthouses",
    description:
      "A limited collection of duplex penthouses with soaring ceilings, floor-to-ceiling windows and panoramic city views.",
    price: "From PKR 3.10 Cr",
    area: "3,500 sq. ft. · 5 Beds",
    image: "/images/skyline-penthouse.png",
  },
  {
    eyebrow: "Exclusive community",
    title: "The Terrace Townhomes",
    description:
      "Modern three-story townhomes with expansive private terraces, offering a balanced lifestyle of indoor and outdoor living.",
    price: "From PKR 1.95 Cr",
    area: "7 Marla · 3 Beds",
    image: "/images/terrace-townhome.jpeg",
  },
  {
    eyebrow: "Boutique collection",
    title: "The Boulevard Lofts",
    description:
      "Chic, open-plan lofts located directly on the main boulevard, featuring industrial-inspired architecture and proximity to premium retail.",
    price: "From PKR 1.10 Cr",
    area: "1,200 sq. ft. · 2 Beds",
    image: "/images/boulevard-loft.png",
  },
];

export const gallery = [
  {
    name: "Central Park",
    number: "01",
    image: "/images/central-park.jpg",
  },
  {
    name: "Grand Mosque",
    number: "02",
    image: "/images/grand-mosque.jpg",
  },
  {
    name: "The Galleria",
    number: "03",
    image: "/images/galleria.jpg",
  },
  {
    name: "Wellness Club",
    number: "04",
    image: "/images/wellness-club.jpg",
  },
  {
    name: "Learning Campus",
    number: "05",
    image: "/images/learning-campus.jpg",
  },
  {
    name: "Crystal Lakes",
    number: "06",
    image: "/images/crystal-lakes.jpg",
  },
  {
    name: "Health Pavilion",
    number: "07",
    image: "/images/health-pavilion.jpg",
  },
  {
    name: "Sports Campus",
    number: "08",
    image: "/images/sports-campus.jpg",
  },
  {
    name: "Luxury Villas",
    number: "09",
    image: "/images/luxury-villas.jpg",
  },
];

export const amenities = [
  ["shield", "Smart Security", "Intelligent surveillance and a professionally managed response network."],
  ["bolt", "Underground Power", "Uninterrupted infrastructure, kept discreetly out of view."],
  ["road", "Wide Boulevards", "Tree-lined avenues planned for calm, effortless movement."],
  ["drop", "Water Supply", "Reliable, monitored supply throughout the community."],
  ["flame", "Sui Gas", "Purpose-built distribution across residential precincts."],
  ["signal", "Fiber Internet", "High-speed connectivity designed into every district."],
  ["store", "Commercial District", "Curated retail, dining and everyday essentials nearby."],
  ["book", "Education", "Purpose-built schools that place learning close to home."],
  ["cross", "Healthcare", "Modern clinical services and round-the-clock care."],
  ["spark", "Entertainment", "Spaces for culture, sport and meaningful time together."],
] as const;

export const projectFacts = [
  {
    label: "PHATA NOC",
    value: "DG-PHATA/W-I/PHS/61/2022",
    description: "The project states that 4,256 Kanal is approved by PHATA.",
  },
  {
    label: "Planned community",
    value: "20,000 Kanal",
    description: "The stated overall vision for the complete master-planned development.",
  },
  {
    label: "Main boulevard",
    value: "330 feet",
    description: "A wide central avenue designed to connect the community's districts.",
  },
  {
    label: "Strategic setting",
    value: "M-1 · CPEC · GT Road",
    description: "Positioned near Burhan Interchange with access to major regional routes.",
  },
] as const;

export const plotCategories = [
  {
    name: "Residential plots",
    sizes: ["3.5 Marla", "5 Marla", "10 Marla", "1 Kanal"],
  },
  {
    name: "Paradise Heights",
    sizes: ["2 Kanal", "4 Kanal", "8 Kanal"],
  },
  {
    name: "Awami Block",
    sizes: ["4 Marla", "6 Marla"],
  },
  {
    name: "Commercial Block",
    sizes: ["2.5 Marla", "4 Marla", "7 Marla"],
  },
] as const;

export const accessPoints = [
  "Burhan Interchange",
  "M-1 Motorway",
  "Main GT Road",
  "CPEC Route",
  "New City Wah",
  "Hazara Motorway",
  "Brahma Jhang Bahtar Interchange",
  "Quaid Avenue",
  "Islamabad International Airport",
  "M-2 Motorway",
  "Jhang Bahtar Road",
  "Thalian Interchange",
] as const;

export const masterPlanAmenities = [
  "Glow Park",
  "Waterfront District",
  "Dancing Fountain",
  "Botanical Garden",
  "Bosporus Bridge",
  "Football Ground",
  "Cricket Stadium",
  "Tennis Courts",
  "Basketball Court",
  "Mini Golf Course",
  "Gymnasium",
  "Hospital",
  "Community Center",
  "Schools and educational institutes",
  "Mosques and commercial areas",
] as const;

export const awamiBlockFeatures = [
  "Premium infrastructure",
  "Eco-friendly environment",
  "Botanical garden",
  "Medical units",
  "Educational centers",
  "Fitness areas",
  "Filtration plants",
  "Mosque",
] as const;

export const developerProjects = [
  "New City Wah Cantt",
  "Avalon Plaza Rawalpindi",
  "New City Paradise Lahore",
] as const;

export type SalesPartner = {
  name: string;
  logo: string;
};

export type SalesPartnerCategory = {
  name: string;
  number: string;
  partners: SalesPartner[];
};

export const salesPartnerCategories: SalesPartnerCategory[] = [
  {
    name: "Platinum",
    number: "01",
    partners: [
      { name: "A&A Enterprises", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/AA.jpg" },
      { name: "AA Properties", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/AA_Properties.jpg" },
      { name: "Al Sadat Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Al_Sadat.jpg" },
      { name: "99 Marlaz", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/99Marlaz.jpg" },
      { name: "Ameer Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Ameer_Marketing-1.jpg" },
      { name: "BGA Enterprises", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/BGA-1.jpg" },
      { name: "Current Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Current_Marketing-1.jpg" },
      { name: "Estate Land Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Estate_Land-1.jpg" },
      { name: "F1 Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/F1_Marketing-1.jpg" },
      { name: "Ilhaaq Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/ILHAAQ.jpg" },
      { name: "Jawad Khan Builders", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Jawad_Khan-1.jpg" },
      { name: "Makan Solutions", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Makan-1.jpg" },
      { name: "MSAT Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/MsAT-1.jpg" },
      { name: "Mybro", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Mybro-1.jpg" },
      { name: "NTS Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/NTS-1.jpg" },
      { name: "Arena Properties", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Platinum-1.jpg" },
      { name: "Property Bank", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Property_Bank-1.jpg" },
      { name: "Rhaas Group", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Rhaas_Group-1.jpg" },
      { name: "Sky Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Sky_Marketing-1.jpg" },
      { name: "Subhan Group of Companies", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Subhan-1.jpg" },
      { name: "Tagine Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Tagine_Marketing-1.jpg" },
      { name: "Tajarat Properties", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Tajarat-1.jpg" },
      { name: "Tari Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Tari_Marketing.jpg" },
      { name: "Twin Cities Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Twin_Cities_Marketing.png" },
      { name: "Glow Star", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Glow.Starjpg.jpg" },
    ],
  },
  {
    name: "Gold",
    number: "02",
    partners: [
      { name: "Askari Real Estate & Builders", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Askari_Real.jpg" },
      { name: "Red Leaf", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/RedLeaf.jpg" },
      { name: "Sultan Mehmood & Sons", logo: "https://newcityparadise.com/wp-content/uploads/2023/04/SMS.jpg" },
      { name: "5 Star Real Estate", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/5Star.jpg" },
      { name: "Skylark Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/skylark.jpg" },
    ],
  },
  {
    name: "Silver",
    number: "03",
    partners: [
      { name: "Moon Stone Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver03-1.jpg" },
      { name: "IS Enterprises", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver02-1.jpg" },
      { name: "AK Estate and Builders", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver01-1.jpg" },
      { name: "RJ Marketing & Developers", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/RJ_Marketing.jpg" },
      { name: "Land Venture", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver17-1.jpg" },
      { name: "PRE GOLD", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/RRE-1.jpg" },
      { name: "Afan Enterprise", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver22.jpg" },
      { name: "C7 Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver23.jpg" },
      { name: "Millionaire Business Solutions", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver21.jpg" },
      { name: "Property Hi-Tech Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver25.png" },
      { name: "Pasban Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver26.jpg" },
      { name: "Land Provider", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver27.jpg" },
      { name: "Khan Marketing", logo: "https://newcityparadise.com/wp-content/uploads/2023/04/Silver28.jpg" },
      { name: "AK Builder", logo: "https://newcityparadise.com/wp-content/uploads/2023/04/Silver29.jpg" },
      { name: "4P Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver20-2.jpg" },
      { name: "Bajaan Enterprises", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver16-2.jpg" },
      { name: "Estate Ville", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver15-2.jpg" },
      { name: "Al Rauf", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver14-2.jpg" },
      { name: "S&A Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver13-2.jpg" },
      { name: "Invent Vista Realtors", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver12-2.jpg" },
      { name: "BM Associates", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver10-2.jpg" },
      { name: "Mehran Real Estate", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver11-1.jpg" },
      { name: "Circle Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver18-1.jpg" },
      { name: "Executive Enterprises", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver09-1.jpg" },
      { name: "Pak Land Associates", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver08-1.jpg" },
      { name: "RIWA Associates", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver07-1.jpg" },
      { name: "Abbasi group of Marketing", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver06-1.jpg" },
      { name: "KPK Real Estate & Builder's", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver05-1.jpg" },
      { name: "Marjan Real Estate", logo: "https://www.newcityparadise.com/wp-content/uploads/2023/04/Silver04-2.jpg" },
    ],
  },
];

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

export type BlogPost = {
  slug: string;
  title:  string;
  date: string;
  displayDate: string;
  category: string;
  excerpt: string;
  image: string;
  sourceUrl: string;
  content: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-investment-opportunity-in-islamabad-new-city-paradise",
    title: "Best Investment Opportunity in Islamabad:\n New City Paradise",
    date: "2023-05-24",
    displayDate: "24 May 2023",
    category: "Investment",
    excerpt:
      "Explore a PHATA-approved community on the M-1 Motorway, shaped by an established developer, a strategic location, and accessible opportunities for investors.",
    image: "/images/grand-estate.jpg",
    sourceUrl:
      "https://newcityparadise.com/2023/05/24/best-investment-opportunity-in-islamabad-new-city-paradise/",
    content: [
      {
        heading: "A connected address on Islamabad Motorway",
        paragraphs: [
          "New City Paradise is planned near Burhan Interchange on the M-1 Islamabad Motorway, along the northern CPEC corridor. Its position also provides access from the Islamabad–Peshawar GT Road (N-5), connecting the community with Islamabad, Rawalpindi, Wah, and the northern Punjab region.",
          "A broad central boulevard establishes the arrival experience and forms a primary route through the master plan. This combination of regional access and an environment removed from dense city traffic is central to the project’s residential and commercial appeal.",
        ],
      },
      {
        heading: "The developer behind the vision",
        paragraphs: [
          "New City Paradise is a flagship development by New City Housing Projects, a group associated with real estate development, town planning, infrastructure, and construction for more than four decades. Its portfolio includes residential communities and commercial destinations created for a wide range of buyers.",
          "The group’s earlier work includes New City Phase 1 and Phase 2, New City Arcade, Avalon Plaza, and Business Square. Together, these projects demonstrate experience across gated communities, retail, offices, apartments, and family-focused public spaces.",
        ],
      },
      {
        heading: "What sets the project apart",
        paragraphs: [
          "The project combines generously planned plots with modern infrastructure and an accessible ownership model. It is intended to serve both families searching for a future home and buyers considering a longer-term property investment near the twin cities.",
          "Residential districts are supported by commercial areas, community facilities, green spaces, and recreational destinations so daily essentials can remain close to home.",
        ],
      },
      {
        heading: "PHATA approval and project planning",
        paragraphs: [
          "The project states that it holds approval from the Punjab Housing and Town Planning Agency under NOC number DG-PHATA/W-I/PHS/61/2022. Buyers should always confirm the latest approval scope, plot status, and documentation with the relevant authority and the official project team before making a decision.",
          "The master plan has been developed with input from architects, engineers, and town planners, bringing residential, commercial, civic, and leisure uses together within one connected community.",
        ],
        bullets: [
          "Residential plots: 3.5 Marla, 5 Marla, 10 Marla, and 1 Kanal",
          "Commercial plots: 2.5 Marla, 4 Marla, and 7 Marla",
          "A central boulevard connecting the community’s primary districts",
          "Flexible payment structures, subject to the latest official schedule",
        ],
      },
      {
        heading: "A community designed around everyday life",
        paragraphs: [
          "New City Paradise is envisioned as more than a collection of plots. Its planning brings together security, mobility, recreation, education, healthcare, worship, and commerce in a family-oriented setting.",
        ],
        bullets: [
          "Gated access, security personnel, and planned surveillance",
          "Parks, playgrounds, walking routes, and landscaped open space",
          "Cricket, football, and other sports facilities",
          "Schools, healthcare facilities, mosques, and community centres",
          "Commercial districts, dining, and everyday retail",
          "Planned utility and waste-management infrastructure",
        ],
      },
      {
        heading: "Making an informed investment decision",
        paragraphs: [
          "Location, developer experience, approvals, plot variety, and planned amenities all contribute to the project’s investment case. Property values and returns, however, can change with market conditions, development progress, and individual plot circumstances.",
          "Prospective buyers should review the latest payment plan, verify documents and possession timelines, visit the site, and obtain independent professional advice before committing funds.",
        ],
      },
    ],
  },
  {
    slug: "9-reasons-you-should-invest-in-new-city-paradise",
    title: "9 Reasons You Should Invest in New City Paradise",
    date: "2023-05-24",
    displayDate: "24 May 2023",
    category: "Insights",
    excerpt:
      "From motorway connectivity and PHATA approval to contemporary amenities and flexible plans, discover what distinguishes this growing community.",
    image: "/images/isla.jpg",
    sourceUrl:
      "https://newcityparadise.com/2023/05/24/9-reasons-you-should-invest-in-new-city-paradise/",
    content: [
      {
        heading: "1. A strategically connected location",
        paragraphs: [
          "The project sits on the M-1 Islamabad Motorway near Burhan Interchange and the northern CPEC route, with access from the Islamabad–Peshawar GT Road. This location connects residents with major employment, commercial, and transport corridors while maintaining distance from the busiest urban areas.",
        ],
      },
      {
        heading: "2. An experienced development team",
        paragraphs: [
          "New City Developers brings an established portfolio across Islamabad, Wah, and surrounding markets. Its experience in residential communities, infrastructure, and commercial projects gives buyers a visible track record to review when assessing the development.",
        ],
      },
      {
        heading: "3. PHATA approval",
        paragraphs: [
          "New City Paradise states that it has obtained a No Objection Certificate from the Punjab Housing and Town Planning Agency. Regulatory approval is an important part of due diligence because it establishes the planning framework under which a development proceeds. Buyers should still verify the latest approval details and the status of their chosen plot.",
        ],
      },
      {
        heading: "4. Long-term investment potential",
        paragraphs: [
          "Infrastructure growth around motorway and CPEC-linked routes can support demand for well-planned property over time. The project’s mix of residential and commercial inventory gives buyers different ways to participate, although returns are never guaranteed and depend on market conditions, delivery, location, and timing.",
        ],
      },
      {
        heading: "5. Amenities for contemporary living",
        paragraphs: [
          "The master plan is intended to support modern family routines with landscaped parks, playgrounds, fitness and sports facilities, community centres, commercial areas, education, and healthcare close to residential districts.",
        ],
      },
      {
        heading: "6. A greener community vision",
        paragraphs: [
          "Green spaces, planned waste systems, walkable recreation, and energy-conscious infrastructure form part of the project’s environmental direction. These elements aim to create a healthier setting and a more balanced relationship between buildings and open land.",
        ],
      },
      {
        heading: "7. Flexible routes to ownership",
        paragraphs: [
          "Multiple plot sizes and instalment-based payment options are designed to serve different budgets. Current pricing, availability, charges, and schedules can change, so every buyer should obtain the latest signed plan directly from an authorized source.",
        ],
      },
      {
        heading: "8. A complete real estate proposition",
        paragraphs: [
          "New City Paradise brings together location, approval, developer experience, infrastructure, and lifestyle planning. That combination allows prospective residents to assess the project as both a future address and a property purchase within the wider Islamabad region.",
        ],
      },
      {
        heading: "9. A sense of community",
        paragraphs: [
          "A successful neighborhood is shaped by more than roads and plots. Shared parks, sports areas, community facilities, and local retail encourage daily interaction and give families places to gather, play, learn, and build lasting connections.",
          "Before investing, visit the development, compare available blocks, review legal documents, and consider independent financial and legal advice.",
        ],
      },
    ],
  },
  {
    slug: "come-home-to-extraordinary-at-new-city-paradise",
    title: "Come Home to Extraordinary at New City Paradise",
    date: "2023-05-19",
    displayDate: "19 May 2023",
    category: "Lifestyle",
    excerpt:
      "A closer look at the project’s modern family lifestyle, sustainable planning, strong connectivity, and residential choices from 3.5 Marla to 1 Kanal.",
    image: "/images/paradise-residence.jpg",
    sourceUrl:
      "https://newcityparadise.com/2023/05/19/come-home-to-extraordinary-at-new-city-paradise/",
    content: [
      {
        heading: "A meeting point for lifestyle and opportunity",
        paragraphs: [
          "New City Paradise is conceived as a contemporary housing community where family living and property opportunity meet. Residential choices include 3.5 Marla, 5 Marla, 10 Marla, and 1 Kanal plots, allowing households to select a scale that matches their plans.",
          "Its setting on the M-1 Motorway and CPEC Route (North) provides regional connectivity while preserving a quieter atmosphere beyond the congestion of central Islamabad and Rawalpindi.",
        ],
      },
      {
        heading: "Credibility built through experience",
        paragraphs: [
          "The project is developed by New City Developers, whose wider portfolio spans residential, commercial, and infrastructure work. For prospective buyers, an established body of completed and ongoing projects offers useful evidence when reviewing a developer’s delivery approach and construction standards.",
        ],
      },
      {
        heading: "Planning approval and buyer confidence",
        paragraphs: [
          "The development states that it secured PHATA approval before launch. Planning approval is one part of responsible property due diligence, alongside confirmation of the relevant plot, payment record, development status, and sale documentation.",
        ],
      },
      {
        heading: "Three advantages of the location",
        paragraphs: [
          "The Islamabad Motorway and CPEC corridor connect New City Paradise with major regional routes. The address may benefit from future infrastructure and economic activity along these corridors, while the surrounding open landscape creates a calmer residential environment.",
        ],
        bullets: [
          "Direct access to the M-1 and nearby Burhan Interchange",
          "Proximity to the northern CPEC corridor and GT Road network",
          "A lower-density setting with open space and cleaner surroundings",
        ],
      },
      {
        heading: "Modern, family-oriented living",
        paragraphs: [
          "The community plan places parks, play areas, fitness facilities, sports, and gathering spaces within reach of residential blocks. This mix supports both everyday convenience and a more active social life for children, adults, and older residents.",
          "Commercial areas, education, healthcare, and places of worship further reduce the need to travel for routine essentials.",
        ],
      },
      {
        heading: "A sustainable direction",
        paragraphs: [
          "Landscaped areas, planned waste management, walking and cycling opportunities, and energy-conscious systems are intended to reduce environmental impact and improve daily wellbeing. The long-term value of these ideas depends on careful delivery and continued community management.",
        ],
      },
      {
        heading: "Considering the investment case",
        paragraphs: [
          "Ongoing development and regional connectivity can create future demand, but no property investment can promise a fixed return. Buyers should consider their time horizon, budget, plot location, development stage, and the latest official terms before making a commitment.",
        ],
      },
    ],
  },
  {
    slug: "the-benefits-of-investing-in-new-city-paradise-3-5-marla",
    title: "The Benefits of Investing in New City Paradise 3.5 Marla",
    date: "2023-05-01",
    displayDate: "01 May 2023",
    category: "Plots",
    excerpt:
      "Learn why the approachable 3.5 Marla residential option offers a practical route to ownership in a connected, amenity-rich community.",
    image:
      "https://newcityparadise.com/wp-content/uploads/2023/05/3.5_Marla-1015x698.jpg",
    sourceUrl:
      "https://newcityparadise.com/2023/05/01/the-benefits-of-investing-in-new-city-paradise-3-5-marla/",
    content: [
      {
        heading: "An approachable plot size in a planned community",
        paragraphs: [
          "The 3.5 Marla residential plot is one of the most accessible choices within New City Paradise. It gives buyers the opportunity to plan a compact family home while remaining connected to the same wider infrastructure and amenities as larger residential categories.",
          "The project is located near Burhan Interchange on the M-1 Islamabad–Peshawar Motorway and CPEC Route (North), placing it within reach of major regional road networks.",
        ],
      },
      {
        heading: "Why buyers consider 3.5 Marla",
        paragraphs: [
          "A smaller plot can lower the initial cost of land and make future construction more manageable. For first-time buyers, smaller families, and overseas Pakistanis planning a home in the region, it can provide a practical entry point into a master-planned development.",
        ],
        bullets: [
          "A more accessible residential plot category",
          "Efficient scale for a thoughtfully designed family home",
          "Access to community-wide security and infrastructure",
          "Proximity to parks, commercial areas, and daily services",
          "Potential suitability for both end users and long-term buyers",
        ],
      },
      {
        heading: "Part of a wider residential portfolio",
        paragraphs: [
          "New City Paradise also offers 5 Marla, 10 Marla, and 1 Kanal residential categories, as well as selected commercial plot sizes. The 3.5 Marla option expands that range for households seeking a smaller and potentially more affordable starting point.",
        ],
      },
      {
        heading: "Modern facilities close to home",
        paragraphs: [
          "Residents are intended to benefit from the development’s broader network of parks, recreation, commercial areas, education, healthcare, worship, security, and utility infrastructure. These shared facilities are an important part of the value proposition for compact plots.",
        ],
      },
      {
        heading: "What to confirm before booking",
        paragraphs: [
          "Ask the official sales team for current availability, block and plot location, total price, instalment dates, development charges, transfer conditions, and expected possession. Approval details and all paperwork should also be independently verified before payment.",
          "Property prices and returns can move in either direction, so the decision should be based on personal needs, affordability, and careful due diligence rather than projections alone.",
        ],
      },
    ],
  },
  {
    slug: "new-city-paradise-perfectly-positioned-in-the-vicinitys-most-strategic-address",
    title: "New City Paradise: Perfectly Positioned at a Strategic Address",
    date: "2023-04-27",
    displayDate: "27 April 2023",
    category: "Location",
    excerpt:
      "Discover a self-sufficient community surrounded by open landscapes, with direct access to the M-1, CPEC Route, and Islamabad–Peshawar GT Road.",
    image:
      "https://newcityparadise.com/wp-content/uploads/2023/04/image-047-1015x698.jpg",
    sourceUrl:
      "https://newcityparadise.com/2023/04/27/new-city-paradise-perfectly-positioned-in-the-vicinitys-most-strategic-address-2/",
    content: [
      {
        heading: "Dreams begin in a self-sufficient community",
        paragraphs: [
          "New City Paradise is planned as a modern neighborhood shaped by generous landscapes and a broad mix of everyday facilities. Homes, education, healthcare, leisure, recreation, and local commerce are brought together so residents can build a fuller life within one connected setting.",
        ],
      },
      {
        heading: "A lifestyle closer to nature",
        paragraphs: [
          "Open green areas, linear parks, walking routes, and family recreation are intended to soften the built environment. The result is a community vision where residents can enjoy space and natural surroundings without giving up convenient access to services.",
        ],
      },
      {
        heading: "Perfectly positioned",
        paragraphs: [
          "The development is located near Burhan Interchange, linking it with the Islamabad Motorway M-1, the northern CPEC route, and GT Road. These connections place it on an important route between Islamabad, northern Pakistan, and Punjab.",
          "The project states that it holds PHATA approval. Prospective buyers should verify the current NOC scope and individual plot documentation as part of their normal due-diligence process.",
        ],
      },
      {
        heading: "Where community, leisure, and nature meet",
        paragraphs: [
          "The plan combines quiet residential districts with shared destinations for activity, entertainment, health, and social life. A central boulevard, green areas, retail, food, and sports facilities are designed to give the community a recognizable heart.",
        ],
        bullets: [
          "Glow Park and a waterfront district",
          "Botanical gardens, landscaped parks, and play areas",
          "Cricket, football, tennis, basketball, volleyball, and mini golf",
          "A gymnasium, hospital, schools, and community centres",
          "Commercial areas with convenient retail and dining",
          "Walking, bicycle, and running routes",
        ],
      },
      {
        heading: "Homes at different scales",
        paragraphs: [
          "Residential choices range from compact plots to larger family addresses. The 3.5 and 5 Marla categories support efficient modern homes, while 10 Marla and 1 Kanal plots offer greater room for gardens, entertaining, and more expansive architecture.",
        ],
        bullets: [
          "3.5 Marla for accessible, compact living",
          "5 Marla for an efficient contemporary family home",
          "10 Marla for additional indoor and outdoor space",
          "1 Kanal for a larger, highly personalized residence",
        ],
      },
      {
        heading: "Signature community destinations",
        paragraphs: [
          "The waterfront district is planned as a family destination with play and food experiences, while Glow Park introduces illuminated art and themed recreation. A dedicated sports village supports active routines through courts, tracks, playgrounds, and outdoor fitness.",
          "Community centres and children’s play areas complete the social layer of the plan, creating places for neighbors to meet and families to spend time together.",
        ],
      },
    ],
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

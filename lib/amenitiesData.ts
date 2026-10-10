export interface AmenityItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Nature & Leisure" | "Sports & Fitness" | "Infrastructure & Health";
  description: string;
  image: string;
  highlight?: string;
  tag: string;
}

export const AMENITIES_DATA: AmenityItem[] = [
  {
    id: "glow-park",
    title: "Glow Park",
    subtitle: "A Luminous Night Sanctuary",
    category: "Nature & Leisure",
    tag: "Signature Landmark",
    highlight: "Illuminated nighttime spectacles & art installations",
    description:
      "Get ready to be amazed by Glow Park, a magical oasis that illuminates the night sky with its breathtaking displays of light and color. Designed as a wonder for families and residents of all ages.",
    image: "/images/amenities/glow-park.jpg",
  },
  {
    id: "main-boulevard",
    title: "330 Feet Wide Main Boulevard",
    subtitle: "Master-Engineered Grandeur",
    category: "Infrastructure & Health",
    tag: "Mega Arterial Avenue",
    highlight: "Seamless flow, lush median landscaping & cycling paths",
    description:
      "Experience the best of outdoor living with the wide and open spaces of the 330 Feet Wide Main Boulevard, perfect for serene evening walks, morning jogs, and smooth transit across the community.",
    image: "/images/amenities/main-boulevard.jpg",
  },
  {
    id: "water-front",
    title: "Waterfront District",
    subtitle: "Tranquil Waterside Living",
    category: "Nature & Leisure",
    tag: "Scenic Promenade",
    highlight: "Waterside café esplanades & relaxing sunsets",
    description:
      "Unwind at the Waterfront District, where you can relax, soak up the sun, and enjoy picturesque water views that bring resort-style serenity into daily life.",
    image: "/images/amenities/water-front.jpg",
  },
  {
    id: "dancing-fountain",
    title: "Dancing Fountain",
    subtitle: "Symphony of Water & Light",
    category: "Nature & Leisure",
    tag: "Visual Spectacle",
    highlight: "Choreographed musical fountains in the central plaza",
    description:
      "Be captivated by the mesmerizing displays of the Dancing Fountain, a true feast for the eyes and ears that enlivens evenings with choreographed water arcs and illuminating light shows.",
    image: "/images/amenities/dancing-fountain.jpg",
  },
  {
    id: "botanical-garden",
    title: "Botanical Garden",
    subtitle: "Lush Greenery & Floral Sanctuaries",
    category: "Nature & Leisure",
    tag: "Ecological Haven",
    highlight: "Curated indigenous flora, peaceful seating & shade trees",
    description:
      "Take a stroll through the lush greenery of the Botanical Garden, a peaceful escape from the hustle and bustle of city life, featuring exotic botanicals and contemplative walkways.",
    image: "/images/amenities/botanical-garden.jpg",
  },
  {
    id: "bosporus-bridge",
    title: "Bosporus Bridge Replica",
    subtitle: "Architectural Triumph",
    category: "Infrastructure & Health",
    tag: "Iconic Landmark",
    highlight: "Grand engineering design connecting key sectors",
    description:
      "Be inspired by the beauty of the Bosphorus Bridge, a symbol of engineering prowess and architectural elegance that pays tribute to world-renowned design.",
    image: "/images/amenities/bosporus-bridge.jpg",
  },
  {
    id: "commercial-areas",
    title: "Commercial & Retail Hub",
    subtitle: "High-Street Shopping & Fine Dining",
    category: "Infrastructure & Health",
    tag: "Lifestyle Center",
    highlight: "Flagship boutiques, alfresco cafés and essentials",
    description:
      "Enjoy hassle-free shopping and dining with the convenient Commercial Areas, featuring a wide range of retail, financial services, supermarkets, and diverse gourmet dining options.",
    image: "/images/amenities/commercial-areas.jpg",
  },
  {
    id: "hospital",
    title: "State-of-the-Art Hospital",
    subtitle: "24/7 World-Class Healthcare",
    category: "Infrastructure & Health",
    tag: "Healthcare",
    highlight: "Modern emergency care, specialized clinics & pharmacy",
    description:
      "Stay well with top-notch healthcare facilities right at your doorstep, including a fully-equipped multi-specialty hospital staffed with qualified medical professionals.",
    image: "/images/amenities/hospital.jpg",
  },
  {
    id: "gymnasium",
    title: "Modern Gymnasium & Wellness",
    subtitle: "Peak Fitness & Recovery",
    category: "Sports & Fitness",
    tag: "Wellness",
    highlight: "Technogym equipment, personal training & aerobics studios",
    description:
      "Get fit and stay healthy with the latest workout equipment at the on-site gymnasium, offering dedicated cardio, strength training, and wellness coaching spaces.",
    image: "/images/amenities/gymnasium.jpg",
  },
  {
    id: "cricket-ground",
    title: "International Standard Cricket Ground",
    subtitle: "The Heart of Community Sports",
    category: "Sports & Fitness",
    tag: "Athletics",
    highlight: "Lush turf wicket, player pavilion & floodlit fixtures",
    description:
      "Cricket lovers rejoice! With the well-manicured Cricket Ground, you can practice in the nets or compete in high-energy weekend league matches with teammates.",
    image: "/images/amenities/cricket-ground.jpg",
  },
  {
    id: "football-field",
    title: "Full-Size Football Field",
    subtitle: "Championship Turf",
    category: "Sports & Fitness",
    tag: "Athletics",
    highlight: "Professional grade grass surface with training academies",
    description:
      "Score big with a match on the pristine Football Field, where the grass is always green, lines are razor-sharp, and the action never stops.",
    image: "/images/amenities/football-field.jpg",
  },
  {
    id: "tennis-court",
    title: "All-Weather Tennis Courts",
    subtitle: "Precision & Agility",
    category: "Sports & Fitness",
    tag: "Racquet Sports",
    highlight: "Pro-cushion synthetic surface with night lighting",
    description:
      "Stay active and challenge your friends to a game of tennis on the state-of-the-art courts, built to tournament specifications with evening illumination.",
    image: "/images/amenities/tennis-court.jpg",
  },
  {
    id: "mini-golf",
    title: "Championship Mini Golf",
    subtitle: "Leisurely Putting Greens",
    category: "Sports & Fitness",
    tag: "Family Recreation",
    highlight: "Landscaped multi-tier holes and putting challenges",
    description:
      "Put your skills to the test with a round of mini-golf, crafted with undulating green courses and creative hazards, perfect for families and friendly challenges.",
    image: "/images/amenities/mini-golf.jpg",
  },
  {
    id: "basketball-court",
    title: "Regulation Basketball Court",
    subtitle: "Fast-Paced Hardwood Action",
    category: "Sports & Fitness",
    tag: "Court Sports",
    highlight: "High-traction acrylic court with regulation acrylic backboards",
    description:
      "Shoot hoops and show off your skills on the modern Basketball Court, built for pick-up games, intensive drills, and friendly neighborhood tournaments.",
    image: "/images/amenities/basketball-court.jpg",
  },
];

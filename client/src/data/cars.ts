export interface Car {
  id: string;
  slug: string;
  name: string;
  category: string;
  pricePerDay: number;

  image: string;
  gallery: string[];
  description: string;
  features: string[];
  specifications: {
    transmission: string;
    fuel: string;
    seats: number;
    luggage: string;
  };
}

export const cars: Car[] = [
  // VIP - 15 Million (150 000 DA)
  {
    id: "1",
    slug: "mercedes-amg-gts-v8",
    name: "Mercedes AMG GTS V8",
    category: "VIP Sport Luxury",
    pricePerDay: 150000, // 15 million = 150 000 DA

    image: "/images/cars/mercedes-amg-gts/main.png",
    gallery: [
      "/images/cars/mercedes-amg-gts/side.png",
      "/images/cars/mercedes-amg-gts/profile.png",
      "/images/cars/mercedes-amg-gts/rear.png",
    ],
    description: "La Mercedes-AMG GT S V8 incarne le summum du luxe et de la sportivité VIP. Avec son design racé et son moteur V8 puissant, elle offre des sensations de conduite incomparables.",
    features: [
      "Moteur V8 biturbo 4.0L",
      "Climatisation automatique",
      "GPS intégré",
      "Bluetooth",
      "Caméra de recul",
      "Sièges en cuir Nappa",
      "Système audio Burmester 3D"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 2,
      luggage: "1 valise"
    }
  },

  // Location 8 Million (80 000 DA)
  {
    id: "2", 
    slug: "gle",
    name: "Mercedes GLC",
    category: "SUV Premium",
    pricePerDay: 50000, // 8 million = 80 000 DA
    image: "/images/cars/mercedes-glc/glc1.jpg",
    gallery: [
      "/images/cars/mercedes-glc/glc1.jpg",
      "/images/cars/mercedes-glc/glc2.jpg",
      "/images/cars/mercedes-glc/glc3.jpg",
    ],
    description: "Le Mercedes GLC représente l'excellence du SUV de luxe allemand. Spacieux et technologique, il offre confort et prestance pour tous vos déplacements.",
    features: [
      "MBUX système multimédia",
      "Caméras 360° surround", 
      "Suspension AIRMATIC",
      "Climatisation THERMOTRONIC",
      "Toit panoramique coulissant",
      "Jantes AMG 20 pouces"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence", 
      seats: 5,
      luggage: "4 valises"
    }
  },

 

  // Location 6 Million (60 000 DA)
  {
    id: "4",
    slug: "mercedes-cls-maybach", 
    name: "Mercedes CLS Maybach",
    category: "Berline Luxury",
    pricePerDay: 60000,
    image: "/images/cars/cls-maybach/maybach1.jpg",
    gallery: [
      "/images/cars/cls-maybach/maybach2.jpg",
      "/images/cars/cls-maybach/maybach3.jpg",
      "/images/cars/cls-maybach/maybach4.jpg",
      "/images/cars/cls-maybach/maybach5.png",
    ],
    description: "La Mercedes CLS Maybach représente l'excellence du luxe automobile allemand. Cette berline coupé quatre portes allie élégance, performance et technologie de pointe.",
    features: [
      "MBUX Hyperscreen",
      "Système audio Burmester 4D",
      "Sièges Maybach chauffants massants", 
      "Suspension AIRMATIC",
      "Éclairage d'ambiance 64 couleurs",
      "Toit panoramique Magic Sky Control"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 4,
      luggage: "3 valises"
    }
  },

  // Location 6 Million (60 000 DA)
  {
    id: "5",
    slug: "porsche-panamera",
    name: "Porsche Panamera", 
    category: "Berline Sport Luxury",
    pricePerDay: 60000,
    image: "/images/cars/porsche-panamera/panamera-2.png",
    gallery: [
      "/images/cars/porsche-panamera/panamera-4.png",
      "/images/cars/porsche-panamera/panamera-5.png",
      "/images/cars/porsche-panamera/panamera-6.png",
    ],
    description: "La Porsche Panamera représente l'excellence de la berline sportive allemande. Avec son éclairage LED et ses finitions haut de gamme, elle incarne le luxe sportif.",
    features: [
      "PCM 6.0 écran curved",
      "Système audio Burmester 3D", 
      "Suspension pneumatique PASM",
      "Climatisation 4 zones",
      "Sièges sport adaptatifs",
      "Freins céramique PCCB"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 4,
      luggage: "3 valises"
    }
  },

  // Location 5 Million (50 000 DA)
  {
    id: "6",
    slug: "mercedes-classe-c-nouvelle",
    name: "Mercedes Classe C Nouvelle", 
    category: "Berline Premium",
    pricePerDay: 50000,
    image: "/images/cars/mercedes-class-c/class-c4.jpg",
    gallery: [
      "/images/cars/mercedes-class-c/class-c1.jpg",
      "/images/cars/mercedes-class-c/class-c2.jpg",
      "/images/cars/mercedes-class-c/class-c3.jpg",
        "/images/cars/mercedes-class-c/class-c4.jpg",
    ],
    description: "La nouvelle Mercedes Classe C incarne l'élégance et l'innovation de la berline premium allemande. Technologie avancée et confort raffiné.",
    features: [
      "MBUX Infotainment nouvelle génération",
      "Caméras 360° haute résolution",
      "Sièges chauffants et massants",
      "Éclairage LED adaptatif",
      "Assistant de conduite intelligent", 
      "Système audio Burmester premium"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "3 valises"
    }
  },

  // Location 5 Million (50 000 DA)
  {
    id: "7", 
    slug: "mercedes-glc",
    name: "Mercedes GLE",
    category: "SUV Premium",
    pricePerDay: 80000,
    image: "/images/cars/mercedes-gle/gle-1.png",
    gallery: [
       "/images/cars/mercedes-gle/gle-1.png", 
     "/images/cars/mercedes-gle/gle-2.png",  
   "/images/cars/mercedes-gle/gle-3.png",
      "/images/cars/mercedes-gle/gle-8.png",
    ],
    description: "Le Mercedes GLE combine élégance sportive et polyvalence urbaine. Ce SUV premium offre le parfait équilibre entre performance et confort.",
    features: [
      "MBUX système multimédia",
      "Caméras 360° surround",
      "Suspension AIRMATIC", 
      "Climatisation THERMOTRONIC",
      "Toit panoramique coulissant",
      "Jantes AMG 20 pouces"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "4 valises"
    }
  },

  // Location 4 Million 500 (45 000 DA)
  {
    id: "8",
    slug: "tiguan-nouveau",
    name: "Volkswagen Tiguan Nouveau",
    category: "SUV Familial Premium", 
    pricePerDay: 45000,
    image: "/images/cars/volkswagen-tiguan/tiguan1.jpg",
    gallery: [
      "/images/cars/volkswagen-tiguan/tiguan2.jpg",
      "/images/cars/volkswagen-tiguan/tiguan3.jpg",
      "/images/cars/volkswagen-tiguan/tiguan4.png",
    ],
    description: "Le nouveau Volkswagen Tiguan représente l'évolution du SUV familial allemand. Design moderne et technologies avancées pour tous vos déplacements.",
    features: [
      "Digital Cockpit Pro",
      "Système Discover Pro",
      "4MOTION traction intégrale",
      "Climatisation automatique tri-zone",
      "Sièges chauffants avant/arrière",
      "Hayon électrique"
    ],
    specifications: {
      transmission: "Automatique", 
      fuel: "Essence",
      seats: 5,
      luggage: "4 valises"
    }
  },

  // Location 4 Million 500 (45 000 DA)
  {
    id: "9",
    slug: "audi-q3",
    name: "Audi Q3",
    category: "SUV Compact Premium",
    pricePerDay: 45000,
    image: "/images/cars/Q3/Q3-1_1749866559805.png", 
    gallery: [
      "/images/cars/Q3/Q3-5_1749866559829.png",
      "/images/cars/Q3/Q3-8_1749866559831.png",
      "/images/cars/Q3/Q3-11_1749866559833.png",
    ],
    description: "L'Audi Q3 représente l'élégance du SUV compact premium allemand. Polyvalent et technologique, il offre confort et prestance.",
    features: [
      "Virtual Cockpit Plus",
      "MMI Navigation plus",
      "Quattro ultra AWD", 
      "Sièges sport S line",
      "Éclairage LED premium",
      "Hayon électrique"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "4 valises"
    }
  },

  // Location 3 Million 500 (35 000 DA)
  {
    id: "10",
    slug: "porsche-cayenne",
    name: "Porsche Cayenne", 
    category: "SUV Premium",
    pricePerDay: 35000,
    image: "/images/cars/cayenne/cayenne1.jpg",
    gallery: [
      "ages/cars/cayenne/cayenne2.jpg",
      "ages/cars/cayenne/cayenne3.jpg",
      "ages/cars/cayenne/cayenne4.jpg",
    ],
    description: "Le Porsche Cayenne représente l'excellence du SUV sportif allemand. Alliant luxe et performance, il offre une expérience de conduite exceptionnelle.",
    features: [
      "PCM 6.0 avec Apple CarPlay",
      "Système audio Bose Surround", 
      "Porsche Traction Management",
      "Suspension pneumatique PASM",
      "Sièges sport adaptatifs",
      "Toit panoramique"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "4 valises"
    }
  },

  // Location 3 Million 500 (35 000 DA)
  {
    id: "11",
    slug: "t-roc-cabriolet",
    name: "Volkswagen T-Roc Cabriolet", 
    category: "SUV Cabriolet",
    pricePerDay: 30000,
    image: "/images/cars/volkswagen-t-roc/troc 1_1749866915805.png",
    gallery: [
      "/images/cars/volkswagen-t-roc/troc 2_1749866915832.png",
      "/images/cars/volkswagen-t-roc/troc 4_1749866915834.png",
      "/images/cars/volkswagen-t-roc/troc 6_1749866915837.png",
    ],
    description: "Le Volkswagen T-Roc Cabriolet allie l'agilité du SUV compact à la liberté du cabriolet. Design moderne et plaisir de conduite à ciel ouvert.",
    features: [
      "Toit soft-top électrique",
      "Digital Cockpit", 
      "Composition Media",
      "Climatisation automatique",
      "Sièges chauffants",
      "Éclairage LED"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 4,
      luggage: "2 valises"
    }
  },

  // Location 3 Million 500 (35 000 DA)
  {
    id: "12",
    slug: "mercedes-classe-a-limousine", 
    name: "Mercedes Classe A",
    category: "Berline Compacte Premium",
    pricePerDay: 35000,
    image: "/images/cars/mercedes-a120/a120-1_1749864669974.png",
    gallery: [
      "/images/cars/mercedes-a120/a120-2_1749864669960.png",
      "/images/cars/mercedes-a120/a120-4_1749864669972.png",
      "/images/cars/mercedes-a120/a120-5_1749864669973.png",
    ],
    description: "La Mercedes Classe A combine élégance et performance dans un design compact premium. Technologie MBUX et confort raffiné.",
    features: [
      "MBUX Infotainment",
      "Caméras 360°", 
      "Sièges chauffants",
      "Éclairage LED adaptatif",
      "Assistant de conduite",
      "Système audio premium"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "3 valises"
    }
  },

  // Location 3 Million 500 (35 000 DA)
  {
    id: "13",
    slug: "audi-a6",
    name: "Audi A6", 
    category: "berline Premium",
    pricePerDay: 45000,
    image: "/images/cars/audi-a6/a6-1_1749864647977.png",
    gallery: [
      "/images/cars/audi-a6/a6-1_1749864647977.png",
      "/images/cars/audi-a6//a6-3_1749864647989.png",
      "/images/cars/audi-a6/a6-5_1749864647990.png",
    ],
    description: "L’Audi A6 incarne l’élégance et l’innovation de la berline premium allemande. Offrant confort, technologies de pointe et performances raffinées, elle transforme chaque trajet en une expérience haut de gamme.",
   features: [
  "Système MMI Navigation Plus avec écran tactile",
  "Système audio Bang & Olufsen",
  "Éclairage d’ambiance personnalisable",
  "Climatisation automatique 4 zones",
  "Sièges avant chauffants et ventilés",
  "Assistant de conduite adaptatif"
],
specifications: {
  transmission: "Automatique S tronic",
  fuel: "Essence ou Diesel",
  seats: 5,
  luggage: "5 valises"
  },
  },

  // Location 3 Million 500 (35 000 DA)
  {
    id: "14",
    slug: "golf-85",
    name: "Volkswagen Golf 8.5", 
    category: "Compacte Premium",
    pricePerDay: 35000,
    image: "/images/cars/volkswagen-golf-8.5/golf8.5-1.jpg",
    gallery: [
      "/images/cars/volkswagen-golf-8.5/golf8.5-2.jpg",
      "/images/cars/volkswagen-golf-8.5/golf8.5-3.jpg",
      "/images/cars/volkswagen-golf-8.5/golf8.5-4.jpg",
    ],
    description: "La Volkswagen Golf 8.5 représente l'évolution de la compacte de référence. Design affiné et technologies mises à jour pour une expérience optimisée.",
    features: [
      "Digital Cockpit Pro mis à jour",
      "Système Discover Pro", 
      "Climatisation automatique",
      "Sièges chauffants",
      "LED Matrix premium",
      "Assistant de conduite Travel Assist"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "3 valises"
    }
  },

  // Location 3 Million 500 (35 000 DA)
  {
    id: "15",
    slug: "passat",
    name: "Volkswagen Passat", 
    category: "Berline Familiale Premium",
    pricePerDay: 35000,
    image: "/images/cars/volkswagen-passat/passat3.jpg",
    gallery: [
      "/images/cars/volkswagen-passat/passat3.jpg",
      "/images/cars/volkswagen-passat/passat1.jpg",
      "/images/cars/volkswagen-passat/passat5.jpg",
    ],
    description: "La Volkswagen Passat incarne l'excellence de la berline familiale allemande. Spacieuse et élégante, parfaite pour les déplacements professionnels et familiaux.",
    features: [
      "Digital Cockpit Pro",
      "Discover Pro Navigation", 
      "Climatisation automatique tri-zone",
      "Sièges chauffants et massants",
      "Éclairage LED Matrix IQ.LIGHT",
      "Coffre électrique"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "4 valises"
    }
  },

  // Location 2 Million 900 (29 000 DA)
  {
    id: "16",
    slug: "golf-8-gtd", 
    name: "Volkswagen Golf 8 GTD",
    category: "Compacte Sport Diesel",
    pricePerDay: 30000, // 3 million = 30 000 DA (arrondi)
    image: "/images/cars/volkswagen-golf-8r/8r-1.png",
    gallery: [
      "/images/cars/volkswagen-golf-8r/8r-2.png",
      "/images/cars/volkswagen-golf-8r/8r-3.png",
      "/images/cars/volkswagen-golf-8r/8r-4.png",
    ],
    description: "La Volkswagen Golf 8 GTD combine performance diesel et efficacité. Version sportive avec finitions GTD exclusives et dynamique de conduite affirmée.",
    features: [
      "Digital Cockpit Pro GTD",
      "Moteur TDI 2.0L turbo", 
      "Suspension sport GTD",
      "Sièges sport Clark/Titan Black",
      "Freins sport avec étriers rouges",
      "Échappement sport GTD"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Diesel",
      seats: 5,
      luggage: "3 valises"
    }
  },

  // Location voiture pour 24h - 2 Million 400 (24 000 DA)
  {
    id: "17",
    slug: "audi-a1",
    name: "Audi A1", 
    category: "Citadine Premium",
    pricePerDay: 20000,
    image: "/images/cars/audi-a1/A1-1_1749863615324.png",
    gallery: [
      "/images/cars/audi-a1/A1-2_1749863615330.png",
      "/images/cars/audi-a1/A1-3_1749863615332.png",
      "/images/cars/audi-a1/A1-4_1749863615333.png",
      "/images/cars/audi-a1/A1-5_1749863615334.png",
      "/images/cars/audi-a1/A1-6_1749863615336.png",
    ],
    description: "L'Audi A1 représente la citadine premium par excellence. Compacte mais raffinée, elle allie style allemand et agilité urbaine pour vos locations 24h.",
    features: [
      "Virtual Cockpit 10.25\"",
      "MMI Navigation plus", 
      "Audi pre sense city",
      "Climatisation automatique",
      "Phares LED Matrix",
      "Sièges sport S line"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "2 valises"
    }
  },

  // Location voiture pour 24h - 2 Million 400 (24 000 DA)
  {
    id: "18",
    slug: "seat-leon",
    name: "SEAT León", 
    category: "Compacte Sportive",
    pricePerDay: 23000,
    image: "/images/cars/audi-a1/A1-1_1749863615324.png",
    gallery: [
      "/images/cars/audi-a1/A1-2_1749863615330.png",
      "/images/cars/audi-a1/A1-3_1749863615332.png",
      "/images/cars/audi-a1/A1-4_1749863615333.png",
    ],
    description: "La SEAT León combine design méditerranéen et technologie allemande. Compacte dynamique parfaite pour vos locations quotidiennes avec style et performance.",
    features: [
      "Digital Cockpit 10.25\"",
      "SEAT Drive Profile", 
      "Climatisation automatique",
      "Full LED Technology",
      "Wireless Full Link",
      "Sièges sport"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "3 valises"
    }
  },
   {
    id: "20", // Augmenter l'ID de 1
    slug: "jeep", // Nom unique pour l'URL
    name: "jeep renegade", 
    category: "SUV Compact",
    pricePerDay: 35000, // Prix en DA
    image: "/images/cars/jeep-renegade/jeep-1.jpg", // Photo principale
    gallery: [
      "/images/cars/jeep-renegade/jeep-4.jpg",
      "/images/cars/jeep-renegade/jeep-3.jpg",
      "/images/cars/jeep-renegade/jeep-2.jpg",
    ],
    description: "La Jeep Renegade incarne l’esprit d’aventure à l’américaine. Alliant robustesse, technologie moderne et design audacieux, elle offre une expérience de conduite unique, aussi bien en ville que sur les terrains les plus exigeants",
    features: [
  "Système Uconnect avec écran tactile",
  "Compatible Apple CarPlay et Android Auto",
  "Caméra de recul",
  "Régulateur de vitesse adaptatif",
  "Sièges avant chauffants",
  "Feux LED automatiques"
],
specifications: {
  transmission: "Automatique",
  fuel: "Essence ou Diesel",
  seats: 5,
  luggage: "3 à 4 valises"
    }
  },

   {
    id: "21", // Augmenter l'ID de 1
    slug: "golf-style", // Nom unique pour l'URL
    name: "Golf style", 
    category: "Compacte Premium",
    pricePerDay: 20000, // Prix en DA
    image: "/images/cars/Q3/Q3-1_1749866559805.png", // Photo principale
    gallery: [
      "/images/cars/Q3/Q3-1_1749866559805.png",
      "/images/cars/Q3/Q3-5_1749866559829.png",
      "/images/cars/Q3/Q3-8_1749866559831.png",
    ],
   description: "La Golf 8 Style incarne l’équilibre parfait entre design moderne, confort et technologies intelligentes. Élégante et connectée, elle offre une expérience de conduite fluide, aussi agréable en ville que sur autoroute.",
features: [
  "Digital Cockpit Pro 10,25 pouces",
  "Système d’infodivertissement avec écran tactile",
  "Compatibilité Apple CarPlay et Android Auto sans fil",
  "Éclairage IQ.Light à LED Matrix",
  "Aide au maintien dans la voie",
  "Climatisation automatique tri-zone"
],
specifications: {
  transmission: "Automatique DSG ou Manuelle",
  fuel: "Essence ou Diesel",
  seats: 5,
  luggage: "4 valises"
}


  },
];

export const getFeaturedCars = () => cars.slice(0, 4);
export const getCarBySlug = (slug: string) => cars.find(car => car.slug === slug);
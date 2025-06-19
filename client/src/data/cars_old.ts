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
  {
    id: "1",
    slug: "mercedes-amg-gts",
    name: "Mercedes AMG GTS",
    category: "Sport Luxury",
    pricePerDay: 60000,
    image: "/images/cars/mercedes-amg-gts/main.png",
    gallery: [
      "/images/cars/mercedes-amg-gts/side.png",
      "/images/cars/mercedes-amg-gts/profile.png",
      "/images/cars/mercedes-amg-gts/rear.png",
    ],
    description: "La Mercedes-AMG GT S incarne le summum du luxe et de la sportivité. Avec son design racé et son moteur puissant, elle offre des sensations de conduite incomparables pour tous vos trajets quotidiens ou escapades d'exception.",
    features: [
      "Climatisation automatique",
      "GPS intégré",
      "Bluetooth",
      "Caméra de recul",
      "Sièges en cuir",
      "Système audio premium"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 2,
      luggage: "1 valises"
    }
  },
  {
    id: "2",
    slug: "chevrolet-camaro",
    name: "Chevrolet Camaro",
    category: "Sport américaine",
    pricePerDay: 25000,
    image: "/images/cars/camaro/camaro-1_1749865600764.png",
    gallery: [
      "/images/cars/camaro/camaro-2_1749865600781.png",
      "/images/cars/camaro/camaro-3_1749865600782.png",
      "/images/cars/camaro/camaro-6_1749865600784.png",
    ],
    description: "La Chevrolet Camaro en finition exclusive turquoise métallisé représente l'essence de la puissance américaine. Cette muscle car iconique allie performances exceptionnelles et design spectaculaire dans l'écrin moderne de TechnoCars.",
    features: [
      "Système d'infodivertissement Chevrolet MyLink",
      "Sièges sport en cuir",
      "Échappement à valves actives",
      "Démarrage à distance",
      "Régulateur de vitesse adaptatif",
      "Éclairage ambiant à LED multicolore"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 2,
      luggage: "2 valises"
    }
  },

  {
    id: "4",
    slug: "mercedes-cls-maybach",
    name: "Cls maybach",
    category: "Confort Plus",
    pricePerDay: 60000,
    image: "/images/cars/cls-maybach/CLS 1.png",
    gallery: [
      "/images/cars/cls-maybach/CLS 6.png",
      "/images/cars/cls-maybach/CLS 3.png",
      "/images/cars/cls-maybach/CLS 10.png",
    ],
    description: "Design audacieux et technologie innovante caractérisent la Kia Optima. Cette berline moderne combine style contemporain et équipements de pointe pour une expérience de conduite dynamique et confortable.",
    features: [
      "Écran tactile 8 pouces",
      "Sièges chauffants/ventilés",
      "Démarrage sans clé",
      "Caméra 360°",
      "Régulateur de vitesse",
      "Système audio JBL"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "3 valises"
    }
  },
  {
    id: "5",
    slug: "audi-a6",
    name: "Audi A6",
    category: "Berline Executive",
    pricePerDay: 18000,
    image: "/images/cars/audi-a6/main.png",
    gallery: [
      "/images/cars/audi-a6/rear.png",
      "/images/cars/audi-a6/side.png",
      "/images/cars/audi-a6/sunset.png",
    ],
    description: "L'Audi A6 incarne l'excellence executive avec son design sophistiqué et ses technologies de pointe. Cette berline premium offre un confort exceptionnel et des performances remarquables.",
    features: [
      "Système MMI Navigation",
      "Sièges sport en cuir",
      "Phares LED Matrix",
      "Régulateur adaptatif",
      "Bang & Olufsen Sound",
      "Assistance parking"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "3 valises"
    }
  },
  {
    id: "6",
    slug: "porsche-cayenne",
    name: "Porsche Cayenne",
    category: "SUV Premium",
    pricePerDay: 30000,
    image: "/images/cars/cayenne/cayenne-1_1749865614866.png",
    gallery: [
      "/images/cars/cayenne/cayenne-2_1749865614877.png",
      "/images/cars/cayenne/cayenne-3_1749865614877.png",
      "/images/cars/cayenne/cayenne-4_1749865614878.png",
    ],
    description: "Le Porsche Cayenne gris anthracite incarne l'excellence SUV avec des performances dignes d'une voiture de sport. Photographié dans les rues d'Alger, il allie parfaitement polyvalence urbaine et luxe premium.",
    features: [
      "Moteur V6 3.0L biturbo",
      "Traction intégrale Porsche",
      "Suspension pneumatique adaptative",
      "PCM Porsche Communication",
      "Intérieur cuir premium",
      "Système audio Bose surround"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "4 valises"
    }
  },
  {
    id: "7",
    slug: "volkswagen-golf-8r",
    name: "Volkswagen Golf 8R",
    category: "Compacte Sport",
    pricePerDay: 15000,
    image: "/images/cars/volkswagen-golf-8r/8r-1.png",
    gallery: [
      "/images/cars/volkswagen-golf-8r/8r-2.png",
      "/images/cars/volkswagen-golf-8r/8r-3.png",
      "/images/cars/volkswagen-golf-8r/8r-4.png",
    ],
    description: "La Volkswagen Golf 8R noire exposée chez TechnoCars représente le summum de la performance compacte. Cette version R offre puissance, technologie et sportivité dans un package raffiné.",
    features: ["Cockpit Digital Pro", "Sound système Harman Kardon", "DCC suspension adaptative", "Climatisation 3 zones", "R-Performance package", "Jantes Pretoria 19 pouces"],
    specifications: { transmission: "Automatique", fuel: "Essence", seats: 5, luggage: "3 valises" }
  },
  {
    id: "8",
    slug: "porsche-macan",
    name: "Porsche Macan",
    category: "SUV Premium",
    pricePerDay: 35000,
    image: "/images/cars/porsche-macan/porshe1.png",
    gallery: [
      "/images/cars/porsche-macan/porshe3.png",
      "/images/cars/porsche-macan/porshe4.png",
      "/images/cars/porsche-macan/porshe5.png",
    ],
    description: "Le Porsche Macan vert métallique photographié dans les rues d'Alger incarne la sportivité SUV allemande. Avec ses jantes distinctives et son badge PORSCHE, ce véhicule offre performances et luxe.",
    features: ["PCM 6.0 système infotainment", "Système audio Bose Surround", "Porsche Traction Management", "Intérieur cuir sport", "Suspension pneumatique adaptive", "Jantes Turbo 21 pouces"],
    specifications: { transmission: "Automatique", fuel: "Essence", seats: 5, luggage: "4 valises" }
  },
  {
    id: "9",
    slug: "audi-rs3",
    name: "Audi RS3",
    category: "Compacte Sport Premium",
    pricePerDay: 25000,
    image: "/images/cars/audi-rs3/rs3-1.png",
    gallery: [
      "/images/cars/audi-rs3/rs3-2.png",
      "/images/cars/audi-rs3/rs3-3.png",
      "/images/cars/audi-rs3/rs3-4.png",
      "/images/cars/audi-rs3/rs3-5.png",
    ],
    description: "L'Audi RS3 noire exposée devant TechnoCars représente l'excellence de la performance compacte allemande. Avec son intérieur sport et ses finitions RS, ce véhicule offre puissance et raffinement.",
    features: ["Virtual Cockpit Plus 12.3\"", "Système audio Bang & Olufsen", "Quattro permanent AWD", "Sièges sport RS", "Suspension RS adaptative", "Freins céramique carbone"],
    specifications: { transmission: "Automatique", fuel: "Essence", seats: 5, luggage: "3 valises" }
  },
  {
    id: "10",
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
    description: "La Porsche Panamera gris métallique exposée dans le showroom premium TechnoCars représente l'excellence de la berline sportive. Avec son éclairage LED et ses finitions haut de gamme, elle incarne le luxe allemand.",
    features: ["PCM 6.0 écran curved", "Système audio Burmester 3D", "Suspension pneumatique PASM", "Climatisation 4 zones", "Sièges sport adaptatifs", "Freins céramique PCCB"],
    specifications: { transmission: "Automatique", fuel: "Essence", seats: 4, luggage: "3 valises" }
  },
  {
    id: "11",
    slug: "mercedes-glc",
    name: "Mercedes GLC Coupé",
    category: "SUV Coupé Premium",
    pricePerDay: 22000,
    image: "/images/cars/mercedes-glc/glc-1.png",
    gallery: [
      "/images/cars/mercedes-glc/glc-2.png",
      "/images/cars/mercedes-glc/glc-3.png",
    ],
    description: "Le Mercedes GLC Coupé noir métallisé photographié dans les jardins d'Alger combine élégance sportive et polyvalence urbaine. Ce SUV coupé premium offre le parfait équilibre entre performance et confort.",
    features: ["MBUX système multimédia", "Caméras 360° surround", "Suspension AIRMATIC", "Climatisation THERMOTRONIC", "Toit panoramique coulissant", "Jantes AMG 20 pouces"],
    specifications: { transmission: "Automatique", fuel: "Essence", seats: 5, luggage: "4 valises" }
  },
  {
    id: "12",
    slug: "audi-a1",
    name: "Audi A1",
    category: "Citadine Premium",
    pricePerDay: 8500,
    image: "/images/cars/audi-a1/main.png",
    gallery: [
      "/images/cars/audi-a1/showroom.png",
      "/images/cars/audi-a1/rear.png",
      "/images/cars/audi-a1/interior.png",
    ],
    description: "L'Audi A1 allie élégance urbaine et technologie de pointe. Cette citadine premium offre un confort exceptionnel et un design raffiné pour vos déplacements en ville avec style.",
    features: ["MMI Navigation", "Cockpit virtuel", "Climatisation automatique", "Sièges sport", "LED Matrix", "Bang & Olufsen"],
    specifications: { transmission: "Automatique", fuel: "Essence", seats: 5, luggage: "2 valises" }
  },
  {
    id: "13",
    slug: "mercedes-a120",
    name: "Mercedes A120",
    category: "Compacte Premium",
    pricePerDay: 12000,
    image: "/images/cars/mercedes-a120/main.png",
    gallery: [
      "/images/cars/mercedes-a120/street.png",
      "/images/cars/mercedes-a120/rear.png",
      "/images/cars/mercedes-a120/showroom.png",
    ],
    description: "La Mercedes A120 combine élégance et performance dans un design compact. Cette berline premium offre technologie avancée et confort raffiné pour vos déplacements urbains et interurbains.",
    features: ["MBUX Infotainment", "Caméras 360°", "Sièges chauffants", "Éclairage LED adaptatif", "Assistant de conduite", "Son Burmester"],
    specifications: { transmission: "Automatique", fuel: "Essence", seats: 5, luggage: "3 valises" }
  },


  {
    id: "16",
    slug: "audi-q3",
    name: "audi Q3",
    category: "Urbaine",
    pricePerDay: 65,
    image: "/images/cars/Q3/Q3-2.png",
    gallery: [
      "/images/cars/Q3/Q3-3.png",
      "/images/cars/Q3/Q3-5.png",
    ],
    description: "L'Opel Corsa nouvelle génération allie design allemand et agilité urbaine pour une mobilité moderne et efficace.",
    features: ["Multimedia Navi Pro", "IntelliLux LED", "Keyless", "Climatisation auto", "Caméra arrière", "Jantes diamantées"],
    specifications: { transmission: "Manuelle", fuel: "Essence", seats: 5, luggage: "2 valises" }
  },
  {
    id: "17",
    slug: "jaguar-type-r",
    name: "jaguar-typeR",
    category: "Luxury Sport",
    pricePerDay: 165,
    image: "/images/cars/jaguar-typeR/jaguar-1.png",
    gallery: [
      "/images/cars/jaguar-typeR/jaguar-2.png",
      "/images/cars/jaguar-typeR/jaguar-3.png",
    ],
    description: "La Lexus IS redéfinit le luxe sportif japonais avec son savoir-faire Takumi et ses performances exceptionnelles.",
    features: ["Lexus Interface", "Mark Levinson", "LSS+ 2.5", "Cuir premium", "Suspension adaptative", "F Sport package"],
    specifications: { transmission: "Automatique", fuel: "Hybride", seats: 5, luggage: "3 valises" }
  },

  {
    id: "19",
    slug: "volkswagen-troc-cabriolet",
    name: "Troc cabriolet",
    category: "Luxury Performance",
    pricePerDay: 155,
    image: "/images/cars/Troc-cabriolet/troc 1.png",
    gallery: [
      "/images/cars/Troc-cabriolet/troc 2.png",
      "/images/cars/Troc-cabriolet/troc 4.png",
    ],
    description: "L'Infiniti Q50 combine l'art japonais de l'hospitalité Omotenashi avec des performances inspirées de la F1.",
    features: ["InTouch dual screen", "Bose Studio", "ProACTIVE", "Cuir semi-aniline", "Direct Adaptive Steering", "Dynamic Sunroof"],
    specifications: { transmission: "Automatique", fuel: "Essence", seats: 5, luggage: "3 valises" }
  },
  {
    id: "20",
    slug: "range-rover-evoque",
    name: "range rover evoque",
    category: "British Luxury",
    pricePerDay: 175,
    image: "/images/cars/range-rover-evoque/evoque1.png",
    gallery: [
      "/images/cars/range-rover-evoque/evoque2.png",
      "/images/cars/range-rover-evoque/evoque3.png",
    ],
    description: "La Jaguar XE incarne l'élégance britannique et la sportivité avec son châssis en aluminium et son raffinement légendaire.",
    features: ["InControl Touch Pro", "Meridian Audio", "All Surface Progress Control", "Cuir Windsor", "Adaptive LED", "Jaguar Drive Control"],
    specifications: { transmission: "Automatique", fuel: "Essence", seats: 5, luggage: "3 valises" }
  },

  {
    id: "22",
    slug: "honda-civic-2020",
    name: "Honda Civic Type R",
    category: "Compacte Sport",
    pricePerDay: 18000,
    image: "/images/cars/honda-civic/honda1.jpg",
    gallery: [],
    description: "La Honda Civic Type R bleu sonic métallisé chez TechnoCars incarne la sportivité japonaise à l'état pur. Cette version haute performance offre sensations et technologie pour les passionnés de conduite.",
    features: ["Honda SENSING package", "Système audio premium", "Mode Sport R+", "Sièges Recaro sport", "Suspension adaptative", "Freins Brembo performance"],
    specifications: { transmission: "Manuelle", fuel: "Essence", seats: 5, luggage: "2 valises" }
  },
  {
    id: "23",
    slug: "fiat-doblo",
    name: "fiat doblo",
    category: "Italian Passion",
    pricePerDay: 139,
    image: "/images/cars/fiat-doblo/doblo1.png",
    gallery: [
      "/images/cars/fiat-doblo/doblo2.png",
      "/images/cars/fiat-doblo/doblo3.png",
    ],
    description: "L'Alfa Romeo Giulia incarne la passion italienne avec son design émotionnel et ses performances dignes d'une sportive pure.",
    features: ["Uconnect 4C NAV", "Harman Kardon", "Autonomous Emergency Brake", "Cuir italien", "Active suspension", "DNA selector"],
    specifications: { transmission: "Automatique", fuel: "Essence", seats: 5, luggage: "3 valises" }
  },
  {
    id: "24",
    slug: "chevrolet-captiva",
    name: "Chevrolet Captiva",
    category: "SUV Familial",
    pricePerDay: 12000,
    image: "/images/cars/captiva/captiva1.jpg",
    gallery: [
      "/images/cars/captiva/captiva2.png",
      "/images/cars/captiva/captiva3.png",
      "/images/cars/captiva/captiva4.png",
    ],
    description: "Le Chevrolet Captiva blanc nacré exposé chez TechnoCars représente le SUV familial moderne par excellence. Spacieux et technologique, il offre tout le confort nécessaire pour vos déplacements familiaux en Algérie.",
    features: [
      "7 places modulables",
      "Moteur 1.5L turbo efficient",
      "Écran tactile 10.4\" MyLink",
      "Caméra 360° et capteurs",
      "Climatisation automatique tri-zone",
      "Intérieur cuir et tissu premium"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 7,
      luggage: "5 valises"
    }
  },
  {
    id: "25",
    slug: "mercedes-gle-maybach",
    name: "Mercedes GLE Maybach",
    category: "SUV Luxury",
    pricePerDay: 45000,
    image: "/images/cars/mercedes-gle/gle-2.png",
    gallery: [
      "/images/cars/mercedes-gle/gle-3.png",
      "/images/cars/mercedes-gle/gle-6.png",
      "/images/cars/mercedes-gle/gle-8.png",
    ],
    description: "Le Mercedes GLE Maybach gris graphite métallisé chez TechnoCars représente l'excellence du luxe automobile. Avec son intérieur raffiné et ses technologies avancées, ce SUV premium offre une expérience de conduite exceptionnelle.",
    features: [
      "MBUX Hyperscreen curved display",
      "Suspension AIRMATIC E-ACTIVE",
      "Intérieur cuir Nappa Maybach",
      "Système audio Burmester 4D",
      "Climatisation à 4 zones",
      "Éclairage d'ambiance 64 couleurs"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "5 valises"
    }
  },
  {
    id: "26",
    slug: "jeep-renegade",
    name: "Jeep Renegade",
    category: "SUV Compact",
    pricePerDay: 16500,
    image: "/images/cars/jeep-renegade/jeep-1.png",
    gallery: [
      "/images/cars/jeep-renegade/jeep-2.png",
      "/images/cars/jeep-renegade/jeep-4.png",
      "/images/cars/jeep-renegade/jeep-5.png",
    ],
    description: "Le Jeep Renegade rouge passion exposé chez TechnoCars combine l'ADN aventurier Jeep avec un design urbain moderne. Parfait pour les escapades en famille ou les trajets quotidiens à Alger.",
    features: [
      "Uconnect 4C système multimédia",
      "Système audio premium",
      "Selec-Terrain modes de conduite",
      "Accès mains libres",
      "Démarrage à distance",
      "Phares LED signature"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "3 valises"
    }
  },
  {
    id: "27",
    slug: "audi-rs6",
    name: "Audi RS6 Avant",
    category: "Break Sport Premium",
    pricePerDay: 55000,
    image: "/images/cars/audi-rs6/rs6-1.png",
    gallery: [
      "/images/cars/audi-rs6/rs6-2.png",
      "/images/cars/audi-rs6/rs6-4.png",
      "/images/cars/audi-rs6/rs6-6.png",
    ],
    description: "L'Audi RS6 Avant vert militaire mat dans le showroom underground TechnoCars avec fresques murales représente le summum du break sportif. Ce véhicule exceptionnel allie performance extrême et praticité familiale.",
    features: [
      "Virtual Cockpit Pro curved",
      "Système audio Bang & Olufsen 3D",
      "Quattro sport différentiel",
      "Suspension pneumatique RS",
      "Échappement sport RS",
      "Jantes forged 22 pouces"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "5 valises"
    }
  },
  {
    id: "28",
    slug: "volkswagen-taigo",
    name: "Volkswagen Taigo",
    category: "SUV Coupé Compact",
    pricePerDay: 14000,
    image: "/images/cars/volkswagen-taigo/taigo-1.png",
    gallery: [
      "/images/cars/volkswagen-taigo/taigo-2.png",
    ],
    description: "Le Volkswagen Taigo noir brillant dans le showroom artistique TechnoCars incarne le design SUV coupé moderne. Avec ses lignes dynamiques et sa technologie avancée, il offre style et praticité urbaine.",
    features: [
      "Digital Cockpit Pro 10.25\"",
      "Système navigation Discover Media",
      "IQ.DRIVE assistance package",
      "Climatisation Climatronic",
      "Éclairage LED Matrix",
      "Jantes alliage design"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 5,
      luggage: "3 valises"
    }
  },
  {
    id: "29",
    slug: "volkswagen-tiguan",
    name: "Volkswagen Tiguan",
    category: "SUV Familial Premium",
    pricePerDay: 18000,
    image: "/images/cars/volkswagen-tiguan/tiguan-1.png",
    gallery: [],
    description: "Le Volkswagen Tiguan avec intérieur premium et éclairage d'ambiance bleu chez TechnoCars représente l'excellence du SUV familial allemand. Technologie de pointe et confort exceptionnel pour tous vos déplacements.",
    features: [
      "Digital Cockpit Pro 12\"",
      "Harman Kardon sound system",
      "4MOTION AWD intelligent",
      "Sièges cuir perforés chauffants",
      "Éclairage d'ambiance 30 couleurs",
      "Hayon électrique Smart Open"
    ],
    specifications: {
      transmission: "Automatique",
      fuel: "Essence",
      seats: 7,
      luggage: "4 valises"
    }
  }
];

export const getFeaturedCars = () => cars.slice(0, 4);
export const getCarBySlug = (slug: string) => cars.find(car => car.slug === slug);
export const BRAND_NAME = "Roots & Co.";
export const TAGLINE = "The Architects of the Smile.";

export const NAV_LINKS = [
  { label: "The Philosophy", href: "#philosophy" },
  { label: "The Collections", href: "#treatments" },
  { label: "The Architects", href: "#doctor" },
  { label: "The Journal", href: "#journal" }, // Replaced "Stories" with "Journal" for upscale feel
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "The Blueprint",
    description: "Every treatment begins with microscopic analysis. We map the unseen terrain of your dental anatomy before a single instrument is lifted.",
    image: "/images/microscope-analysis.png"
  },
  {
    number: "02",
    title: "Biomimetic Restoration",
    description: "We don't patch; we rebuild. Using materials that mimic the elasticity and strength of natural dentin, we restore structural integrity from the inside out.",
    image: "/images/biomimetic-layers.png"
  },
  {
    number: "03",
    title: "Micro-Precision",
    description: "Operating at 20x magnification allows us to preserve healthy tissue others would drill away. This is conservation, not just repair.",
    image: "/images/precision-dentistry.png"
  },
  {
    number: "04",
    title: "Aesthetic Harmony",
    description: "Function dictates form. Once the foundation is solid, we curate the aesthetics to harmonize with your facial architecture.",
    image: "/images/aesthetic-smile.png"
  }
];

export const TREATMENTS = [
  {
    id: 1,
    title: "Micro-Endodontics",
    description: "The art of saving the foundation. Root canal therapy performed under high-power magnification for absolute precision and maximum preservation.",
    icon: "Microscope"
  },
  {
    id: 2,
    title: "Biomimetic Restoration",
    description: "Restoring teeth to their original biomechanical strength. We bond distinct layers to mimic natural tooth structure, preventing the 'cycle of dentistry'.",
    icon: "Layers"
  },
  {
    id: 3,
    title: "Smile Architecture",
    description: "Digital Smile Design (DSD) allowing you to test-drive your new smile. Veneers and laminates that respect the natural structure while perfecting the art.",
    icon: "Palette"
  },
  {
    id: 4,
    title: "Implants & Rehabilitation",
    description: "When preservation is no longer possible, we reconstruct. Swiss-grade implants placed with guided surgery for life-long stability.",
    icon: "Anchor"
  }
];

// Doctor Types
export interface Doctor {
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
}

export const TEAM: Doctor[] = [
  {
    name: "Dr. Bastin Cherian",
    role: "The Preservationist",
    experience: "MDS - Conservative Dentistry & Endodontics",
    bio: "A guardian of the natural tooth. Dr. Bastin believes that the best tooth is the one you were born with. Specializing in Micro-Endodontics, he uses extreme magnification to navigate the complex anatomy of the root canal system, saving teeth that would otherwise be lost. His approach is quiet, precise, and deeply rooted in science.",
    image: "/images/dr-bastin.jpg" // Keeping correct image path mapping
  },
  {
    name: "Dr. Alda Davis",
    role: "The Curator",
    experience: "Aesthetic & Restorative Dentist",
    bio: "Where engineering meets emotion. Dr. Alda creates smiles that feel inevitable, not manufactured. With a focus on Biomimetic Restorations, she rebuilds teeth layer by layer, ensuring they function as nature intended while looking effortlessly beautiful. She curates confidence.",
    image: "/images/dr-alda.png"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "I flew in from Dubai for my smile makeover. It didn't feel like a dental clinic; it felt like a wellness retreat. The attention to microscopic detail is unlike anything I've seen.",
    author: "Sarah J.",
    role: "Architect"
  },
  {
    id: 2,
    quote: "Dr. Bastin saved a tooth three other dentists said needed extraction. His calm precision and the technology he uses are world-class. Truly the architects of the smile.",
    author: "Rajeev M.",
    role: "Tech Entrepreneur"
  },
  {
    id: 3,
    quote: "The Biomimetic approach made so much sense to me—why drill away healthy tooth? The result feels exactly like my natural teeth, only stronger.",
    author: "Elena R.",
    role: "Fashion Designer"
  }
];

export const CONTACT_INFO = {
  phone: '+91 9567 124 888',
  email: 'care@rootsandco.com',
  address: {
    line1: 'Providence Road',
    line2: 'Kacheripady, Kochi',
    full: 'Providence Rd, Opp. Providence Plaza, Kacheripady, Kochi, Kerala 682018'
  },
  social: {
    instagram: "@rootsandco",
    facebook: "Roots & Co. Dentistry"
  }
};

export const DETAILED_SERVICES = [
  // Placeholder for future expansion
];
export const TECHNOLOGIES = [
  // Placeholder
];
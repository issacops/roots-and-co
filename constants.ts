import { Testimonial, Treatment, ProcessStep, Doctor } from './types';
import { Sparkles, Smile, ShieldCheck, HeartPulse, Stethoscope, Microscope } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'The Doctor', href: '#doctor' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'We listen, diagnose, and map your smile using advanced imaging technology to see what eyes cannot.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop'
  },
  {
    number: '02',
    title: 'Design',
    description: 'We craft a personalized treatment plan in 3D, tailoring every curve to harmonize with your facial features.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop'
  },
  {
    number: '03',
    title: 'Transform',
    description: 'Gentle, precise, and minimally invasive procedures executed with artistic finesse and clinical rigor.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop'
  },
  {
    number: '04',
    title: 'Maintain',
    description: 'Regular care plans and hygiene therapies ensuring your smile remains healthy and radiant for years.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop'
  },
];

export const TREATMENTS: Treatment[] = [
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Veneers, bonding, and aesthetic contouring for the perfect smile.',
    icon: Sparkles,
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solutions for missing teeth.',
    icon: Microscope,
  },
  {
    id: 'smile-design',
    title: 'Smile Designing',
    description: 'Digital smile makeovers that harmonize with your facial structure.',
    icon: Smile,
  },
  {
    id: 'aligners',
    title: 'Invisible Aligners',
    description: 'Clear, comfortable straightening without the metal braces.',
    icon: ShieldCheck,
  },
  {
    id: 'general',
    title: 'Preventive Care',
    description: 'Routine hygiene and checkups to keep your foundation strong.',
    icon: HeartPulse,
  },
  {
    id: 'peds',
    title: 'Pediatric Dentistry',
    description: 'Gentle care designed to make children love visiting the dentist.',
    icon: Stethoscope,
  },
];

export const TEAM: Doctor[] = [
  {
    name: "Dr. Dinesh Hingorani",
    role: "Founder & Senior Dentist",
    experience: "26 Years Exp.",
    bio: "A senior and highly experienced Dentist with 26 years of practice. As a key member of the team, he provides comprehensive and advanced dental care, focusing on long-term patient health and treatment success.",
    image: "/images/dr-dinesh-hingorani.jpg"
  },
  {
    name: "Dr. Fatema Baker",
    role: "Dentist",
    experience: "16 Years Exp.",
    bio: "Dedicated to delivering patient-centered care, specializing in general dentistry and ensuring a comfortable and positive experience for all patients.",
    image: "/images/dr-fatema-baker.png"
  },
  {
    name: "Dr. Vakta Tanna",
    role: "Dentist",
    experience: "18 Years Exp.",
    bio: "Accomplished in a wide range of dental procedures, focusing on achieving excellent and lasting results with the highest standards of oral health.",
    image: "/images/dr-vakta-tanna.png"
  },
  {
    name: "Dr. Prashant Mall",
    role: "Dentist",
    experience: "18 Years Exp.",
    bio: "Offers expert dental consultations and high-quality treatment solutions, prioritizing precision and patient well-being in every procedure.",
    image: "/images/dr-prashant-mall.png"
  },
  {
    name: "Dr. Carynn Doulton",
    role: "Dentist",
    experience: "5 Years Exp.",
    bio: "Passionate about modern and gentle dental solutions, staying current with the latest techniques to ensure the best possible care.",
    image: "/images/dr-carynn-doulton.png"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "I didn’t know a dentist could feel this premium and comforting. It felt more like a spa visit than a medical procedure.",
    author: "Sarah Jenkins",
    role: "Corporate Professional",
  },
  {
    id: '2',
    quote: "My daughter actually likes coming here. The environment is so calm, it completely removes the anxiety.",
    author: "Rajiv Malhotra",
    role: "Parent",
  },
  {
    id: '3',
    quote: "Clean, precise, friendly. Dr. Hingorani works with an artist's hand. Five stars without hesitation.",
    author: "Eleanor Wright",
    role: "Senior Patient",
  },
];

export const DETAILED_SERVICES = [
  {
    category: "Restorative",
    items: ["Root Canal Treatments (RCT)", "Nano-Composite Fillings", "Ceramic Inlays & Onlays", "Full Mouth Rehabilitation"]
  },
  {
    category: "Surgical",
    items: ["Wisdom Tooth Extraction", "Bone Grafting & Augmentation", "Sinus Lifts", "Immediate Implants"]
  },
  {
    category: "Periodontal",
    items: ["Laser Gum Contouring", "Deep Cleaning & Polishing", "Gum Depigmentation", "Recession Coverage"]
  }
];

export const TECHNOLOGIES = [
  "Intraoral 3D Scanners",
  "Digital Smile Design (DSD)",
  "Laser-Assisted Dentistry",
  "CBCT Imaging",
  "Air Abrasion Systems",
  "Painless Injection Tech"
];

export const CONTACT_INFO = {
  phone: '+91 98765 43210',
  email: 'hello@dentalkraft.com',
  address: {
    line1: 'Lane 5, Koregaon Park',
    line2: 'Pune, 411001',
    full: 'Lane 5, Koregaon Park, Pune, 411001'
  }
};
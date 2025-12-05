import { LucideIcon } from 'lucide-react';

export interface Treatment {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface Doctor {
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
}
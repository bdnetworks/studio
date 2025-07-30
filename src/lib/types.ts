import type { LucideIcon } from "lucide-react";

export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
  demoUrl: string;
  isFeatured?: boolean;
};

export type ProjectCategory = {
    name: string;
    icon: LucideIcon;
};

export type Testimonial = {
    name: string;
    title: string;
    quote: string;
    avatar: string;
};

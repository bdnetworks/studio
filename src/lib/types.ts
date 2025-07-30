import type { LucideIcon } from "lucide-react";

export type Course = {
  id: number;
  title: string;
  description: string;
  category: string;
  level: 'শিক্ষানবিশ' | 'মধ্যবর্তী' | 'উন্নত';
  price: number;
  duration: string;
  instructor: {
    name: string;
    avatar: string;
  };
  rating: number;
  reviewCount: number;
  imageUrl: string;
  learningOutcomes: string[];
  isFeatured?: boolean;
};

export type CourseCategory = {
    name: string;
    icon: LucideIcon;
};

export type Testimonial = {
    name: string;
    title: string;
    quote: string;
    avatar: string;
};

import type { Project, ProjectCategory, Testimonial } from './types';
import { LayoutDashboard, Code, BarChart3, Palette, Camera, Mic2, Newspaper, ShoppingCart } from 'lucide-react';

export const projectCategories: ProjectCategory[] = [
  { name: 'ব্লগার থিম', icon: BarChart3 },
  { name: 'ই-কমার্স', icon: ShoppingCart },
  { name: 'নিউজ সাইট', icon: Newspaper },
  { name: 'রিয়্যাক্ট প্রজেক্ট', icon: Code },
  { name: 'নেক্সট.জেএস', icon: LayoutDashboard },
  { name: 'UI/UX ডিজাইন', icon: Palette },
];

export const allProjects: Project[] = [
  {
    id: 1,
    title: 'মডার্ন ই-কমার্স থিম',
    description: 'ব্লগারের জন্য একটি আকর্ষণীয় এবং দ্রুতগতির ই-কমার্স থিম। সহজেই কাস্টমাইজ করা যায়।',
    category: 'ব্লগার থিম',
    price: 25,
    imageUrl: 'https://placehold.co/400x225.png',
    demoUrl: '#',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'রিয়্যাক্ট নিউজ পোর্টাল',
    description: 'রিয়্যাক্ট দিয়ে তৈরি একটি সম্পূর্ণ ডাইনামিক নিউজ পোর্টাল। দ্রুত এবং SEO-ফ্রেন্ডলি।',
    category: 'রিয়্যাক্ট প্রজেক্ট',
    price: 45,
    imageUrl: 'https://placehold.co/400x225.png',
    demoUrl: '#',
    isFeatured: true,
  },
  {
    id: 3,
    title: 'নেক্সট.জেএস ব্লগিং প্ল্যাটফর্ম',
    description: 'নেক্সট.জেএস দিয়ে তৈরি আধুনিক ব্লগিং প্ল্যাটফর্ম। সার্ভার সাইড রেন্ডারিং এবং স্ট্যাটিক সাইট জেনারেশনের সুবিধা।',
    category: 'নেক্সট.জেএস',
    price: 50,
    imageUrl: 'https://placehold.co/400x225.png',
    demoUrl: '#',
    isFeatured: true,
  },
  {
    id: 4,
    title: 'শপিফাই অল্টারনেটিভ ই-কমার্স',
    description: 'ছোট ব্যবসার জন্য একটি সাশ্রয়ী মূল্যের এবং শক্তিশালী ই-কমার্স সমাধান।',
    category: 'ই-কমার্স',
    price: 99,
    imageUrl: 'https://placehold.co/400x225.png',
    demoUrl: '#',
    isFeatured: true,
  },
  {
    id: 5,
    title: 'ভাইরাল নিউজ ওয়েবসাইট থিম',
    description: 'ব্লগারের জন্য ডিজাইন করা একটি আকর্ষণীয় নিউজ থিম, যা সোশ্যাল মিডিয়ায় সহজে ভাইরাল হতে সাহায্য করে।',
    category: 'নিউজ সাইট',
    price: 20,
    imageUrl: 'https://placehold.co/400x225.png',
    demoUrl: '#',
    isFeatured: false,
  },
  {
    id: 6,
    title: 'পোর্টফোলিও ওয়েবসাইট টেমপ্লেট',
    description: 'ডেভেলপার এবং ডিজাইনারদের জন্য একটি মিনিমাল এবং আধুনিক পোর্টফোলিও টেমপ্লেট।',
    category: 'রিয়্যাক্ট প্রজেক্ট',
    price: 15,
    imageUrl: 'https://placehold.co/400x225.png',
    demoUrl: '#',
    isFeatured: false,
  },
  {
    id: 7,
    title: 'রেস্টুরেন্ট ওয়েবসাইট UI কিট',
    description: 'ফিফমা দিয়ে ডিজাইন করা রেস্টুরেন্টের জন্য একটি পূর্ণাঙ্গ UI কিট।',
    category: 'UI/UX ডিজাইন',
    price: 30,
    imageUrl: 'https://placehold.co/400x225.png',
    demoUrl: '#',
    isFeatured: false,
  },
  {
    id: 8,
    title: 'অ্যাডসেন্স-ফ্রেন্ডলি ব্লগার থিম',
    description: 'অ্যাডসেন্স বিজ্ঞাপনের জন্য অপ্টিমাইজ করা একটি বিশেষ ব্লগার থিম, যা আপনার আয় বাড়াতে সাহায্য করবে।',
    category: 'ব্লগার থিম',
    price: 22,
    imageUrl: 'https://placehold.co/400x225.png',
    demoUrl: '#',
    isFeatured: false,
  }
];

export const featuredProjects = allProjects.filter(project => project.isFeatured);

export const testimonials: Testimonial[] = [
  {
    name: 'আকাশ আহমেদ',
    title: 'ক্লায়েন্ট',
    quote: 'আমি ই-কমার্স থিমটি কিনেছি এবং এটি আমার ব্যবসার জন্য অসাধারণ কাজ করছে। খুব সহজেই সবকিছু সেটআপ করতে পেরেছি।',
    avatar: 'https://placehold.co/80x80.png',
  },
  {
    name: 'সুমন বড়ুয়া',
    title: 'ব্লগার',
    quote: 'নিউজ সাইট থিমটি আমার ব্লগের চেহারা পুরোপুরি বদলে দিয়েছে। পাঠকরা এখন আরও বেশি সময় ধরে সাইটে থাকছেন।',
    avatar: 'https://placehold.co/80x80.png',
  },
  {
    name: 'ফারিয়া জামান',
    title: 'ফ্রিল্যান্সার',
    quote: 'রিয়্যাক্ট পোর্টফোলিও টেমপ্লেটটি ব্যবহার করে আমি ক্লায়েন্টদের কাছ থেকে অনেক ভালো সাড়া পাচ্ছি। ডিজাইনটা খুবই প্রফেশনাল।',
    avatar: 'https://placehold.co/80x80.png',
  },
    {
    name: 'ডেভিড খান',
    title: 'ব্যবসা মালিক',
    quote: 'ডিজিটাল হাব থেকে কেনা থিম দিয়ে আমার অনলাইন স্টোর শুরু করেছি। তাদের সাপোর্ট এবং পণ্যের মান দুটোই চমৎকার।',
    avatar: 'https://placehold.co/80x80.png',
  },
  {
    name: 'জেসিকা আক্তার',
    title: 'ডেভেলপার',
    quote: 'নেক্সট.জেএস প্ল্যাটফর্মটি অসাধারণ। এটি আমাকে দ্রুত এবং শক্তিশালী ওয়েব অ্যাপ তৈরি করতে সাহায্য করেছে।',
    avatar: 'https://placehold.co/80x80.png',
  },
];

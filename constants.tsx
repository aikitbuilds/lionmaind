
import React from 'react';
import { Plan, Mushroom, Benefit, FAQItem, Testimonial } from './types';

// Icons
const BrainIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9.25 2 7 4.25 7 7C7 8.82 8.05 10.4 9.58 11.22C9.55 11.33 9.53 11.45 9.53 11.57C9.53 12.09 9.74 12.57 10.08 12.93C8.39 13.5 7.25 14.73 7.03 16.21C6.44 16.09 5.89 16.03 5.33 16.03C3.51 16.03 2 17.54 2 19.36C2 20.84 3.03 22.04 4.41 22.37C5.39 23.33 6.84 24 8.5 24C10.65 24 12.53 22.68 13.42 20.88C13.68 21.91 14.71 22.71 15.93 22.71C17.5 22.71 18.78 21.5 18.97 20C19.78 20.07 20.57 20.04 21.32 19.91C22.75 19.66 23.86 18.44 23.98 16.97C24.03 16.3 23.82 15.66 23.42 15.14C23.06 14.67 22.56 14.33 21.97 14.21C21.94 13.53 21.72 12.89 21.36 12.35C20.83 11.53 19.92 11 18.88 11C18.15 11 17.49 11.27 16.97 11.72C16.41 10.73 15.33 10 14.1 10C13.03 10 12.08 10.45 11.4 11.19C11.85 10.15 12 9.01 12 7.82C12 7.42 11.96 7.02 11.89 6.63C12.93 6.03 14.12 6.03 15.26 6.69C16.2 7.25 17 8.26 17 9.41C17 10.42 16.47 11.31 15.65 11.82C15.86 12.56 16.53 13.13 17.33 13.26C17.63 13.32 17.94 13.34 18.25 13.34C18.98 13.34 19.65 13.06 20.15 12.6C20.43 13.23 20.53 13.9 20.43 14.58C20.91 14.69 21.31 15.03 21.52 15.5C21.84 16.25 21.55 17.15 20.83 17.56C20.14 17.95 19.29 17.84 18.71 17.29C18.42 18.44 17.29 19.37 16 19.37C14.71 19.37 13.63 18.47 13.35 17.25C12.33 17.86 11.08 18.23 9.75 18.23C9.06 18.23 8.39 18.12 7.77 17.92C7.94 17.29 8.27 16.73 8.75 16.32C9.53 15.69 10.13 14.86 10.45 13.94C10.79 13.52 11.27 13.21 11.81 13.09C12.61 12.92 13.38 13.25 13.82 13.93L13.96 14.15C14.41 14.83 15.24 15.13 16.04 14.88C16.84 14.64 17.31 13.84 17.07 13.04L16.93 12.58C16.47 11.13 14.88 10.23 13.43 10.7C12.7 10.93 12.08 11.41 11.66 12.04C10.86 11.1 10.24 9.94 10 8.65C9.28 9.84 9 11.23 9 12.67C9 12.83 9.01 13 9.03 13.16C8.5 13.03 8 12.74 7.64 12.31C7.24 11.83 7 11.17 7 10.44C7 9.42 7.53 8.53 8.35 8.02C8.14 7.28 8.47 6.44 9.22 6.12C9.97 5.8 10.81 6.14 11.12 6.89C10.82 5.33 10.29 3.9 9.11 3.11C8.28 2.55 7.28 2.8 6.53 3.53C5.78 4.28 5.53 5.28 5.95 6.11C6.03 6.27 6.07 6.44 6.07 6.62C6.07 7.37 5.48 7.97 4.72 7.97C4.44 7.97 4.17 7.88 3.95 7.72C3.12 7.12 2.8 6.04 3.23 5.15C3.67 4.26 4.67 3.71 5.63 3.97C6.61 4.24 7.31 5.13 7.31 6.13C7.31 6.23 7.3 6.32 7.28 6.42C7.94 5.33 9.04 4.54 10.32 4.19C11.91 3.75 13.62 4.06 15.06 5.03C15.82 4.03 16.94 3.39 18.22 3.39C19.93 3.39 21.36 4.63 21.68 6.25C21.75 6.62 22.09 6.89 22.47 6.89C22.61 6.89 22.75 6.86 22.88 6.8C23.57 6.5 24 5.79 24 5C24 3.34 22.66 2 21 2H12Z" /></svg>
);

const MushroomIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.3,12.35c-0.23-0.63-0.65-1.18-1.2-1.57c2.1-2.1,1.93-5.63-0.43-7.99c-2.36-2.36-5.88-2.53-7.99-0.43 C9.11,2.15,7.5,2,5.92,2.3c-1.57,0.29-3.03,1.13-4.1,2.2C0.73,5.59,0,7.06,0.29,8.62C0.59,10.2,1.15,11.66,2.35,12.8c-1.93,2.05-2.25,5.16-0.9,7.51C2.5,21.8,4.27,22.83,6.2,22.98c1.94,0.15,3.83-0.53,5.21-1.92 c1.38,1.38,3.27,2.06,5.21,1.92c1.94-0.15,3.7-1.18,4.76-2.67C22.54,17.5,22.23,14.4,20.3,12.35z M10.36,4.64 c1.29-1.29,3.38-1.29,4.67,0c1.29,1.29,1.29,3.38,0,4.67c-1.29,1.29-3.38,1.29-4.67,0C9.07,8.02,9.07,5.93,10.36,4.64z"/></svg>
);

const ScienceIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.8,8.22c-0.48-0.72-1.22-1.22-2.09-1.39L15,2.69V2c0-0.55-0.45-1-1-1s-1,0.45-1,1v0.69L10.29,6.83 c-0.87,0.17-1.61,0.67-2.09,1.39L4,10.67l3.3,1.65l-0.83,4.17l-3.3-1.1V22h13.67l-3.3-1.1l-0.83,4.17l3.3,1.65l4.22-2.45 C20.53,13.62,20.53,10.38,19.8,8.22z M10,20H6v-2h4V20z M10,17H6v-2h4V17z M18,20h-4v-2h4V20z M18,17h-4v-2h4V17z"/></svg>
);

const CheckCircleIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
);

const DeliveryIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm13.5-8.5l1.96 2.5H17V9.5h3.5zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
);

const PackageIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.01 2.01C6.49 2.01 2.02 6.48 2.02 12s4.47 9.99 9.99 9.99c5.52 0 9.99-4.47 9.99-9.99S17.53 2.01 12.01 2.01zM14.01 13h-4v3H8.01v-3h-2v-2h2v-3h2.01v3h4v2z"/></svg>
);


export const PLANS: Plan[] = [
  {
    name: 'Essential Mind Plan',
    price: '$39.99',
    description: "The perfect starting point for daily cognitive support, focusing on the power of Lion's Mane.",
    features: ["30-day supply of Lion's Mane (3g/day)", "Premium Capsules", "Free mini-book of studies", "Free shipping"],
    savings: "20% savings vs one-time"
  },
  {
    name: 'Complete Cognitive Plan',
    price: '$64.99',
    description: 'An enhanced blend to boost focus and resilience, combining Lion’s Mane with another powerhouse mushroom.',
    features: ["Lion's Mane (3g/day)", "Choice of Reishi OR Cordyceps", "Capsules, Powder, or Gummies", "Monthly health newsletter", "Early access to new products"],
    isPopular: true,
    savings: "15% savings"
  },
  {
    name: 'Ultimate Mind Wellness',
    price: '$89.99',
    description: 'Our most comprehensive formula for peak mental performance and long-term brain health.',
    features: ["Full Blend: Lion's Mane, Reishi, Cordyceps, & Chaga", "Mix & Match Formats", "Quarterly wellness guide", "Priority customer support"],
    savings: "25% savings"
  },
];

export const MUSHROOMS: Mushroom[] = [
    {
      name: "Lion's Mane",
      scientificName: "Hericium erinaceus",
      description: "The cognitive powerhouse. Clinically shown to support memory, focus, and nerve growth factor (NGF).",
      icon: <MushroomIcon className="w-8 h-8 text-brand-accent-light" />,
    },
    {
      name: 'Reishi',
      scientificName: 'Ganoderma lucidum',
      description: 'Known as the "mushroom of immortality," it supports stress reduction, improved mood, and neuroprotection.',
      icon: <MushroomIcon className="w-8 h-8 text-brand-accent-light" />,
    },
    {
      name: 'Cordyceps',
      scientificName: 'Cordyceps sinensis',
      description: 'Boosts energy and endurance by improving oxygen utilization, helping to fight mental fatigue.',
      icon: <MushroomIcon className="w-8 h-8 text-brand-accent-light" />,
    },
    {
      name: 'Chaga',
      scientificName: 'Inonotus obliquus',
      description: 'A potent antioxidant that helps reduce oxidative stress and supports a healthy brain environment.',
      icon: <MushroomIcon className="w-8 h-8 text-brand-accent-light" />,
    },
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Science-Backed Formulas',
    description: "Our dosages are based on human clinical trials to ensure real, tangible cognitive benefits.",
    icon: <ScienceIcon className="w-10 h-10 text-brand-accent-light" />,
  },
  {
    title: 'Peak Purity & Quality',
    description: "100% organic, third-party tested mushroom extracts. No fillers, ever.",
    icon: <CheckCircleIcon className="w-10 h-10 text-brand-accent-light" />,
  },
  {
    title: 'Subscription Convenience',
    description: "Consistency is key for cognitive health. Never miss a day with automated monthly deliveries.",
    icon: <DeliveryIcon className="w-10 h-10 text-brand-accent-light" />,
  },
  {
    title: 'Built for the AI Age',
    description: "Specifically designed to combat the unique cognitive demands of a tech-driven world.",
    icon: <BrainIcon className="w-10 h-10 text-brand-accent-light" />,
  },
];


export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How long until I notice the benefits?",
    answer: "Effects can vary. Some users report improved focus and reduced stress within the first month, while long-term neuroprotective benefits build over time. Consistency is key, which is why our subscription model is so effective."
  },
  {
    question: "Are your mushroom extracts safe?",
    answer: "Absolutely. All our products are made from 100% organic mushroom fruiting bodies and are rigorously third-party tested for purity and potency. They are considered very safe with a long history of use."
  },
  {
    question: "What is the best format for me: capsules, powder, or gummies?",
    answer: "It's a matter of personal preference! Capsules are convenient and tasteless. Powders are versatile and can be added to coffee, tea, or smoothies. Gummies are a tasty and easy way to take your daily dose."
  },
  {
    question: "Can I change or cancel my subscription?",
    answer: "Yes, of course. You have full control over your subscription. You can easily pause, skip a delivery, or cancel at any time through your account portal, no questions asked."
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The cognitive demands of working with AI are intense. LionMaind has been a game-changer for my focus and mental clarity. I feel sharper and more resilient to burnout.",
    name: "Alex R.",
    title: "Senior AI Engineer"
  },
  {
    quote: "As a creative professional, mental blocks are my worst enemy. Since starting the Ultimate Mind plan, my creative flow is more consistent and my ideas feel more connected. Highly recommend!",
    name: "Samantha K.",
    title: "UX Designer & Digital Artist"
  },
  {
    quote: "I was skeptical, but the science is compelling. After two months, the 'brain fog' I'd get in the afternoons has lifted. This is now a non-negotiable part of my daily routine.",
    name: "David L.",
    title: "PhD Researcher"
  }
];

export const FEATURED_LOGOS = [
    'TechCrunch',
    'WIRED',
    'Forbes',
    'Mindful Tech',
    'Wellness Today'
];

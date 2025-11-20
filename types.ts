
import React from 'react';

export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  savings?: string;
}

export interface Mushroom {
  name: string;
  scientificName: string;
  description: string;
  icon: React.ReactNode;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}


import { Car, Testimonial, FAQItem } from './types';

export const FLEET: Car[] = [
  {
    id: '1',
    name: 'Strategic Positioning',
    brand: 'Authority & Narrative Control',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920',
    topSpeed: 'Category Leading',
    acceleration: 'High Precision',
    power: 'Executive Authority',
    pricePerDay: 0,
    type: 'Positioning'
  },
  {
    id: '2',
    name: 'Influence Engine',
    brand: 'Audience Capture & Monetization',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1920',
    topSpeed: 'Universal Reach',
    acceleration: 'Owned Growth',
    power: 'Direct Monetization',
    pricePerDay: 0,
    type: 'Monetization'
  },
  {
    id: '3',
    name: 'Owned Platforms',
    brand: 'Control the Relationship',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920',
    topSpeed: 'Platform Ownership',
    acceleration: 'Data Control',
    power: 'Ecosystem Independence',
    pricePerDay: 0,
    type: 'Architecture'
  },
  {
    id: '4',
    name: 'Crisis & Reputation',
    brand: 'Narrative Defense Systems',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1920',
    topSpeed: 'Risk Mitigation',
    acceleration: 'Narrative Control',
    power: 'Reputation Stability',
    pricePerDay: 0,
    type: 'Defense'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Michael R.',
    role: 'Founder & Investor',
    content: 'KR Media transformed my presence from a simple spokesperson to an equity owner. The clarity and control they provided changed everything.',
    avatar: 'https://i.pravatar.cc/100?img=12'
  },
  {
    id: '2',
    name: 'Sophia L.',
    role: 'Public Figure',
    content: 'They don\'t just run campaigns; they build assets. My audience is now my own, and my business model is finally sustainable.',
    avatar: 'https://i.pravatar.cc/100?img=25'
  },
  {
    id: '3',
    name: 'Daniel P.',
    role: 'Tech Visionary',
    content: 'The most disciplined strategic process I\'ve experienced. KR Media works for visionaries who understand that brand takes architecture.',
    avatar: 'https://i.pravatar.cc/100?img=33'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Who is KR Media Group for?',
    answer: 'We work exclusively with high-influence creators, founders, and public figures ready to transform attention into economic power.'
  },
  {
    question: 'Do you work with early-stage creators?',
    answer: 'We typically focus on individuals who have already built significant attention but lack the infrastructure to own and monetize it effectively.'
  },
  {
    question: 'Is this PR or marketing?',
    answer: 'Neither. We architect influence infrastructure. While PR and marketing are tools we use, our goal is ownership and equity, not just visibility.'
  },
  {
    question: 'How long does an engagement typically last?',
    answer: 'Our models are long-term. Building a brand and a sustainable influence system typically requires a multi-year partnership.'
  },
  {
    question: 'Do you take equity positions?',
    answer: 'Yes. For the right partners, we prefer to align interests through equity and long-term asset ownership.'
  }
];

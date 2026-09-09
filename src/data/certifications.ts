import { ShieldCheck, Briefcase, Code2, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface CertificationGroup {
  category: string;
  icon: LucideIcon;
  items: {
    title: string;
    issuer: string;
  }[];
}

export const CERTIFICATIONS: CertificationGroup[] = [
  {
    category: 'TESDA National Certificates',
    icon: ShieldCheck,
    items: [
      { title: 'NC III – Event Management Services', issuer: 'TESDA' },
      { title: 'NC II – Computer System Servicing (CSS)', issuer: 'TESDA' },
    ],
  },
  {
    category: 'Certificates of Internship',
    icon: Briefcase,
    items: [
      { title: 'IT Support Internship', issuer: 'ECE Contact Center' },
      { title: 'Junior Associates / Web Developer', issuer: 'Sites at Scale' },
    ],
  },
  {
    category: 'freeCodeCamp Developer Certifications',
    icon: Code2,
    items: [
      { title: 'Legacy Responsive Web Design V8', issuer: 'freeCodeCamp' },
      { title: 'Legacy Javascript Algorithms and Data Structures V8', issuer: 'freeCodeCamp' },
      { title: 'Frontend Development Libraries V8', issuer: 'freeCodeCamp' },
    ],
  },
  {
    category: 'Specialized & Course Certificates',
    icon: Award,
    items: [
      { title: 'Content Optimization Certificate', issuer: 'Surfer' },
      { title: 'Certificate of Completion – OOPs in Java', issuer: 'Course Certificate' },
    ],
  },
];

import { GraduationCap, Monitor, School, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Education {
  school: string;
  program: string;
  years: string;
  status: 'current' | 'completed';
  statusLabel: string;
  icon: LucideIcon;
}

export const EDUCATION: Education[] = [
  {
    school: 'Asian College – Dumaguete',
    program: 'Bachelor of Science in Information Technology',
    years: '2026 – 2027',
    status: 'current',
    statusLabel: '4th Year · Currently Studying',
    icon: GraduationCap,
  },
  {
    school: 'Asian College – Dumaguete',
    program: 'Diploma in Information Technology',
    years: '2023 – 2026',
    status: 'completed',
    statusLabel: 'Completed',
    icon: Monitor,
  },
  {
    school: 'San Miguel National High School',
    program: 'Junior High School & Senior High School',
    years: '2017 – 2023',
    status: 'completed',
    statusLabel: 'Completed',
    icon: School,
  },
  {
    school: 'San Miguel Elementary School',
    program: 'Elementary Education',
    years: '',
    status: 'completed',
    statusLabel: 'Completed',
    icon: BookOpen,
  },
];

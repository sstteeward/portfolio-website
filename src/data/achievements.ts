import { FolderGit2, Code2, Clock, BookOpen, Award, Terminal } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Achievement {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    label: "Completed Projects",
    value: 6,
    suffix: "+",
    icon: FolderGit2
  },
  {
    label: "Technologies Learned",
    value: 20,
    suffix: "+",
    icon: Code2
  },
  {
    label: "Hours of Coding",
    value: 1200,
    suffix: "+",
    icon: Clock
  },
  {
    label: "GitHub Repositories",
    value: 15,
    icon: Terminal
  },
  {
    label: "Certificates Earned",
    value: 9,
    icon: Award
  },
  {
    label: "Courses Completed",
    value: 5,
    icon: BookOpen
  }
];

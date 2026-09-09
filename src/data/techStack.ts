export interface TechItem {
  name: string;
  iconName?: string;
  fallbackColor?: string;
  proficiency?: number; // 0 to 100
  yearsOfExperience?: string;
}

export interface TechCategory {
  title: string;
  icon: string;
  items: TechItem[];
}

export const TECH_STACK: TechCategory[] = [
  {
    title: "Frontend",
    icon: "",
    items: [
      { name: "HTML", iconName: "html5", proficiency: 95, yearsOfExperience: "3+ years" },
      { name: "CSS", iconName: "css3", proficiency: 90, yearsOfExperience: "3+ years" },
      { name: "JavaScript", iconName: "javascript", proficiency: 85, yearsOfExperience: "2+ years" },
      { name: "React", iconName: "react", proficiency: 80, yearsOfExperience: "1+ years" },
    ],
  },
  {
    title: "Backend",
    icon: "",
    items: [
      { name: "PHP", iconName: "php", proficiency: 75, yearsOfExperience: "2+ years" },
      { name: "Java", iconName: "java", proficiency: 70, yearsOfExperience: "1+ years" },
      { name: "Node.js", iconName: "nodedotjs", proficiency: 65, yearsOfExperience: "< 1 year" },
    ],
  },
  {
    title: "Database",
    icon: "",
    items: [
      { name: "MySQL", iconName: "mysql", proficiency: 85, yearsOfExperience: "2+ years" },
      { name: "Supabase", iconName: "supabase", proficiency: 75, yearsOfExperience: "1+ years" },
    ],
  },
  {
    title: "Tools & Others",
    icon: "",
    items: [
      { name: "Git", iconName: "git", proficiency: 85 },
      { name: "GitHub", iconName: "github", proficiency: 90 },
      { name: "Figma", iconName: "figma", proficiency: 80 },
      { name: "VS Code", iconName: "visualstudiocode", proficiency: 95 },
      { name: "WordPress", iconName: "wordpress", proficiency: 85 },
      { name: "XAMPP", iconName: "xampp", proficiency: 90 },
    ],
  },
];

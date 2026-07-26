export interface TechItem {
  name: string;
  iconName?: string;
  fallbackColor?: string;
}

export interface TechCategory {
  title: string;
  icon: string;
  items: TechItem[];
}

export const TECH_STACK: TechCategory[] = [
  {
    title: "Frontend Development",
    icon: "",
    items: [
      { name: "HTML", iconName: "html5" },
      { name: "CSS", iconName: "css3" },
      { name: "JavaScript", iconName: "javascript" },
      { name: "React", iconName: "react" },
    ],
  },
  {
    title: "Backend Development",
    icon: "",
    items: [
      { name: "PHP", iconName: "php" },
      { name: "Java", iconName: "java" },
      { name: "C++", iconName: "cplusplus" },
      { name: "MySQL", iconName: "mysql" },
      { name: "Supabase", iconName: "supabase" },
    ],
  },
  {
    title: "UI/UX Design",
    icon: "",
    items: [
      { name: "Figma", iconName: "figma" },
      { name: "Canva", iconName: "canva" },
    ],
  },
  {
    title: "CMS & Website Builders",
    icon: "",
    items: [
      { name: "WordPress", iconName: "wordpress" },
      { name: "Elementor", iconName: "elementor" },
      { name: "Divi", fallbackColor: "7c3aed" },
      { name: "Impreza", fallbackColor: "06b6d4" },
      { name: "Webflow", iconName: "webflow" },
      { name: "GoHighLevel", fallbackColor: "c026d3" },
    ],
  },
  {
    title: "Development Tools",
    icon: "",
    items: [
      { name: "Git", iconName: "git" },
      { name: "GitHub", iconName: "github" },
      { name: "XAMPP", iconName: "xampp" },
    ],
  },
];

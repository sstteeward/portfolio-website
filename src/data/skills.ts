export interface Skill {
  name: string;
  icon?: string;
  color?: string;
  type?: 'text' | 'icon';
  bg?: string;
  text?: string;
}

export const SKILLS: Skill[] = [
  { name: "HTML", icon: "SiHtml5", color: "text-white", type: "icon" },
  { name: "CSS", icon: "SiCss3", color: "text-white", type: "icon" },
  { name: "React", icon: "SiReact", color: "text-white", type: "icon" },
  { name: "JavaScript", icon: "SiJavascript", color: "text-white", type: "icon" },
  { name: "Java", icon: "FaJava", color: "text-white", type: "icon" },
  { name: "C++", icon: "SiCplusplus", color: "text-white", type: "icon" },
  { name: "Git", icon: "SiGit", color: "text-white", type: "icon" },
  { name: "Figma", icon: "SiFigma", color: "text-white", type: "icon" },
  { name: "WordPress", icon: "SiWordpress", color: "text-white", type: "icon" },
  { name: "Divi", type: "text", bg: "bg-[#7c3aed]", text: "Divi" },
  { name: "Impreza", type: "text", bg: "bg-[#06b6d4]", text: "Impreza" },
  { name: "Elementor", icon: "SiElementor", color: "text-white", type: "icon" },
  { name: "Webflow", icon: "SiWebflow", color: "text-white", type: "icon" },
  { name: "GHL", type: "text", bg: "bg-[#c026d3]", text: "GHL" },
  { name: "GitHub", icon: "SiGithub", color: "text-white", type: "icon" },
  { name: "Canva", type: "text", bg: "bg-[#06b6d4]", text: "Canva" },
  { name: "XAMPP", icon: "SiXampp", color: "text-white", type: "icon" },
  { name: "MySQL", icon: "SiMysql", color: "text-white", type: "icon" },
  { name: "PHP", icon: "SiPhp", color: "text-white", type: "icon" },
  { name: "Supabase", icon: "SiSupabase", color: "text-white", type: "icon" },
];

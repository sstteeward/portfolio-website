export interface Project {
  title: string;
  desc: string;
  tech: string[];
  link: string;
  github: string;
  color: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'SIL Monitoring System',
    desc: 'A full-stack student internship and laboratory (SIL) monitoring system built as my Software Engineering capstone. Tracks student progress, manages submissions, and provides dashboards for coordinators and admins.',
    tech: ['React', 'JavaScript', 'CSS', 'Supabase'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
  },
  {
    title: 'Asian College EIS',
    desc: 'A functional Enrollment Information System (EIS) website built for my Web Design subject. Features student enrollment workflows and information management, built with PHP and CSS.',
    tech: ['PHP', 'CSS', 'HTML'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
  },
  {
    title: 'Asian College Speech Recognition Software',
    desc: 'A speech recognition web application built with vanilla JavaScript, HTML, and CSS. Deployed live on Vercel.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
  },
  {
    title: 'Re-creating website in the react.js',
    desc: 'This is a prelim exam laboratory activity.',
    tech: ['React'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
  },
  {
    title: 'Order Management System',
    desc: 'This is a project is made to layout the order management system.',
    tech: ['Figma', 'Flowchart', 'Wireframe'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
  },
  {
    title: 'Portfolio Website',
    desc: 'This is a laboratory activity.',
    tech: ['React', 'HTML', 'CSS'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
  },
];

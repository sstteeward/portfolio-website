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
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'Asian College EIS',
    desc: 'A functional Enrollment Information System (EIS) website built for my Web Design subject. Features student enrollment workflows and information management, built with PHP and CSS.',
    tech: ['PHP', 'CSS', 'HTML'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-red-500/20',
  },
  {
    title: 'Asian College Speech Recognition Software',
    desc: 'A speech recognition web application built with vanilla JavaScript, HTML, and CSS. Deployed live on Vercel.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: '#',
    github: '#',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Re-creating website in the react.js',
    desc: 'This is a prelim exam laboratory activity.',
    tech: ['React'],
    link: '#',
    github: '#',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Order Management System',
    desc: 'This is a project is made to layout the order management system.',
    tech: ['Figma', 'Flowchart', 'Wireframe'],
    link: '#',
    github: '#',
    color: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    title: 'Portfolio Website',
    desc: 'This is a laboratory activity.',
    tech: ['React', 'HTML', 'CSS'],
    link: '#',
    github: '#',
    color: 'from-fuchsia-500/20 to-pink-500/20',
  },
];

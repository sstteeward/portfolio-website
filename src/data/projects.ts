import silMonitoringImg from '../assets/images/SIL Monitoring System.png';
import asianCollegeEisImg from '../assets/images/Asian College EIS.png';
import asianCollegeSpeechImg from '../assets/images/Asian College Speech Recognition Software.png';
import orderManagementImg from '../assets/images/Ordering System.png';
import portfolioWebsiteImg from '../assets/images/Portfolio Website.png';
import recreatingWebsiteImg from '../assets/images/Re-creating website in the react.js.png';

export interface Project {
  title: string;
  desc: string;
  tech: string[];
  link: string;
  github: string;
  color: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'SIL Monitoring System',
    desc: 'A full-stack student internship and laboratory (SIL) monitoring system built as my Software Engineering capstone. Tracks student progress, manages submissions, and provides dashboards for coordinators and admins.',
    tech: ['React', 'JavaScript', 'CSS', 'Supabase'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
    image: silMonitoringImg,
  },
  {
    title: 'Asian College EIS',
    desc: 'A functional Enrollment Information System (EIS) website built for my Web Design subject. Features student enrollment workflows and information management, built with PHP and CSS.',
    tech: ['PHP', 'CSS', 'HTML'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
    image: asianCollegeEisImg,
  },
  {
    title: 'Asian College Speech Recognition Software',
    desc: 'A speech recognition web application built with vanilla JavaScript, HTML, and CSS. Deployed live on Vercel.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
    image: asianCollegeSpeechImg,
  },
  {
    title: 'Re-creating website in the react.js',
    desc: 'This is a prelim exam laboratory activity.',
    tech: ['React'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
    image: recreatingWebsiteImg,
  },
  {
    title: 'Order Management System',
    desc: 'This is a project is made to layout the order management system.',
    tech: ['Figma', 'Flowchart', 'Wireframe'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
    image: orderManagementImg,
  },
  {
    title: 'Portfolio Website',
    desc: 'This is a laboratory activity.',
    tech: ['React', 'HTML', 'CSS'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
    image: portfolioWebsiteImg,
  },
];

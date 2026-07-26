export interface NavLink {
  name: string;
  path: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: 'home' },
  { name: 'About', path: 'about' },
  { name: 'Education', path: 'education' },
  { name: 'Skills', path: 'skills-experience' },
  { name: 'Projects', path: 'projects' },
  { name: 'Contact', path: 'contact' },
];

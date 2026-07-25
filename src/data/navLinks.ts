export interface NavLink {
  name: string;
  path: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: 'home' },
  { name: 'Education', path: 'education' },
  { name: 'About Me', path: 'skills-experience' },
  { name: 'Projects', path: 'projects' },
  { name: 'Feedback', path: 'feedback' },
  { name: 'Contact', path: 'contact' },
];

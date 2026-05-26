import { Mail, Linkedin, Github, Facebook, Instagram } from 'lucide-react';

export interface ContactLink {
  title: string;
  value: string;
  icon: any; // lucide-react component
  href: string;
  iconColor: string;
  iconBg: string;
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    title: 'EMAIL',
    value: 'stewardhumiwat@gmail.com',
    icon: Mail,
    href: 'mailto:stewardhumiwat@gmail.com',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
  },
  {
    title: 'LINKEDIN',
    value: 'Steward S. Humiwat',
    icon: Linkedin,
    href: 'https://linkedin.com/',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
  },
  {
    title: 'GITHUB',
    value: 'sstteeward',
    icon: Github,
    href: 'https://github.com/sstteeward',
    iconColor: 'text-gray-300',
    iconBg: 'bg-white/10',
  },
  {
    title: 'FACEBOOK',
    value: 'Steward Sarong Humiwat',
    icon: Facebook,
    href: 'https://facebook.com/',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-600/10',
  },
  {
    title: 'INSTAGRAM',
    value: '@sho__ess',
    icon: Instagram,
    href: 'https://instagram.com/sho__ess',
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-500/10',
  },
];

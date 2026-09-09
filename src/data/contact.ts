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
    iconColor: 'text-[#111111]',
    iconBg: 'bg-[#F5F5F5]',
  },
  {
    title: 'LINKEDIN',
    value: 'Steward S. Humiwat',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/steward-humiwat-a7a324334/',
    iconColor: 'text-[#111111]',
    iconBg: 'bg-[#F5F5F5]',
  },
  {
    title: 'GITHUB',
    value: 'sstteeward',
    icon: Github,
    href: 'https://github.com/sstteeward',
    iconColor: 'text-[#111111]',
    iconBg: 'bg-[#F5F5F5]',
  },
  {
    title: 'FACEBOOK',
    value: 'Steward Sarong Humiwat',
    icon: Facebook,
    href: 'https://www.facebook.com/sstteward',
    iconColor: 'text-[#111111]',
    iconBg: 'bg-[#F5F5F5]',
  },
  {
    title: 'INSTAGRAM',
    value: '@sho__ess',
    icon: Instagram,
    href: 'https://instagram.com/sho__ess',
    iconColor: 'text-[#111111]',
    iconBg: 'bg-[#F5F5F5]',
  },
];

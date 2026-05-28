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
    iconColor: 'text-[#F27D26]',
    iconBg: 'bg-[#F27D26]/10',
  },
  {
    title: 'LINKEDIN',
    value: 'Steward S. Humiwat',
    icon: Linkedin,
    href: 'https://linkedin.com/',
    iconColor: 'text-[#F27D26]',
    iconBg: 'bg-[#F27D26]/10',
  },
  {
    title: 'GITHUB',
    value: 'sstteeward',
    icon: Github,
    href: 'https://github.com/sstteeward',
    iconColor: 'text-[#F27D26]',
    iconBg: 'bg-[#F27D26]/10',
  },
  {
    title: 'FACEBOOK',
    value: 'Steward Sarong Humiwat',
    icon: Facebook,
    href: 'https://facebook.com/',
    iconColor: 'text-[#F27D26]',
    iconBg: 'bg-[#F27D26]/10',
  },
  {
    title: 'INSTAGRAM',
    value: '@sho__ess',
    icon: Instagram,
    href: 'https://instagram.com/sho__ess',
    iconColor: 'text-[#F27D26]',
    iconBg: 'bg-[#F27D26]/10',
  },
];

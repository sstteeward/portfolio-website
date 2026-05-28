export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  desc: string;
}

export const IMAGES: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600&h=900',
    title: 'Code & Coffee',
    desc: 'The essential developer fuel.',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600&h=900',
    title: 'Modern Workspace',
    desc: 'Clean environment for clean code.',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900',
    title: 'Late Night Debugging',
    desc: 'When the best ideas come to light.',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600&h=900',
    title: 'Data Visualization',
    desc: 'Turning complex logic into beautiful UI.',
  },
];

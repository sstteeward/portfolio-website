import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className = '', hoverEffect = true }: GlassCardProps) {
  return (
    <div 
      className={`relative overflow-hidden rounded-3xl border border-[#E5E5E5] bg-[#FFFFFF] p-6 transition-all duration-300 ${
        hoverEffect ? 'hover:border-[#111111]/30 hover:shadow-sm' : ''
      } ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

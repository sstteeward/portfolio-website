import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className = '', hoverEffect = true }: GlassCardProps) {
  return (
    <div 
      className={`relative overflow-hidden rounded-3xl border border-white/5 bg-[#0A0A0A] p-6 backdrop-blur-md transition-all duration-300 ${
        hoverEffect ? 'hover:border-[#F27D26]/50 hover:bg-white/5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : ''
      } ${className}`}
    >
      {hoverEffect && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

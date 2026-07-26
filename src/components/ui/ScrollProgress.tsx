import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 w-full bg-white/5">
      <div 
        className="h-full bg-gradient-to-r from-[#F27D26]/50 via-[#F27D26] to-yellow-500 shadow-[0_0_10px_rgba(242,125,38,0.5)] transition-all duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

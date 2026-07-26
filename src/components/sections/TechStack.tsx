import { motion } from 'motion/react';
import { TECH_STACK, TechItem } from '../../data/techStack';

const TechCard = ({ item, index }: { item: TechItem; index: number }) => {
  const iconSrc = item.iconName 
    ? `https://cdn.simpleicons.org/${item.iconName}/white`
    : `https://ui-avatars.com/api/?name=${item.name}&background=${item.fallbackColor || 'F27D26'}&color=fff&bold=true&rounded=true`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
      className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F27D26]/50 hover:bg-white/10 hover:shadow-[0_0_20px_-5px_rgba(242,125,38,0.2)]"

    >
      <div className="relative flex h-10 w-10 items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <div className="absolute inset-0 rounded-full bg-[#F27D26] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-20" />
        <img
          src={iconSrc}
          alt={`${item.name} logo`}
          loading="lazy"
          className="relative z-10 h-7 w-7 object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          onError={(e) => {
            e.currentTarget.src = `https://ui-avatars.com/api/?name=${item.name}&background=${item.fallbackColor || 'F27D26'}&color=fff&bold=true&rounded=true`;
          }}
        />
      </div>
      <span className="text-xs font-semibold tracking-wide text-white/70 transition-colors duration-300 group-hover:text-white">
        {item.name}
      </span>
    </motion.div>
  );
};

export default function TechStack() {
  return (
    <div className="w-full">
      <div className="mb-10 flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-[#F27D26] shadow-[0_0_10px_2px_rgba(242,125,38,0.5)]" />
        <h2 className="text-sm font-bold tracking-widest text-white/80 uppercase">TECH STACK</h2>
      </div>

      <div className="flex w-full flex-col gap-8">
        {TECH_STACK.map((category, catIndex) => (
          <div key={category.title} className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 border-b border-white/5 pb-2"
            >
              <span className="text-xl">{category.icon}</span>
              <h4 className="text-lg font-semibold text-white/90">{category.title}</h4>
            </motion.div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              {category.items.map((item, i) => (
                <TechCard key={item.name} item={item} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

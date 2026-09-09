import { motion } from 'motion/react';
import { SKILLS } from '../../data/skills';

export default function Skills() {
  return (
    <div>
      <div className="mb-10 flex items-center gap-3">
        <div className="h-1.5 w-1.5 rounded-full bg-[#111111]" />
        <h2 className="text-sm font-bold tracking-widest text-[#555555] uppercase">TECH STACK</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
        {SKILLS.map((item, i) => (
          <motion.div
            key={i}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }
            }}
            className="group flex flex-col items-center justify-center gap-4 rounded-3xl border border-[#E5E5E5] bg-[#FFFFFF] p-6 transition-all hover:border-[#111111]/30 hover:shadow-xs"
          >
            <div className="flex h-16 w-16 items-center justify-center">
              {item.type === "text" ? (
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} text-[10px] font-bold tracking-wider text-white`}>
                  {item.text}
                </div>
              ) : (
                <img 
                  src={`https://cdn.simpleicons.org/${item.name.toLowerCase() === 'javascript' ? 'javascript' : item.name.toLowerCase() === 'html' ? 'html5' : item.name.toLowerCase() === 'css' ? 'css3' : item.name.toLowerCase() === 'c++' ? 'cplusplus' : item.name.toLowerCase() === 'github' ? 'github' : item.name.toLowerCase() === 'elementor' ? 'elementor' : item.name.toLowerCase() === 'webflow' ? 'webflow' : item.name.toLowerCase() === 'mysql' ? 'mysql' : item.name.toLowerCase() === 'php' ? 'php' : item.name.toLowerCase() === 'supabase' ? 'supabase' : item.name.toLowerCase() === 'xampp' ? 'xampp' : item.name.toLowerCase() === 'canva' ? 'canva' : item.name.toLowerCase() === 'wordpress' ? 'wordpress' : item.name.toLowerCase() === 'react' ? 'react' : item.name.toLowerCase() === 'figma' ? 'figma' : item.name.toLowerCase() === 'git' ? 'git' : item.name.toLowerCase() === 'java' ? 'java' : 'javascript'}/111111`}
                  alt={item.name}
                  className="h-12 w-12 object-contain opacity-80 transition-transform group-hover:scale-110 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${item.name}&background=111111&color=fff&bold=true&rounded=true`
                  }}
                />
              )}
            </div>
            <span className="text-sm font-semibold text-[#555555] group-hover:text-[#111111]">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

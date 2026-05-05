import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const profileImg = new URL('../assets/images/profile.jpg', import.meta.url).href;

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* Hero Section */}
      <section className="flex min-h-[80vh] flex-col justify-center py-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 md:gap-16 lg:gap-24 w-full">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 md:mb-12"
            >
              <span className="font-mono text-sm tracking-widest text-[#F27D26] uppercase">
                Portfolio
              </span>
              <h1 className="mt-4 text-6xl font-bold tracking-tighter sm:text-8xl md:text-8xl lg:text-[10rem] leading-[0.9] shrink-0">
                steward
                <br />
                humiwat<span className="text-[#F27D26]">.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col items-start gap-8 sm:flex-row sm:items-center"
            >
              <p className="max-w-md text-lg text-white/60 leading-relaxed">
                I build interactive, modern, and beautiful web experiences. Passionate about frontend design, performance, and clean code.
              </p>

              <a
                href="#projects"
                className="group shrink-0 flex items-center gap-2 rounded-full border border-white/20 bg-white/5 py-4 px-8 text-sm font-medium transition-all hover:bg-white/10"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            src={profileImg}
            alt="Steward Humiwat"
            className="w-48 h-64 sm:w-64 sm:h-80 md:w-[20rem] md:h-[26rem] xl:w-[26rem] xl:h-[32rem] object-cover rounded-[2rem] xl:rounded-[3rem] border border-white/10 shadow-2xl shrink-0"
          />
        </div>
      </section>

      {/* Skills & Experience Section */}
      <section className="py-24 border-t border-white/10 flex flex-col items-center w-full" id="skills-experience">
        <div className="text-center mb-20 w-full">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">WHAT I KNOW</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#8b6ce3] mb-6">Skills & Experience</h3>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Technologies I work with and the experiences that have shaped my journey.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 w-full">
          {/* Tech Stack Column */}
          <div>
            <div className="mb-10 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_2px_rgba(99,102,241,0.5)]" />
              <h2 className="text-sm font-bold tracking-widest text-white/80 uppercase">TECH STACK</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
          {[
            { name: "HTML", icon: "SiHtml5", color: "text-white" },
            { name: "CSS", icon: "SiCss3", color: "text-white" },
            { name: "React", icon: "SiReact", color: "text-white" },
            { name: "JavaScript", icon: "SiJavascript", color: "text-white" },
            { name: "Java", icon: "FaJava", color: "text-white" },
            { name: "C++", icon: "SiCplusplus", color: "text-white" },
            { name: "Git", icon: "SiGit", color: "text-white" },
            { name: "Figma", icon: "SiFigma", color: "text-white" },
            { name: "WordPress", icon: "SiWordpress", color: "text-white" },
            { name: "Divi", type: "text", bg: "bg-[#7c3aed]", text: "Divi" },
            { name: "Impreza", type: "text", bg: "bg-[#06b6d4]", text: "Impreza" },
            { name: "Elementor", icon: "SiElementor", color: "text-white" },
            { name: "Webflow", icon: "SiWebflow", color: "text-white" },
            { name: "GHL", type: "text", bg: "bg-[#c026d3]", text: "GHL" },
            { name: "GitHub", icon: "SiGithub", color: "text-white" },
            { name: "Canva", type: "text", bg: "bg-[#06b6d4]", text: "Canva" },
            { name: "XAMPP", icon: "SiXampp", color: "text-white" },
            { name: "MySQL", icon: "SiMysql", color: "text-white" },
            { name: "PHP", icon: "SiPhp", color: "text-white" },
            { name: "Supabase", icon: "SiSupabase", color: "text-white" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }
              }}
              className="group flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/5 bg-[#0A0A0A] p-6 transition-all hover:border-white/10 hover:bg-white/5"
            >
              <div className="flex h-16 w-16 items-center justify-center">
                {item.type === "text" ? (
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} text-[10px] font-bold tracking-wider text-white`}>
                    {item.text}
                  </div>
                ) : (
                  <img 
                    src={`https://cdn.simpleicons.org/${item.name.toLowerCase() === 'javascript' ? 'javascript' : item.name.toLowerCase() === 'html' ? 'html5' : item.name.toLowerCase() === 'css' ? 'css3' : item.name.toLowerCase() === 'c++' ? 'cplusplus' : item.name.toLowerCase() === 'github' ? 'github' : item.name.toLowerCase() === 'elementor' ? 'elementor' : item.name.toLowerCase() === 'webflow' ? 'webflow' : item.name.toLowerCase() === 'mysql' ? 'mysql' : item.name.toLowerCase() === 'php' ? 'php' : item.name.toLowerCase() === 'supabase' ? 'supabase' : item.name.toLowerCase() === 'xampp' ? 'xampp' : item.name.toLowerCase() === 'canva' ? 'canva' : item.name.toLowerCase() === 'wordpress' ? 'wordpress' : item.name.toLowerCase() === 'react' ? 'react' : item.name.toLowerCase() === 'figma' ? 'figma' : item.name.toLowerCase() === 'git' ? 'git' : item.name.toLowerCase() === 'java' ? 'java' : 'javascript'}/white`}
                    alt={item.name}
                    className="h-12 w-12 object-contain opacity-90 transition-transform group-hover:scale-110 group-hover:opacity-100"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${item.name}&background=random&color=fff&bold=true&rounded=true`
                    }}
                  />
                )}
              </div>
              <span className="text-sm font-bold text-white/60 group-hover:text-white/90">{item.name}</span>
            </motion.div>
          ))}
        </div>
          </div>

          {/* Work History Column */}
          <div>
            <div className="mb-10 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]" />
              <h2 className="text-sm font-bold tracking-widest text-white/80 uppercase">WORK HISTORY</h2>
            </div>
            
            <div className="relative space-y-8">
          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-5 top-0 w-0.5 -translate-x-px bg-white/5"
          />
          {[
            {
              role: "Junior Web Developer",
              company: "Sites at Scale",
              date: "Sept, 2025 \u2013 Feb, 2026",
              description: [
                "Hired and absorbed as a full-time Junior Web Developer",
                "Built and maintained client websites at scale",
                "Worked on Wordpress and Webflow Sites"
              ],
            },
            {
              role: "Web Developer Intern",
              company: "Sites at Scale",
              date: "July, 2025 \u2013 Aug, 2025",
              description: [
                "Completed internship as part of 2nd year school requirement",
                "Assisted in web development tasks and client projects"
              ],
            },
            {
              role: "IT Support Intern",
              company: "Ece Contact Centers",
              date: "June 17, 2024 \u2013 July 03, 2024",
              description: [
                "Cleaning and Monitoring PC",
                "Wiring Up Ethernet Plugs"
              ],
            },
            {
              role: "Tasker",
              company: "Remotasks",
              date: "Jan 30, 2024 \u2013 Dec, 2024",
              description: [
                "Data Annotating"
              ],
            },
            {
              role: "A.I Trainer",
              company: "Outlier AI",
              date: "Sept, 2024 \u2013 Nov, 2024",
              description: [
                "Guiding A.I",
                "Correcting the A.I prompt"
              ],
            }
          ].map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-start group gap-8"
            >
              {/* Timeline dot */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                className="absolute left-0 top-12 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-[#0A0A0A] z-10 ml-5"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 10, delay: i * 0.1 + 0.4 }}
                  className="h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_2px_rgba(99,102,241,0.5)]" 
                />
              </motion.div>
              
              {/* Content box */}
              <div className="w-full pl-16">
                <div className="flex flex-col rounded-3xl border border-white/5 bg-[#0A0A0A] p-6 transition-colors hover:border-white/10 hover:bg-white/[0.02]">
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white/90">{job.role}</h3>
                      <span className="text-sm font-semibold text-indigo-400">{job.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/40 mb-4 text-xs font-semibold">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{job.date}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {job.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-white/60 font-medium">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-slate-200 dark:bg-slate-800"></div>
            <span className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.4em]">Selected Works</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-display uppercase text-slate-900 dark:text-white tracking-tighter leading-none mb-8"
          >
            Tanlangan <br />
            <span className="text-slate-300 dark:text-slate-700">Loyihalar</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed"
          >
            Backend Developer, asosan crm panellari hamda xizmatlar tizimlari uchun ishlab chiqarilgan.
          </motion.p>
        </div>

        <div className="space-y-40">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              {/* Project Image Container */}
              <div className="w-full md:w-3/5 group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-slate-100 dark:bg-slate-900">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-2/5 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-slate-300 dark:text-slate-700 font-mono text-sm">0{idx + 1}</span>
                    <div className="h-px w-8 bg-slate-200 dark:bg-slate-800"></div>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display uppercase text-slate-900 dark:text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 group/link"
                  >
                    <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover/link:bg-slate-900 dark:group-hover/link:bg-white group-hover/link:text-white dark:group-hover/link:text-slate-900 transition-all duration-300">
                      <Github size={20} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white">Kodni ko'rish</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Footer Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 pt-20 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <p className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Otabek Abdullayev
          </p>
          <a 
            href="https://github.com/otabek0311" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-slate-900 dark:text-white font-bold uppercase tracking-[0.2em] text-xs"
          >
            Barcha repozitoriyalar
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

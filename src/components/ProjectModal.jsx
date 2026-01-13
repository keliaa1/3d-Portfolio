import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)' }}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-morphism w-full max-w-2xl overflow-hidden relative"
          style={{ borderRadius: '40px', padding: '60px' }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col gap-8">
            <div>
              <span style={{ fontSize: '10px', fontWeight: '900', letterSpacing: '0.4em', color: project.color, marginBottom: '16px', display: 'block' }}>
                {project.tech}
              </span>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: '1' }}>
                {project.title}
              </h2>
            </div>

            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', fontWeight: '300' }}>
              {project.longDesc}
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              {project.tags.map(tag => (
                <span key={tag} style={{ fontSize: '10px', fontWeight: '800', color: 'rgba(255,255,255,0.4)', padding: '8px 16px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px' }}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-accent-blue hover:text-white transition-all transform hover:scale-105"
              >
                LIVE DEMO <ExternalLink size={18} />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 glass-morphism text-white font-black rounded-2xl hover:bg-white/10 transition-all font-bold"
              >
                GITHUB <Github size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;

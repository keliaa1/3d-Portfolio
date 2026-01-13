import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Mento",
      tech: "Next.js / Convex",
      color: "#00d2ff",
      longDesc: "A boundary-pushing 3D drive simulation that explores the intersection of spatial computing and reactive web interfaces. Built with Spline for the 3D core and React for the control layer.",
      tags: ["Next.js", "Convex", "Clerk", "Edgestore","Framer Motion"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "PlanShift",
      tech: "THREE.JS / Blender",
      color: "#ff00c8",
      longDesc: "Visualizing 2d floor plans in 3d space. Working with Happy",
      tags: ["GLSL", "Three.js", "React"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "FlowPay",
      tech: "React native / Embedded",
      color: "#ff9d00",
      longDesc: "A futuristic dashboard for decentralized financial assets. It features interactive graphs and a spatial UI that adapts to user movement and device orientation.",
      tags: ["React native", "Embedded", "PostProcessing", "Motion"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" style={{ padding: '240px 0' }}>
      <div className="section-container">
        <div className="text-center" style={{ marginBottom: '120px' }}>
          <p style={{ color: 'var(--accent-pink)', fontWeight: '800', letterSpacing: '0.5em', fontSize: '10px', marginBottom: '40px' }}>CURATED WORK</p>
          <h2 className="text-gradient" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1' }}>SELECTED ARCHIVES.</h2>
        </div>

        <div className="flex flex-col mx-auto" style={{ gap: '40px', maxWidth: '700px' }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-morphism group"
              style={{ borderRadius: '40px', cursor: 'pointer' }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex justify-between items-center" style={{ padding: '48px' }}>
                <div>
                  <span style={{ fontSize: '10px', fontWeight: '900', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)', marginBottom: '16px', display: 'block' }}>{project.tech}</span>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-0.04em' }}>{project.title}</h3>
                </div>

                <div className="relative flex items-center justify-center" style={{ width: '80px', height: '80px' }}>
                   <div
                     style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: project.color, borderRadius: '50%', filter: 'blur(30px)', opacity: '0.2' }}
                   />
                   <div style={{ color: 'rgba(255,255,255,0.4)', position: 'relative' }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

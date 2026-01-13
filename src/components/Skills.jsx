import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      name: "FRONTEND",
      skills: ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND"]
    },
    {
      name: "Motion & DESIGN",
      skills: ["FIGMA", "BLENDER", "SPLINE", "THREE.JS"]
    },
    {
      name: "Other",
      skills:["Git", "Cryptography", "Cybersecurity"]
    }
  ];

  return (
    <section id="skills" style={{ padding: '200px 0' }}>
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p style={{ color: 'var(--accent-orange)', fontWeight: '800', letterSpacing: '0.5em', fontSize: '10px', marginBottom: '30px' }}>THE ARSENAL</p>
          <h2 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1', marginBottom: '80px' }}>
            MY STACK.
          </h2>
        </motion.div>

        <div className="flex justify-center flex-wrap" style={{ gap: '20px' }}>
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="glass-morphism"
              style={{
                padding: '30px',
                borderRadius: '24px',
                flex: '0 1 280px',
                textAlign: 'left'
              }}
            >
              <h3 style={{ fontSize: '10px', fontWeight: '900', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)', marginBottom: '20px' }}>{cat.name}</h3>
              <div className="flex flex-wrap" style={{ gap: '10px' }}>
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    style={{
                      fontSize: '11px',
                      fontWeight: '800',
                      color: 'rgba(255,255,255,0.6)',
                      padding: '8px 14px',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '100px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

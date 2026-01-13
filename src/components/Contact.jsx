import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '240px 0' }}>
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p style={{ color: 'rgba(255,255,255,0.3)', fontWeight: '800', letterSpacing: '0.5em', fontSize: '10px', marginBottom: '40px' }}>THE DIALOGUE</p>
          <h2 className="text-gradient" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: '0.9', marginBottom: '80px', trackingTighter: '-0.06em' }}>
            START A <br/>REVOLUTION.
          </h2>

          <div className="flex flex-col items-center" style={{ gap: '80px' }}>
            <a
              href="mailto:simbikelia@gmail.com"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', fontWeight: '300', color: '#fff', textDecoration: 'none', opacity: '0.8' }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
            >
              simbikelia@gmail.com
            </a>

            <div className="flex justify-center" style={{ gap: '60px' }}>
                {["X / TWITTER", "LINKEDIN", "GITHUB"].map(link => (
                  <a
                    key={link}
                    href="https://www.instagram.com/_simbiii__/"
                    style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.4em', color: 'rgba(255,255,255,0.2)', transition: 'color 0.4s' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}
                  >
                    {link}
                  </a>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

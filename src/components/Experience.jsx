import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024",
    title: "3D Designer",
    company: "Orthoverse",
    color: "#1abc9c", // Teal/Cyan
    position: "top",
    description:
      "Designed immersive 3D assets and environments for virtual spaces.",
  },
  {
    year: "2025",
    title: "Front-End Developer",
    company: "Blink-Tech",
    color: "#3498db", // Blue
    position: "bottom",
    description:
      "Developed responsive and interactive user interfaces, ensuring high performance and seamless user experiences.",
  },
  {
    year: "2025-",
    title: "Freelance",
    company: "Freelance",
    color: "#2980b9", // Dark Blue
    position: "top",
    description:
      "Delivering custom frontend solutions and 3D designs for diverse clients, focusing on innovation and quality.",
  },
  {
    year: "2026",
    title: "CoFounder & Lead Dev",
    company: "4Ward",
    color: "#8e44ad", // Purple
    position: "bottom",
    description:
      "Leading the technical vision and frontend architecture for a startup focused on next-gen digital solutions.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        minHeight: "150vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "100px 0",
        background: "black",
        overflow: "hidden",
        marginBottom: "200px",
      }}
    >
      <div className="w-full px-10">
        <div className="text-left mb-48">
          <h2
            className="text-white"
            style={{
              fontSize: "80px",
              fontWeight: "900",
              lineHeight: "0.8",
              letterSpacing: "-4px",
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              TIMELINE
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{ color: "rgba(255,255,255,0.05)" }}
            >
              Experience
            </motion.span>
          </h2>
          <div className="flex gap-3 mt-8">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="w-2 h-2 rounded-full bg-white/10"
              />
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-[750px] mx-[50px] min-h-[800px] flex items-center px-4">
          {/* Main Dotted Timeline */}
          <div className="absolute top-1/2 left-0 w-full h-0 border-t-2 border-dashed border-white/10 -translate-y-1/2" />

          <div
            className="flex justify-between w-full relative z-10"
            style={{ gap: "10px" }}
          >
            {experiences.map((exp, idx) => {
              const isEarlyYear = idx < 1; // 2024
              const isRightCurve = idx === 2; // 2025- curve right
              const isLeftCurve = idx === 1; // 2025 curve left
              const cardSide = isEarlyYear ? "left" : "right"; // If isEarlyYear, anchor to left of node (meaning card is to the right)

              return (
                <div key={idx} className="relative flex flex-col items-center">
                  {/* Year Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.1,
                      type: "spring",
                      stiffness: 150,
                    }}
                    className="w-16 h-16 rounded-full bg-black border-[5px] flex items-center justify-center relative z-20"
                    style={{
                      borderColor: exp.color,
                      boxShadow: `0 0 30px ${exp.color}44`,
                    }}
                  >
                    <span className="text-[14px] font-black text-white">
                      {exp.year}
                    </span>
                  </motion.div>

                  {/* Curved Connector SVG - Hook Shape (Pointing Inward) */}
                  <svg
                    className="absolute pointer-events-none overflow-visible"
                    style={{
                      width: "240px",
                      height: "400px",
                      [exp.position === "top" ? "bottom" : "top"]: "32px",
                      left: "50%",
                      transform:
                        isEarlyYear || isRightCurve
                          ? "translateX(0)"
                          : "translateX(-100%)",
                    }}
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.6 + idx * 0.1 }}
                      d={
                        isEarlyYear || isRightCurve
                          ? exp.position === "top"
                            ? "M 0 400 L 0 250 C 0 50 240 50 240 150"
                            : "M 0 0 L 0 150 C 0 350 240 350 240 250"
                          : isLeftCurve
                          ? exp.position === "top"
                            ? "M 240 400 L 240 250 C 240 50 0 50 0 150"
                            : "M 240 0 L 240 150 C 240 350 0 350 0 250"
                          : exp.position === "top"
                          ? "M 240 400 L 240 250 C 240 50 0 50 0 150"
                          : "M 240 0 L 240 150 C 240 350 0 350 0 250"
                      }
                      fill="none"
                      stroke={exp.color}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* End Tip on path */}
                    <motion.circle
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.8 + idx * 0.1 }}
                      cx={isEarlyYear || isRightCurve ? 240 : 0}
                      cy={exp.position === "top" ? 150 : 250}
                      r="8"
                      fill={exp.color}
                    />
                  </svg>

                  {/* Info Card - Spacious Right-Aligned Layout */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      x:
                        isEarlyYear || isRightCurve
                          ? 40
                          : isLeftCurve
                          ? -40
                          : -40,
                    }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 1.5 + idx * 0.1,
                      type: "spring",
                      stiffness: 80,
                    }}
                    className="absolute z-30 flex flex-row-reverse items-center"
                    style={{
                      [exp.position === "top" ? "bottom" : "top"]: "240px",
                      [isLeftCurve
                        ? "right"
                        : isEarlyYear || isRightCurve
                        ? "left"
                        : "right"]: "200px",
                      width: "280px",
                      borderRadius: "32px",
                      padding: "15px",
                      gap: "24px",
                      border: `1px solid rgba(255, 255, 255, 0.08)`,
                      background: "rgba(5, 5, 5, 0.65)",
                      backdropFilter: "blur(20px)",
                      boxShadow: `0 30px 80px -20px rgba(0,0,0,0.8), 0 0 40px ${exp.color}15`,
                    }}
                  >
                    {/* Right Side (Avatar/Icon) due to flex-row-reverse */}
                    <div
                      className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: `linear-gradient(225deg, ${exp.color}55, ${exp.color}11)`,
                        border: `2px solid ${exp.color}77`,
                      }}
                    >
                      <div
                        className="text-[28px] font-black"
                        style={{
                          color: exp.color,
                          textShadow: `0 0 30px ${exp.color}88`,
                        }}
                      >
                        {exp.company.charAt(0)}
                      </div>
                      <div
                        className="absolute inset-0 blur-xl opacity-40"
                        style={{ background: exp.color }}
                      />
                    </div>

                    {/* Left Side (Content) due to flex-row-reverse - Aligned Right */}
                    <div
                      className="flex flex-col flex-grow text-right items-end"
                      style={{ gap: "20px" }}
                    >
                      <div className="flex flex-col">
                        <h4 className="text-[24px] font-bold text-white leading-tight mb-1">
                          {exp.title}
                        </h4>
                        <span
                          className="text-[12px] font-bold tracking-[0.2em] uppercase opacity-70"
                          style={{ color: exp.color }}
                        >
                          {exp.company} // {exp.year}
                        </span>
                      </div>

                      <p className="text-white/70 text-[15px] leading-relaxed font-medium">
                        {exp.description}
                      </p>

                      {/* Decorative Elements */}
                      <div className="flex items-center gap-4 opacity-30">
                        <div className="h-px w-16 bg-gradient-to-l from-white/40 to-transparent" />
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-white/40" />
                          <div className="w-2 h-2 rounded-full bg-white/40" />
                        </div>
                      </div>
                    </div>

                    {/* Aesthetic Background Element */}
                    <div
                      className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[80px] opacity-10"
                      style={{ background: exp.color }}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

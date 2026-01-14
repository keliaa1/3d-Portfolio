import React from "react";
import { Marquee } from "./magicui/Marquee";
import ReviewCard from "./magicui/ReviewCard";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "The visuals are absolutely stunning. Truly a masterpiece.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Increible attention to detail. The animations are top notch.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "This portfolio sets a new standard for web design.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden bg-black py-20"
    >
      <div className="mb-20 text-center z-10">
        <h2 className="text-white" style={{ fontSize: '60px', fontWeight: '900', letterSpacing: '-2px' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            WHAT THEY SAY
          </motion.span>
        </h2>
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 tracking-[0.3em] font-bold text-sm mt-4"
            style={{ marginBottom: '40px', marginTop: '40px' }}
        >
            TESTIMONIALS
        </motion.p>
      </div>

      <Marquee pauseOnHover className="[--duration:40s]" style={{ '--gap': '2.5rem', '--duration': '90s' }}>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]" style={{ '--gap': '2.5rem', '--duration': '90s', marginTop: '2.5rem' }}>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Gradient Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
    </section>
  );
};

export default Testimonials;

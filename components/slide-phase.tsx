"use client";

import { motion } from "motion/react";

interface SlidePhaseProps {
  children: React.ReactNode;
  delay?: number;
}

export const SlidePhase = ({ children, delay = 0 }: SlidePhaseProps) => {
  return (
    <motion.div
      initial={{ transform: "translateX(-20%)", opacity: 0 }}
      whileInView={{
        transform: "translateX(0%)",
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        ease: [0.08, 0.65, 0.53, 0.96],
        duration: 0.6,
        delay: delay * 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};

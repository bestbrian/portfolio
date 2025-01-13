"use client";

import { EASE } from "@/lib/types";
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
        ease: EASE.slideIn,
        duration: 0.6,
        delay: delay * 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};

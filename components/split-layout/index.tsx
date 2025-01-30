"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { EASE } from "@/lib/types";

export const SplitLayout = ({
  section,
  children,
}: {
  section?: string;
  children: ReactNode;
}) => {
  return (
    <motion.section
      // className="p-4"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        ease: EASE.slideIn,
        duration: 0.6,
      }}
      className="
      mx-auto
        grid 
        grid-cols-12 
        gap-6
        max-w-2xl
        w-full
        mt-12
      "
    >
      <aside
        className="
          col-span-12 md:col-span-1 
          font-subway font-black 
          text-center md:text-right 
          flex items-start justify-center md:justify-end
        "
      >
        <div className="pt-4 text-lg md:text-base whitespace-nowrap pb-0">
          {section}
        </div>
      </aside>

      <div
        className="
          font-satoshi 
          col-span-12 md:col-span-11
        "
      >
        {children}
      </div>
    </motion.section>
  );
};

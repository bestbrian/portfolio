"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import TextRevealByWord from "../text-reveal";
import { BraidEffect } from "../braid";

export function About() {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 51%", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const pathLengths = [
    useTransform(scrollYProgress, [0, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0, 0.8], [0, 1]),
  ];

  return (
    <div className="w-full relative" ref={ref}>
      <motion.div style={{ opacity }}>
        <TextRevealByWord
          paragraph="I tame messy code, refine sloppy processes, and deliver clean, powerful results."
          className="mb-4 font-subway"
        >
          <BraidEffect pathLengths={pathLengths} />
        </TextRevealByWord>
      </motion.div>
    </div>
  );
}

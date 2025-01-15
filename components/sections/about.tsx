"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { BraidEffect } from "../braid";

export function About() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end 25%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div
      className="w-screen relative -mx-[50vw] left-[50%] right-[50%]"
      ref={ref}
    >
      <motion.div style={{ opacity }}>
        <BraidEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </motion.div>
    </div>
  );
}

"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import { BraidEffect } from "../braid";

export function About() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  useEffect(() => {
    console.log("HELLO HERE:", scrollYProgress);
  }, [scrollYProgress]);
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);

  return (
    <div className="w-full relative" ref={ref}>
      <BraidEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}

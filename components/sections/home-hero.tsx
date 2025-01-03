"use client";
import { motion, useAnimate } from "motion/react";
import { SplitLayout } from "../split-layout";
import Image from "next/image";
import { animations, EASE } from "@/lib/types";
import { useEffect } from "react";

export const HomeHero = () => {
  const [scope, animate] = useAnimate();

  const sequence: [string, Record<string, any>, Record<string, any>?][] = [
    ["#box", { x: 200 }, { duration: 1 }], // spin
    ["#box", { x: -20, scale: 2, rotate: 360 }, { duration: 1 }], // scale
    ["#box", { scale: 0.5, borderRadius: "50%" }, { duration: 1 }], // change color
  ];

  useEffect(() => {
    animate(sequence);
  }, []);

  return (
    <section ref={scope} className="flex flex-col gap-2 my-20">
      <motion.div
        id="box"
        style={{ width: 100, height: 100, backgroundColor: "blue" }}
      ></motion.div>
      <div>
        <motion.h1
          className="text-4xl mb-4"
          variants={animations.slideUp(true)}
        >
          Work
        </motion.h1>
        <motion.p className="text-muted" variants={animations.slideUp(true)}>
          An overview of my career
        </motion.p>
      </div>
      <SplitLayout>
        <motion.div
          className="flex justify-center"
          variants={animations.imageFadeIn}
        >
          <Image
            src="/images/brian_image.jpeg"
            alt="Brian Best"
            height={360}
            width={360}
            className="object-center object-cover rounded-md"
            priority
          />
        </motion.div>

        <motion.h2
          className="text-center font-subway mt-8 mb-4 text-3xl dark:text-white"
          variants={animations.slideUp(true, 0.1, 5)}
        >
          HI, MY NAME IS BRIAN <br />
          AND I AM THE BEST
        </motion.h2>
      </SplitLayout>
    </section>
  );
};

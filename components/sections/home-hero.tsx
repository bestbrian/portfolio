"use client";
import { motion } from "motion/react";
import { SplitLayout } from "../split-layout";
import Image from "next/image";
import { animations, EASE } from "@/lib/types";

export const HomeHero = () => {
  return (
    <motion.section
      className="flex flex-col gap-2 my-20"
      variants={animations.fadeIn()}
      initial="hidden"
      animate="show"
    >
      <div>
        <motion.h1
          className="text-4xl mb-4 font-subway"
          variants={animations.slideUp(true)}
          animate={{ ...animations.slideUp().show }}
        >
          Work
        </motion.h1>
        <motion.p
          className="text-accent"
          variants={animations.slideUp(true)}
          animate={{ ...animations.slideUp().show, transition: { delay: 0.2 } }}
        >
          An overview of my career
        </motion.p>
      </div>
      <SplitLayout>
        <motion.div
          className="flex justify-center"
          variants={animations.fadeIn(0.7)}
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
          variants={animations.slideUp()}
          animate={{ ...animations.slideUp().show, transition: { delay: 0.3 } }}
        >
          HI, MY NAME IS BRIAN <br />
          AND I AM THE BEST
        </motion.h2>
      </SplitLayout>
    </motion.section>
  );
};

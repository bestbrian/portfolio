"use client";
import { motion } from "motion/react";
import { SplitLayout } from "../split-layout";
import Image from "next/image";
import { animations, EASE } from "@/lib/types";
import * as amplitude from "@amplitude/analytics-browser";
import { Identify } from "@amplitude/analytics-browser";
import { UAParser } from "ua-parser-js";

export const HomeHero = () => {
  const user = new Identify();
  const userProperties = amplitude.identify(user);

  const { browser, cpu, device, os } = UAParser();
  console.log(browser, cpu, device, os);
  return (
    <motion.section
      className="flex flex-col gap-md my-section-padding"
      variants={animations.fadeIn()}
      initial="hidden"
      animate="show"
    >
      <div>
        <motion.h1
          className="text-h1 mb-heading-body font-subway leading-heading"
          variants={animations.slideUp(true)}
          animate={{ ...animations.slideUp().show }}
        >
          Work
        </motion.h1>
        <motion.p
          className="text-primary leading-paragraph"
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
          className="text-center font-subway mt-xl mb-md text-h2 dark:text-white leading-8"
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

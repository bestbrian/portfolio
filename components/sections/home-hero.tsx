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
      <SplitLayout>
        <motion.div
          className="flex justify-center"
          variants={animations.fadeIn(0.7)}
        >
          <Image
            src="/images/brian_image.jpeg"
            alt="Brian Best"
            height={280}
            width={280}
            className="object-center object-cover rounded-md"
            priority
          />
        </motion.div>

        <motion.h2
          className="text-center font-subway my-6 text-heading-lg dark:text-white leading-8"
          variants={animations.slideUp()}
          animate={{ ...animations.slideUp().show, transition: { delay: 0.3 } }}
        >
          Hi, my name is Brian
        </motion.h2>
      </SplitLayout>
      <SplitLayout section="SUMMARY">
        <motion.div
          className="p-4"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            ease: EASE.slideIn,
            duration: 0.6,
          }}
        >
          <p>
            Data-driven product leader and Y Combinator alum who builds tools
            and platforms that solve real problems, simplify workflows, and
            drive measurable impact.
            <br />
            <br />
            From co-founding BrandLoyal, where I pioneered retail feedback
            automation, to leading product and systems development at Better,
            Vroom, and Musth, I specialize in creating scalable, user-centric
            solutions that deliver results.
            <br />
            <br />
            I&apos;m passionate about turning insights into action — using data,
            design, and strategy to craft products that delight users and drive
            business growth.
            <br />
            <br />
            Keep scrolling to learn more.
          </p>
        </motion.div>
      </SplitLayout>
    </motion.section>
  );
};

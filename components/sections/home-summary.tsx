"use client";
import { motion } from "motion/react";
import { SplitLayout } from "../split-layout";
import Image from "next/image";
import { EASE } from "@/lib/types";

export const HomeSummary = () => {
  return (
    <section className="flex flex-col gap-12">
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
            drive measurable impact. From co-founding BrandLoyal, where I
            pioneered retail feedback automation, to leading product and systems
            development at Better, Vroom, and Musth, I specialize in creating
            scalable, user-centric solutions that deliver results.
            <br />
            <br />
            I’m passionate about turning insights into action—using data,
            design, and strategy to craft products that delight users and drive
            business growth.
          </p>
        </motion.div>
      </SplitLayout>
    </section>
  );
};

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
            Some of my highlights include:
            <br />
          </p>
          <ul className="list-disc pt-2 pl-4 space-y-2">
            <li>
              <b>BrandLoyal</b>: Transformed the way retail businesses collect
              and automate customer feedback by developing a tablet-based system
              that integrated tracking pixels and automated follow-ups. Scaled
              the platform to serve 500+ locations across five countries,
              enabling businesses to improve customer satisfaction, increase
              retention, and modernize in-store experiences.
            </li>
            <li>
              <b>Better</b>: Designed and implemented modular email systems
              during a decade-defining mortgage boom, boosting refinance signups
              by 200%+ and pre-approval rates by 300%+. Built drip automations
              for strategic partners like Amex, NerdWallet, and Credit Karma,
              increasing stickiness and ROI.
            </li>
            <li>
              <b>Vroom</b>: Built a reusable email snippet library and audience
              segmentation systems, allowing marketing teams to deliver targeted
              campaigns with no-code flexibility and increased conversion rates.
            </li>
            <li>
              <b>Musth</b>: Developed internal tools that eliminated human error
              and increased team efficiency. Led data collection initiatives to
              round out user profiles and automated campaigns to deliver timely,
              personalized content.
            </li>
          </ul>
          <p>
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

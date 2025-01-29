"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

import musthLogo from "/public/images/musth_logo.svg";
import vroomLogo from "/public/images/vroom_logo.svg";
import betterLogo from "/public/images/better_logo.svg";
import brandloyalLogo from "/public/images/brandloyal_logo.svg";
import musthLogoLg from "/public/images/musth_logo_lg.svg";
import vroomLogoLg from "/public/images/vroom_logo_lg.svg";
import betterLogoLg from "/public/images/better_logo_lg.svg";
import brandloyalLogoLg from "/public/images/brandloyal_logo_lg.svg";
import { UpgradeBanner } from "./hover-stars";

const cards = [
  {
    description: "Musth",
    title: "Senior Product Manager",
    src: musthLogo,
    srcLg: musthLogoLg,
    ctaText: "2022 — 2024",
    content: () => (
      <div>
        <p>
          Developed innovative tools and led transformative projects to improve
          user engagement and operational efficiency. Introduced machine
          learning to optimize audience targeting, resulting in a 40% increase
          in daily active users and 40% more relevant content delivery.
          Automated internal processes, reducing manual effort by 95% and
          eliminating recurring errors.
          <br />
          <br />
        </p>
        <h3>Key Achievements</h3>
        <ul className="list-disc pt-2 pl-4 space-y-2">
          <li>
            Launched ML-driven A/B testing and audience ranking, significantly
            boosting user engagement.
          </li>
          <li>
            Established robust tracking systems, enabling detailed user journeys
            and behavior-driven insights.
          </li>
          <li>
            Ensured timely roadmap delivery by aligning stakeholders andtracking
            OKRs.
          </li>
        </ul>
      </div>
    ),
  },
  {
    description: "Better",
    title: "Software Engineer",
    src: betterLogo,
    srcLg: betterLogoLg,
    ctaText: "2020 — 2022",
    content: () => (
      <div>
        <p>
          Designed and implemented modular email systems during a critical
          mortgage boom. Spearheaded email optimizations featured on
          <i>Really Good Emails</i> and collaborated with major partners like
          <i>Amex</i> and <i>NerdWallet</i> to build high-performing
          campaigns.Improved flexibility, reduced costs, and boosted operational
          efficiency.
          <br />
        </p>
        <h3>Key Achievements</h3>
        <ul className="list-disc pt-2 pl-4 space-y-2">
          <li>
            Created a reusable email library, cutting campaign production time
            by 47%.
          </li>
          <li>
            Enhanced email performance, achieving a 22% increase in
            click-through rates and an 18% ROI improvement.
          </li>
          <li>
            Streamlined workflows, consistently exceeding performance benchmarks
            by 12&dash;16%.
          </li>
        </ul>
      </div>
    ),
  },
  {
    description: "BrandLoyal",
    title: "Co-Founder & Chief Operating Officer",
    src: brandloyalLogo,
    srcLg: brandloyalLogoLg,
    ctaText: "2014 — 2022",
    content: () => (
      <div>
        <p>
          Built a SaaS platform that modernized in-store customer experiences
          and feedback collection. Scaled the platform to serve over 500
          businesses across five countries while driving $1.2M ARR. Developed
          innovative marketing automation features and secured acceptance into
          <i>Y Combinator</i>&apos;s S18 Batch.
          <br />
          <br />
        </p>
        <h3>Key Achievements</h3>
        <ul className="list-disc pt-2 pl-4 space-y-2">
          <li>
            <b>Product Innovation</b>: Designed the core product features and
            systems, focusing on creating sustainable competitive advantages and
            establishing a significant competitive moat.
          </li>
          <li>
            <b>UI/UX Design</b>: Developed a comprehensive design system for
            core products, emphasizing intuitive user interfaces and seamless
            user experiences to boost customer satisfaction.
          </li>
          <li>
            <b>Data-Driven Dashboard</b>: Engineered a sophisticated product
            dashboard that aggregates application data and business metrics,
            facilitating data-driven decisions.
          </li>
          <li>
            <b>Marketing Strategy</b>: Pioneered various experimental marketing
            strategies that significantly increased customer acquisition and
            propelled company growth.
          </li>
          <li>
            <b>API Development</b>: Architected and refined the API and
            dashboard integration, facilitating seamless functionality across
            numerous business locations.
          </li>
          <li>
            <b>Customer Success</b>: Implemented effective onboarding and
            customer success strategies, utilizing drip campaigns to enhance
            retention and attract new business.
          </li>
          <li>
            <b>Digital Transformation</b>: Created a &quot;Smart Display&quot;
            Web App and developed automation tools, converting physical
            interactions into digital touchpoints for advanced pixel retargeting
            and analytics.
          </li>
          <li>
            <b>Project Leadership</b>: Managed diverse teams, including
            contractors and consultants, adhering to agile methodologies to meet
            strategic goals.
          </li>
        </ul>
      </div>
    ),
  },
  {
    description: "Vroom",
    title: "Software Engineer",
    src: vroomLogo,
    srcLg: vroomLogoLg,
    ctaText: "2018 — 2020",
    content: () => (
      <div>
        <p>
          Built reusable email systems and audience segmentation tools, enabling
          marketing teams to create personalized campaigns effortlessly.
          Supported IPO readiness through scalable internal tools and
          standardized communications.
          <br />
          <br />
        </p>
        <h3>Key Achievements</h3>
        <ul className="list-disc pt-2 pl-4 space-y-2">
          <li>
            Increased funnel conversions by 20% through enhanced email clarity
            and design.
          </li>
          <li>Developed dynamic templates that cut production time by 42%.</li>
          <li>
            Created a standardized email signature generator, improving brand
            consistency and reducing manual updates by 79%.
          </li>
        </ul>
      </div>
    ),
  },
];

// -------------------------------
// 1) Close Icon
// -------------------------------
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // Use currentColor so it adapts to text color
      className="h-4 w-4 text-foreground z-50"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

// -------------------------------
// 2) Main ExperienceCards Component
// -------------------------------
export function ExperienceCards() {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Collapsed Cards List */}
      <ul className="mx-auto w-full max-w-2xl gap-4">
        {cards.map((card, index) => (
          <UpgradeBanner
            key={`banner-${index}`}
            onClick={() => setActive(card)}
          >
            <motion.li
              key={`card-${index}-${id}`}
              layoutId={`card-${index}-${id}`}
              // Replace neutral hovers with your tokens:
              className="
                flex items-start justify-between p-4 rounded-xl cursor-pointer w-full z-1 text-card-foreground hover:bg-card
              "
            >
              {/* Left side: image + text */}
              <div className="flex items-start gap-4">
                <motion.div
                  layoutId={`image-${index}-${id}`}
                  className="flex-shrink-0"
                >
                  <Image
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-16 w-16 md:h-14 md:w-14 rounded-lg object-cover object-center bg-center"
                  />
                </motion.div>

                {/* Title + description */}
                <div className="flex flex-col">
                  <motion.h3
                    layoutId={`title-${index}-${id}`}
                    className="font-medium text-foreground"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${index}-${id}`}
                    className="text-sm"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>

              {/* Right side: Dates (CTA text) */}
              <motion.p
                layoutId={`cta-${index}-${id}`}
                // We'll color the CTA with brand color
                className="pt-1.5 text-sm flex-shrink-0 text-primary"
              >
                {card.ctaText}
              </motion.p>
            </motion.li>
          </UpgradeBanner>
        ))}
      </ul>

      {/* AnimatePresence for overlay + expanded card */}
      <AnimatePresence>
        {active && (
          <>
            {/* Overlay */}
            <motion.div
              // Instead of black/20, use a token-based approach:
              className="fixed inset-0 bg-foreground/20 h-full w-full z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Expanded card wrapper */}
            <motion.div
              layoutId={`card-${cards.findIndex((c) => c === active)}-${id}`}
              className="fixed inset-0 grid place-items-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Actual expanded card */}
              <motion.div
                ref={ref}
                // Use card tokens for background & text
                className="
                  w-full max-w-xl 
                  max-h-[80vh] 
                  overflow-auto 
                  relative 
                  bg-card 
                  text-card-foreground 
                  rounded-xl
                "
              >
                {/* Close button */}
                <motion.button
                  onClick={() => setActive(null)}
                  className="
                    flex absolute top-2 right-2 
                    items-center justify-center 
                    bg-card h-6 w-6 
                    rounded-full 
                    z-50
                  "
                >
                  <CloseIcon />
                </motion.button>

                {/* Expanded image */}
                <motion.div
                  layoutId={`image-${cards.findIndex(
                    (c) => c === active
                  )}-${id}`}
                >
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={active.srcLg}
                    alt={active.title}
                    className="w-full h-64 md:h-80 object-cover object-center bg-center"
                  />
                </motion.div>

                {/* Main content area */}
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      {/* Title */}
                      <motion.h3
                        layoutId={`title-${cards.findIndex(
                          (c) => c === active
                        )}-${id}`}
                        className="font-bold text-foreground text-xl md:text-2xl"
                      >
                        {active.title}
                      </motion.h3>
                      {/* Description */}
                      <motion.p
                        layoutId={`description-${cards.findIndex(
                          (c) => c === active
                        )}-${id}`}
                        className="mt-1 mb-4"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    {/* CTA */}
                    <motion.p
                      layoutId={`cta-${cards.findIndex(
                        (c) => c === active
                      )}-${id}`}
                      className="font-subway text-primary"
                    >
                      {active.ctaText}
                    </motion.p>
                  </div>

                  {/* The card's expanded content */}
                  <div className="text-sm lg:text-base mt-4">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

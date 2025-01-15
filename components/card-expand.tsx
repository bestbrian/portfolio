"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

import musthLogo from "/public/images/musth_logo.jpg";
import vroomLogo from "/public/images/vroom_logo.jpeg";
import betterLogo from "/public/images/better_logo.jpg";
import brandloyalLogo from "/public/images/brandloyal_logo.jpeg";
import { UpgradeBanner } from "./hover-stars";

// -------------------------------
// 1) Expanded Card Content
// -------------------------------
const cards = [
  {
    description: "Musth",
    title: "Senior Product Manager",
    src: musthLogo,
    ctaText: "2022 — 2024",
    content: () => (
      <div>
        <p>
          Developed internal tools that eliminated human error...
          <br />
          <br />
        </p>
        <h3>Key Achievements</h3>
        <ul className="list-disc pt-2 pl-4 space-y-2">
          <li>Developed and launched multiple key features...</li>
          <li>
            Played a pivotal role in adopting and implementing new
            technologies...
          </li>
          <li>Fostered an Agile culture within the team...</li>
        </ul>
      </div>
    ),
  },
  {
    description: "Better",
    title: "Software Engineer",
    src: betterLogo,
    ctaText: "2020 — 2022",
    content: () => (
      <div>
        <p>
          Designed and implemented modular email systems...
          <br />
          <br />
        </p>
        <h3>Key Achievements</h3>
        <ul className="list-disc pt-2 pl-4 space-y-2">
          <li>
            Enhanced email engagement through advanced tracking and data
            analytics...
          </li>
          <li>Streamlined production processes to ensure high-quality...</li>
        </ul>
      </div>
    ),
  },
  {
    description: "BrandLoyal",
    title: "Co-Founder & Chief Operating Officer",
    src: brandloyalLogo,
    ctaText: "2014 — 2022",
    content: () => (
      <div>
        <p>
          Transformed the way retail businesses collect and automate customer
          feedback...
          <br />
          <br />
        </p>
        <h3>Key Achievements</h3>
        <ul className="list-disc pt-2 pl-4 space-y-2">
          <li>Product Innovation: Designed the core product features...</li>
          <li>UI/UX Design: Developed a comprehensive design system...</li>
          <li>
            Data-Driven Dashboard: Engineered a sophisticated product
            dashboard...
          </li>
          <li>
            Marketing Strategy: Pioneered various experimental marketing
            strategies...
          </li>
          <li>
            API Development: Architected and refined the API and dashboard
            integration...
          </li>
          <li>
            Customer Success: Implemented effective onboarding and drip
            campaigns...
          </li>
          <li>Digital Transformation: Created a “Smart Display” Web App...</li>
          <li>
            Project Leadership: Managed diverse teams, including contractors...
          </li>
        </ul>
      </div>
    ),
  },
  {
    description: "Vroom",
    title: "Software Engineer",
    src: vroomLogo,
    ctaText: "2018 — 2020",
    content: () => (
      <div>
        <p>
          Built a reusable email snippet library and audience segmentation
          systems...
          <br />
          <br />
        </p>
        <h3>Key Achievements</h3>
        <ul className="list-disc pt-2 pl-4 space-y-2">
          <li>Built a Component-Based Email System...</li>
          <li>Developed an Internal Email Signature Generator...</li>
          <li>Optimized Customer Communication...</li>
          <li>Enhanced Email Development Processes...</li>
          <li>Supported IPO Readiness...</li>
        </ul>
      </div>
    ),
  },
];

// -------------------------------
// 2) Close Icon for your button
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
      className="h-4 w-4 text-black z-50"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

// -------------------------------
// 3) The main component
// -------------------------------
export function ExperienceCards() {
  /**
   * `active`: holds the currently expanded card info
   * Could be null or a card object from the `cards` array
   */
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);

  /**
   * `ref` for detecting outside clicks
   */
  const ref = useRef<HTMLDivElement>(null);

  /**
   * `id` is a unique instance ID for our layout transitions
   * so we don't clash with other possible expanders in the app
   */
  const id = useId();

  /**
   * Listen for the Escape key to close the expanded card
   */
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  /**
   * Custom hook to close card if user clicks outside
   */
  useOutsideClick(ref, () => setActive(null));

  /**
   * We keep everything in a single AnimatePresence block:
   * - The background overlay
   * - The expanded card
   * so they fade in/out together
   */
  return (
    <>
      {/* 1. List of collapsed cards */}
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <UpgradeBanner
            key={`banner-${index}`}
            className="mb-4"
            onClick={() => setActive(card)}
          >
            <motion.li
              key={`card-${index}-${id}`}
              layoutId={`card-${index}-${id}`}
              className="flex items-center justify-between p-4
                  hover:bg-neutral-50 dark:hover:bg-neutral-800
                  rounded-xl cursor-pointer w-full z-1"
            >
              {/* Left side: image + text */}
              <div className="flex items-center gap-4">
                {/* If you want the image to animate between states, give it a matching layoutId */}
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

                {/* Title + description in a vertical stack */}
                <div className="flex flex-col">
                  {/* Title animates from collapsed to expanded */}
                  <motion.h3
                    layoutId={`title-${index}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200"
                  >
                    {card.title}
                  </motion.h3>

                  {/* Description animates from collapsed to expanded */}
                  <motion.p
                    layoutId={`description-${index}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-sm"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>

              {/* Right side: CTA button */}
              <motion.button
                layoutId={`cta-${index}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold   bg-gray-100 hover:bg-green-500 hover:text-white text-black   flex-shrink-0"
              >
                {card.ctaText}
              </motion.button>
            </motion.li>
          </UpgradeBanner>
        ))}
      </ul>
      {/* 2. AnimatePresence for overlay + expanded view */}
      <AnimatePresence>
        {active && (
          <>
            {/*
              2a. Background overlay
                  Fades in behind the expanded card
            */}
            <motion.div
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/*
              2b. Expanded card container
                  We position this fixed, so it floats above everything
            */}
            <motion.div
              /**
               * Make sure the layoutId matches the item we clicked
               * so it animates from the same bounding box
               */
              layoutId={`card-${cards.findIndex((c) => c === active)}-${id}`}
              className="fixed inset-0 grid place-items-center z-50 p-4"
              /**
               * We'll animate the container in/out
               */
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/*
                2b-i. The actual card content wrapper
                We'll limit its max height for scrolling
              */}
              <motion.div
                ref={ref}
                className="w-full max-w-xl bg-white dark:bg-neutral-900 sm:rounded-3xl     overflow-auto max-h-[80vh] relative"
              >
                {/*
                  Close button in top-right corner (visible on all screens).
                */}
                <motion.button
                  onClick={() => setActive(null)}
                  className="flex absolute top-2 right-2 items-center       justify-center bg-white rounded-full h-6 w-6 z-50"
                >
                  <CloseIcon />
                </motion.button>

                {/*
                  2b-ii. Expanded image
                  Matches the layoutId from the collapsed item
                */}
                <motion.div
                  layoutId={`image-${cards.findIndex((c) => c === active)}-${id}`}
                >
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-64 md:h-80 object-cover  object-center bg-center"
                  />
                </motion.div>

                {/*
                  2b-iii. Main content area: title + description + CTA + big content
                */}
                <div className="p-4">
                  {/* Title with a matching layoutId */}
                  <motion.h3
                    layoutId={`title-${cards.findIndex((c) => c === active)}-${id}`}
                    className="font-bold text-neutral-700 dark:text-neutral-200 text-xl md:text-2xl"
                  >
                    {active.title}
                  </motion.h3>

                  {/* Description with a matching layoutId */}
                  <motion.p
                    layoutId={`description-${cards.findIndex((c) => c === active)}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 mt-1 mb-4"
                  >
                    {active.description}
                  </motion.p>

                  {/* CTA with a matching layoutId */}
                  <motion.a
                    layoutId={`cta-${cards.findIndex((c) => c === active)}-${id}`}
                    href="#"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>

                  {/*
                    Expanded content that is typically too big to show in collapsed form
                    We don't need 'layout' on this, so it doesn't cause reflows
                  */}
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm lg:text-base mt-4">
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

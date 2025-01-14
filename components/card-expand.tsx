"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import musthLogo from "/public/images/musth_logo.jpg";
import vroomLogo from "/public/images/vroom_logo.jpeg";
import betterLogo from "/public/images/better_logo.jpg";
import brandloyalLogo from "/public/images/brandloyal_logo.jpeg";

export function ExperienceCards() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence mode="wait">
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[48]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${cards.findIndex((c) => c.title === active.title)}-${active.title}-${active.description}-${id}`}
              ref={ref}
              className="w-full max-w-lg h-full md:h-fit md:max-h-[800px] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-y-scroll"
              transition={{ duration: 0.3 }}
            >
              <motion.div
                layoutId={`image-${cards.findIndex((c) => c.title === active.title)}-${active.title}-${active.description}-${id}`}
                transition={{ duration: 0.3 }}
              >
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${cards.findIndex((c) => c.title === active.title)}-${active.title}-${active.description}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${cards.findIndex((c) => c.title === active.title)}-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${cards.findIndex((c) => c.title === active.title)}-${active.title}-${active.description}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${index}-${card.title}-${card.description}-${id}`}
            key={`card-${index}-${card.title}-${card.description}-${id}`}
            onClick={() => setActive(card)}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 25,
            }}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div
                layoutId={`image-${index}-${card.title}-${card.description}-${id}`}
                transition={{ duration: 0.3 }}
              >
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${index}-${card.title}-${card.description}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${index}-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${index}-${card.title}-${card.description}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
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

const cards = [
  {
    description: "Musth",
    title: "Senior Product Manager",
    src: musthLogo,
    ctaText: "2022 — 2024",
    content: () => {
      return (
        <div>
          <p>
            Developed internal tools that eliminated human error and increased
            team efficiency. Led data collection initiatives to round out user
            profiles and automated campaigns to deliver timely, personalized
            content.
            <br />
            <br />
          </p>
          <h3>Key Achievements</h3>
          <ul className="list-disc pt-2 pl-4 space-y-2">
            <li>
              Developed and launched multiple key features, achieving
              significant improvements in the efficiency and accessibility of
              financial trading platforms, by guiding the team through
              iterative, customer-focused delivery.
            </li>
            <li>
              Played a pivotal role in adopting and implementing new
              technologies within an Agile framework, resulting in enhanced
              product performance and increased customer satisfaction.
            </li>
            <li>
              Fostered an Agile culture within the team, accelerating product
              development cycles and improving responsiveness to market changes
              through iterative feedback and continuous improvement.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "Better",
    title: "Software Engineer",
    src: betterLogo,
    ctaText: "2020 — 2022",
    content: () => {
      return (
        <div>
          <p>
            Designed and implemented modular email systems during a
            decade-defining mortgage boom, boosting refinance signups by 200%+
            and pre-approval rates by 300%+. Built drip automations for
            strategic partners like Amex, NerdWallet, and Credit Karma,
            increasing stickiness and ROI.
            <br />
            <br />
          </p>
          <h3>Key Achievements</h3>
          <ul className="list-disc pt-2 pl-4 space-y-2">
            <li>
              Enhanced email engagement through advanced tracking and data
              analytics, enabling the team to make informed decisions for
              ongoing improvements.
            </li>
            <li>
              Streamlined production processes to ensure high-quality, on-time
              campaign delivery, consistently meeting or exceeding key
              performance benchmarks.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "BrandLoyal",
    title: "Co-Founder & Chief Operating Officer",
    src: brandloyalLogo,
    ctaText: "2014 — 2022",
    content: () => {
      return (
        <div>
          <p>
            Transformed the way retail businesses collect and automate customer
            feedback by developing a tablet-based system that integrated
            tracking pixels and automated follow-ups. Scaled the platform to
            serve 500+ locations across five countries, enabling businesses to
            improve customer satisfaction, increase retention, and modernize
            in-store experiences.
            <br />
            <br />
          </p>
          <h3>Key Achievements</h3>
          <ul className="list-disc pt-2 pl-4 space-y-2">
            <li>
              Product Innovation: Designed the core product features and
              systems, focusing on creating sustainable competitive advantages
              and establishing a significant competitive moat.
            </li>
            <li>
              UI/UX Design: Developed a comprehensive design system for core
              products, emphasizing intuitive user interfaces and seamless user
              experiences to boost customer satisfaction.
            </li>
            <li>
              Data-Driven Dashboard: Engineered a sophisticated product
              dashboard that aggregates application data and business metrics,
              facilitating data-driven decisions.
            </li>
            <li>
              Marketing Strategy: Pioneered various experimental marketing
              strategies that significantly increased customer acquisition and
              propelled company growth.
            </li>
            <li>
              API Development: Architected and refined the API and dashboard
              integration, facilitating seamless functionality across numerous
              business locations.
            </li>
            <li>
              Customer Success: Implemented effective onboarding and customer
              success strategies, utilizing drip campaigns to enhance retention
              and attract new business.
            </li>
            <li>
              Digital Transformation: Created a &lsquote;Smart Display&rsquote;
              Web App and developed automation tools, converting physical
              interactions into digital touchpoints for advanced pixel
              retargeting and analytics.
            </li>
            <li>
              Project Leadership: Managed diverse teams, including contractors
              and consultants, adhering to agile methodologies to meet strategic
              goals.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "Vroom",
    title: "Software Engineer",
    src: vroomLogo,
    ctaText: "2018 — 2020",
    content: () => {
      return (
        <div>
          <p>
            Built a reusable email snippet library and audience segmentation
            systems, allowing marketing teams to deliver targeted campaigns with
            no-code flexibility and increased conversion rates.
            <br />
            <br />
          </p>
          <h3>Key Achievements</h3>
          <ul className="list-disc pt-2 pl-4 space-y-2">
            <li>
              Built a Component-Based Email System: Streamlined the creation of
              transactional and promotional emails with modular templates,
              reducing production time and increasing campaign efficiency.
            </li>
            <li>
              Developed an Internal Email Signature Generator: Standardized
              email branding across teams, improving professionalism and
              consistency in communications leading up to the IPO.
            </li>
            <li>
              Optimized Customer Communication: Improved email workflows and
              segmentation strategies, boosting engagement and conversion rates.
            </li>
            <li>
              Enhanced Email Development Processes: Ensured cross-platform
              compatibility and improved deliverability through best practices
              in coding and testing.
            </li>
            <li>
              Supported IPO Readiness: Contributed to scalable internal tools
              and customer outreach systems that aligned with Vroom&apos;s
              growth goals.
            </li>
          </ul>
        </div>
      );
    },
  },
];

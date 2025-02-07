"use client";

import { cn } from "@/lib/utils";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";
import { SplitLayout } from "./split-layout/index";

interface Props {
  paragraph: string;
  className?: string;
  children?: React.ReactNode;
}

const TextRevealByWord: FC<Props> = ({ paragraph, className, children }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 30%", "end end"],
  });
  const words = paragraph.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[1200px]", className)}>
      <div className="sticky top-0 pt-8 mx-auto flex w-full flex-col items-center bg-transparent">
        <SplitLayout>
          <p className="max-w-3xl flex flex-wrap p-5 text-xl font-subway text-black/20 dark:text-white/20 md:p-8 md:text-xl lg:p-10 lg:text-heading-lg lg:leading-10">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </SplitLayout>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};
interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="text-black dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;

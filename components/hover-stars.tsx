"use client";

import * as React from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface UpgradeBannerProps {
  children: React.ReactNode;
  onClose?: () => void;
  onClick?: () => void;
  className?: string;
}

const LargeStar = ({ className }: { className?: string }) => (
  <motion.svg className={className} viewBox="0 0 64 64" width="24" height="24">
    <motion.path
      d="M30.0756 1.79835C30.6249 -0.142008 33.3751 -0.142007 33.9244 1.79835L39.8585 22.7619C40.0476 23.4301 40.5699 23.9524 41.2381 24.1415L62.2016 30.0756C64.142 30.6249 64.142 33.3751 62.2016 33.9244L41.2381 39.8585C40.5699 40.0476 40.0476 40.5699 39.8585 41.2381L33.9244 62.2016C33.3751 64.142 30.6249 64.142 30.0756 62.2016L24.1415 41.2381C23.9524 40.5699 23.4301 40.0476 22.7619 39.8585L1.79835 33.9244C-0.142008 33.3751 -0.142007 30.6249 1.79835 30.0756L22.7619 24.1415C23.4301 23.9524 23.9524 23.4301 24.1415 22.7619L30.0756 1.79835Z"
      fill="currentColor"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0,
      }}
    />
  </motion.svg>
);
const MediumStar = ({ className }: { className?: string }) => (
  <motion.svg className={className} viewBox="0 0 48 48" width="16" height="16">
    <motion.path
      d="M22.0756 1.79835C22.6249 -0.142009 25.3751 -0.142008 25.9244 1.79835L30.0935 16.5268C30.2827 17.195 30.805 17.7173 31.4732 17.9065L46.2016 22.0756C48.142 22.6249 48.142 25.3751 46.2016 25.9244L31.4732 30.0935C30.805 30.2827 30.2827 30.805 30.0935 31.4732L25.9244 46.2016C25.3751 48.142 22.6249 48.142 22.0756 46.2016L17.9065 31.4732C17.7173 30.805 17.195 30.2827 16.5268 30.0935L1.79835 25.9244C-0.142009 25.3751 -0.142008 22.6249 1.79835 22.0756L16.5268 17.9065C17.195 17.7173 17.7173 17.195 17.9065 16.5268L22.0756 1.79835Z"
      fill="currentColor"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
    />
  </motion.svg>
);

const SmallStar = ({ className }: { className?: string }) => (
  <motion.svg className={className} viewBox="0 0 37 37" width="16" height="16">
    <motion.path
      d="M16.5756 1.79835C17.1249 -0.142007 19.8751 -0.142007 20.4244 1.79835L23.3801 12.2402C23.5693 12.9084 24.0916 13.4307 24.7598 13.6199L35.2016 16.5756C37.142 17.1249 37.142 19.8751 35.2016 20.4244L24.7598 23.3801C24.0916 23.5693 23.5693 24.0916 23.3801 24.7598L20.4244 35.2016C19.8751 37.142 17.1249 37.142 16.5756 35.2016L13.6199 24.7598C13.4307 24.0916 12.9084 23.5693 12.2402 23.3801L1.79835 20.4244C-0.142007 19.8751 -0.142007 17.1249 1.79835 16.5756L12.2402 13.6199C12.9084 13.4307 13.4307 12.9084 13.6199 12.2402L16.5756 1.79835Z"
      fill="currentColor"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    />
  </motion.svg>
);
export function UpgradeBanner({
  children,
  onClose,
  onClick,
  className,
}: UpgradeBannerProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const iconVariants = {
    hidden: {
      x: 0,
      y: 0,
      opacity: 0,
      rotate: 0,
      transition: {
        duration: 0.1,
        opacity: { duration: 0.03 },
      },
    },
    visible: (custom: { x: number; y: number }) => ({
      x: custom.x,
      y: custom.y,
      opacity: 1,
      rotate: 360,
      transition: {
        x: { duration: 0.3, ease: "easeOut" },
        y: { duration: 0.3, ease: "easeOut" },
        opacity: { duration: 0.3 },
        rotate: {
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      },
    }),
  };

  return (
    <div className={cn("w-full", className)}>
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <motion.div
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          variants={iconVariants}
          custom={{ x: -10, y: -10 }}
          className="pointer-events-none absolute left-[4px] top-[2px]"
        >
          <SmallStar className="text-yellow-400" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          variants={iconVariants}
          custom={{ x: -10, y: -10 }}
          className="pointer-events-none absolute right-[4px] top-[2px]"
        >
          <LargeStar className="text-green-400" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          variants={iconVariants}
          custom={{ x: 10, y: 10 }}
          className="pointer-events-none absolute bottom-[2px] right-[4px] -z-10"
        >
          <MediumStar className="text-red-400" />
        </motion.div>
        {children}
      </motion.div>
    </div>
  );
}

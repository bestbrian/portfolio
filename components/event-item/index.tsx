"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface EventProps {
  title: string;
  body: string;
  image: StaticImageData | ReactNode;
  timeline: string;
  disableHover?: boolean;
}

function isStaticImageData(
  img: StaticImageData | ReactNode
): img is StaticImageData {
  return (img as StaticImageData).src !== undefined;
}

export const EventItem = ({
  title,
  body,
  image,
  timeline,
  disableHover,
}: EventProps) => {
  const imageContent = isStaticImageData(image) ? (
    <Image
      src={image}
      alt={title}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUf8BzDAAEJAHbKoDoHQAAAABJRU5ErkJggg=="
      width={48}
      height={48}
      style={{
        maxWidth: "100%",
        height: "auto",
        borderRadius: "0.5rem",
      }}
    />
  ) : (
    <div>{image}</div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`inline-flex justify-between items-start w-full p-4 ${!disableHover && "hover:bg-accent"} rounded-md`}
    >
      <div className="flex gap-4 items-center">
        {imageContent}
        <div className="flex flex-col">
          <h3 className="">{title}</h3>
          <p className="font-normal text-left">{body}</p>
        </div>
      </div>

      <div className="flex justify-start pt-1 text-sm flex-shrink-0 text-primary whitespace-nowrap">
        {timeline}
      </div>
    </motion.div>
  );
};

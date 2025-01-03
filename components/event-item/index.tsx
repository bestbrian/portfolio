"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface EventProps {
  title: string;
  body: string;
  image: StaticImageData;
  timeline: string;
  disableHover?: boolean;
}

export const EventItem = ({
  title,
  body,
  image,
  timeline,
  disableHover,
}: EventProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`inline-flex justify-between items-start w-full p-4 ${!disableHover && "hover:bg-secondary"} rounded-md`}
    >
      <div className="flex gap-4 items-center">
        <Image
          src={image}
          alt="alt"
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
        <div className="flex flex-col">
          <h4 className="font-semibold text-left">{title}</h4>
          <p className="font-normal text-left">{body}</p>
        </div>
      </div>

      <div className="flex justify-start text-primary whitespace-nowrap">
        {timeline}
      </div>
    </motion.div>
  );
};

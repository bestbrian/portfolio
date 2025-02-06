"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useId } from "react";
import { motion } from "framer-motion";
import { BrianbestResponse } from "@/notion-sdk/dbs/brianbest";

export function ArticleCards({ posts }: { posts: BrianbestResponse[] }) {
  const router = useRouter();
  const id = useId();

  const handleCardClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };
  console.log(
    "POSTS ARE ",
    posts[0].cover?.type === "external"
      ? posts[0].cover.external?.url
      : undefined
  );

  return (
    <ul className="mx-auto w-full gap-4">
      {posts.map((post, index) => (
        <motion.li
          key={`card-${index}-${id}`}
          layoutId={`card-${post.id}`}
          onClick={() =>
            handleCardClick(post.properties.Slug.rich_text[0]?.plain_text)
          }
          className="flex items-start justify-between p-4 rounded-xl cursor-pointer w-full z-1 text-card-foreground hover:bg-card"
        >
          <div className="flex items-start gap-4">
            <motion.div
              layoutId={`image-${post.id}`}
              className="flex-shrink-0 relative size-40"
            >
              {post.cover && (
                <Image
                  src={
                    post.cover?.type === "external"
                      ? post.cover.external?.url
                      : "/images/placeholder.svg"
                  }
                  width={0}
                  height={0}
                  fill
                  alt="Post cover"
                  sizes="size-40"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  priority={true}
                  className="rounded-lg object-cover"
                />
              )}
            </motion.div>

            <div className="flex flex-col">
              <motion.h1
                layoutId={`title-${post.id}`}
                className="text-2xl font-medium text-foreground"
              >
                {post.properties.Title.title[0].plain_text}
              </motion.h1>
              <motion.p
                layoutId={`date-${post.id}`}
                className="pt-1.5 text-sm flex-shrink-0 text-primary"
              >
                {new Date(
                  post.properties.Created.created_time
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </motion.p>
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}

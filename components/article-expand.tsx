"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useId } from "react";
import { motion } from "framer-motion";

// Add styles in a separate className prop to control sizing per usage
interface Post {
  id: string;
  cover: {
    external: {
      url: string;
    };
  };
  properties: {
    Slug: {
      rich_text: {
        plain_text: string;
      }[];
    };
    Title: {
      title: {
        plain_text: string;
      }[];
    };
    Created: {
      created_time: string;
    };
  };
}

interface Posts {
  results: Post[];
}

export function ArticleCards({ posts }: { posts: Posts }) {
  const router = useRouter();
  const id = useId();

  const handleCardClick = (slug: string) => {
    // Navigate to the post page after animation completes
    router.push(`/projects/${slug}`);
  };

  return (
    <ul className="mx-auto w-full gap-4">
      {posts.results.map((post: any, index: number) => (
        <motion.li
          key={`card-${index}-${id}`}
          layoutId={`card-${post.id}`}
          onClick={() =>
            handleCardClick(post.properties.Slug.rich_text[0]?.plain_text)
          }
          className="flex items-start justify-between p-4 rounded-xl cursor-pointer w-full z-1 text-card-foreground hover:bg-card"
        >
          <div className="flex items-start gap-4">
            <motion.div layoutId={`image-${post.id}`} className="flex-shrink-0">
              {post.cover && (
                <Image
                  src={post.cover.external.url}
                  alt={post.properties.Title.title[0]?.plain_text || ""}
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              )}
            </motion.div>

            <div className="flex flex-col">
              <motion.h1
                layoutId={`title-${post.id}`}
                className="text-2xl font-medium text-foreground"
              >
                {post.properties.Title.title[0]?.plain_text || "Untitled"}
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

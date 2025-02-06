import Image from "next/image";

import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { ContactForm } from "@/components/contact-form";
import { NotionRenderer } from "@notion-render/client";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BadgeGrid } from "@/components/badge-grid";
import { ChevronDown } from "lucide-react";

function groupConsecutiveImages(blocks: BlockObjectResponse[]) {
  const groups: BlockObjectResponse[][] = [];
  let currentGroup: BlockObjectResponse[] = [];

  blocks.forEach((block) => {
    if (block.type === "image") {
      currentGroup.push(block);
    } else {
      if (currentGroup.length > 0) {
        groups.push(currentGroup);
        currentGroup = [];
      }
      groups.push([block]);
    }
  });

  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }

  return groups;
}

export function Squiggle() {
  return (
    <div
      className="
        mx-auto
        w-[4px]
        h-[400px]
        bg-center 
      "
      style={{
        backgroundImage: 'url("/images/squiggle.svg")',
        backgroundSize: "100% auto",
        flex: 100,
      }}
    />
  );
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchBySlug(params.slug);
  if (!post) return <div>Article Not Found</div>;

  const blocks = await fetchPageBlocks(post.id);
  const groupedBlocks = groupConsecutiveImages(blocks);

  const renderedContent = await Promise.all(
    groupedBlocks.map(async (group) => {
      if (group.length > 1 && group[0].type === "image") {
        return {
          type: "carousel",
          content: group,
        };
      } else {
        const renderer = new NotionRenderer();
        renderer.use(hljsPlugin({}));
        renderer.use(bookmarkPlugin(undefined));
        const html = await renderer.render(...group);
        return {
          type: "html",
          content: html,
        };
      }
    })
  );

  const title =
    post.properties.Title && "title" in post.properties.Title
      ? post.properties.Title.title[0]?.plain_text
      : "Untitled";

  const heroImage =
    post.cover?.type === "external"
      ? post.cover.external?.url
      : "/images/placeholder.svg";

  const tags =
    post.properties.Tags && "multi_select" in post.properties.Tags
      ? post.properties.Tags.multi_select
          .map((item: any) => item.name)
          .filter((name: string) => name.toLowerCase() !== "featured")
      : [];

  return (
    <div className="notion-content">
      <section
        className="h-[100svh] md:h-[40vh] flex flex-col items-center justify-between text-white pt-4 relative"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <p className="relative z-10">TOPIC</p>

        <div className="relative z-10 flex flex-col items-center flex-1">
          <div className="h-full flex flex-col justify-center">
            <Squiggle />
            <h1 className="mt-8 mb-8 mx-auto font-bold leading-tight w-7/12 text-center">
              {title}
            </h1>
            <Squiggle />
          </div>
        </div>

        <ChevronDown strokeWidth={1} size={32} className="relative z-10 mb-4" />
      </section>

      <article className="container max-w-2xl mx-auto px-4 py-16 ">
        {/* <BadgeGrid badges={tags.map((tag: any) => ({ name: tag }))} /> */}
        {renderedContent.map((content, index) =>
          content.type === "carousel" ? (
            <Carousel key={index}>
              <CarouselContent>
                {Array.isArray(content.content)
                  ? content.content.map((block: any) => (
                      <CarouselItem
                        key={block.id}
                        className="flex items-center justify-center"
                      >
                        <Image
                          src={
                            block.image.file?.url || block.image.external?.url
                          }
                          alt={block.image.caption?.[0]?.plain_text || `Image`}
                          width={800}
                          height={600}
                          className="w-auto h-auto max-h-[600px] object-contain"
                        />
                      </CarouselItem>
                    ))
                  : null}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          )
        )}
      </article>
      <section id="contact" className="max-w-2xl mx-auto px-4 py-16 ">
        <h2>Want more? Let&apos;s connect</h2>
        <ContactForm />
      </section>
    </div>
  );
}

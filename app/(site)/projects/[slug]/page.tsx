import Image from "next/image";

import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { ContactForm } from "@/components/contact-form";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
        const renderer = new NotionRenderer({ client: notion });
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

  return (
    <div className="notion-content">
      <h1 className="mt-14 mb-8 font-bold leading-tight">
        {post.properties.Title.title[0]?.plain_text || "Untitled"}
      </h1>
      <article>
        {renderedContent.map((content, index) =>
          content.type === "carousel" ? (
            <Carousel key={index}>
              <CarouselContent>
                {content.content.map((block: any) => (
                  <CarouselItem
                    key={block.id}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={block.image.file?.url || block.image.external?.url}
                      alt={block.image.caption?.[0]?.plain_text || `Image`}
                      width={800}
                      height={600}
                      className="w-auto h-auto max-h-[600px] object-contain"
                      priority
                    />
                    {/* <img
                      src={block.image.file?.url || block.image.external?.url}
                      alt={block.image.caption?.[0]?.plain_text || `Image`}
                      className="w-auto h-auto max-h-[600px] object-contain"
                    /> */}
                  </CarouselItem>
                ))}
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
      <h2>Want more? Let&apos;s connect</h2>
      <ContactForm />
    </div>
  );
}

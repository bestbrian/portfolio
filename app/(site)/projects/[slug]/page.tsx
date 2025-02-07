import Image from "next/image";
import readingTime from "reading-time";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { fetchBySlug, fetchPageBlocks } from "@/lib/notion";
import { ContactForm } from "@/components/contact-form";
import { NotionRenderer } from "@notion-render/client";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Squiggle } from "@/components/squiggle";

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

  const publishDate = new Date(
    post.properties.Created.created_time
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const tags =
    post.properties.Tags && "multi_select" in post.properties.Tags
      ? post.properties.Tags.multi_select
          .map((item: any) => item.name)
          .filter((name: string) => name.toLowerCase() !== "featured")
      : [];

  const articleText = renderedContent
    .filter((content) => content.type === "html")
    .map((content) =>
      typeof content.content === "string"
        ? content.content.replace(/<[^>]+>/g, "")
        : ""
    )
    .join(" ");

  const readingStats = readingTime(articleText);

  return (
    <div className="notion-content">
      {/* HEADER */}
      <section
        className="h-full flex flex-col justify-between text-white py-4 relative rounded-2xl mx-4 md:m-16"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="relative font-subway mx-auto">ARTICLE</p>

        <div className="min-h-[calc(100svh-124px)] md:min-h-[40svh] flex flex-col justify-center items-center">
          <Squiggle />
          <h1 className="my-2 mx-auto font-bold leading-tight w-7/12 text-center">
            {title}
          </h1>
          <Squiggle />
        </div>

        <ChevronDown strokeWidth={1} size={32} className="relative mx-auto" />
      </section>

      {/* ARTICLE */}
      <section className="max-w-screen-2xl mx-4 md:mx-16 pb-8">
        {/* Desktop layout: three columns */}
        <div className="md:grid grid-cols-[1fr,2fr,1fr] items-start">
          {/* LEFT COLUMN – Metadata (sticky) */}
          <div className="pt-4 md:pt-0 md:sticky md:top-16">
            <p className="md:pb-1">
              <span className="text-primary">Published:</span> {publishDate}
            </p>
            <p className="md:pb-2">{readingStats.text}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag: any, index: any) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          {/* CENTER COLUMN – Article content */}
          <article className="md:max-w-2xl mx-auto pb-8">
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
                                block.image.file?.url ||
                                block.image.external?.url
                              }
                              alt={
                                block.image.caption?.[0]?.plain_text || "Image"
                              }
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
          {/* RIGHT COLUMN */}
          <div></div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-4 md:max-w-2xl md:mx-auto">
        <h2>Want more? Let&apos;s connect</h2>
        <ContactForm />
      </section>
    </div>
  );
}

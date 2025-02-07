import readingTime from "reading-time";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { fetchBySlug, fetchPageBlocks } from "@/lib/notion";
import { ContactForm } from "@/components/contact-form";
import { NotionRenderer } from "@notion-render/client";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { ArticleHeader } from "@/components/blog/article-header";
import { ArticleMetaData } from "@/components/blog/article-metadata";
import { ArticleContent } from "@/components/blog/article-content";

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
      <ArticleHeader heroImage={heroImage} title={title} />

      <section className="max-w-screen-2xl mx-4 sm:mx-0 pb-8 lg:mx-auto">
        <div className="md:grid grid-cols-[1fr,2fr,1fr] items-start">
          <ArticleMetaData
            publishDate={publishDate}
            readingStats={readingStats}
            tags={tags}
          />
          <ArticleContent renderedContent={renderedContent} />
          {/* RIGHT COLUMN - Empty for balance */}
          <div></div>
        </div>
      </section>

      <section className="mx-4 md:max-w-2xl md:mx-auto">
        <h2>Want more? Let&apos;s connect</h2>
        <ContactForm />
      </section>
    </div>
  );
}

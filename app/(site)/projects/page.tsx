import { fetchPages } from "@/lib/notion";
import Link from "next/link";
import Image from "next/image";
import { SplitLayout } from "@/components/split-layout";

export default async function Project() {
  try {
    const posts = await fetchPages();
    return (
      <div>
        <h2 className="text-center">Articles</h2>
        <SplitLayout section="POSTS">
          {posts.results.map((post: any) => (
            <article key={post.id} className="p-3">
              <Link
                href={`/projects/${post.properties.Slug.rich_text[0].plain_text}`}
                className="no-underline"
              >
                <h1 className="text-2xl font-bold">
                  {post.properties.Title.title[0].plain_text}
                </h1>

                {post.properties.Image && (
                  <Image
                    src={post.properties.Image.url} // todo: add image
                    alt={post.properties.Title.title[0].plain_text}
                    width={300}
                    height={300}
                    className="my-4"
                  />
                )}

                {post.properties.Description && (
                  <p className="text-gray-600">
                    {post.properties.Description.rich_text[0].plain_text}
                  </p>
                )}
              </Link>
              <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-neutral-500 via-white-500 to-neutral-500 opacity-25 dark:via-neutral-400" />
            </article>
          ))}
        </SplitLayout>
      </div>
    );
  } catch (error) {
    console.log("Detailed error:", error);
    throw error;
  }
}

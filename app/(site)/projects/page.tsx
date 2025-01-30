import { fetchPages } from "@/lib/notion";
import Link from "next/link";
import Image from "next/image";
import { SplitLayout } from "@/components/split-layout";

export default async function Project() {
  try {
    const posts = await fetchPages();
    return (
      <main className="container mx-auto prose prose-xl px-4 py-16">
        <section className="">
          <SplitLayout section="POSTS">
            {posts.results.map((post: any) => (
              <article key={post.id} className="mb-8">
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
              </article>
            ))}
          </SplitLayout>
        </section>
      </main>
    );
  } catch (error) {
    console.log("Detailed error:", error);
    throw error;
  }
}

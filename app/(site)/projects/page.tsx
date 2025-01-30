import { fetchPages } from "@/lib/notion";
import Link from "next/link";

export default async function Project() {
  try {
    const posts = await fetchPages();
    console.log("Posts data:", posts);
    return (
      <main>
        {posts.results.map((post: any) => (
          <article key={post.id}>
            <Link
              href={`/projects/${post.properties.Slug.rich_text[0].plain_text}`}
            >
              {post.properties.Title.title[0].plain_text}
            </Link>
          </article>
        ))}
      </main>
    );
  } catch (error) {
    console.log("Detailed error:", error);
    throw error;
  }
}

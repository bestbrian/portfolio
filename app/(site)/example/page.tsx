import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

export default async function PostIndex() {
  const posts = await client.fetch(projectsQuery);
  console.log(posts);
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post._id}>
          <a href={`/projects/${post?.slug.current}`}>{post?.title}</a>
        </li>
      ))}
    </ul>
  );
}

// SANITY PAGE (Replaced by Notion)

import { SanityDocument } from "@sanity/client";
import { projectPathsQuery, projectQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import Project from "../components/project";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(projectPathsQuery);
  return posts;
}

const ProjectPage = async ({ params }: { params: any }) => {
  const post = await sanityFetch<SanityDocument>({
    query: projectQuery,
    params,
  });
  return <Project post={post} />;
};

export default ProjectPage;

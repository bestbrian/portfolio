import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectsQuery } from "@/sanity/lib/queries";
import type { Project as ProjectType } from "@/app/(site)/projects/types";
import { Card, CardContent } from "@/components/ui/card";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

type Project = {
  title: string;
  file: string;
  description: string;
  date: string;
  datetime: string;
  author: {
    name: string;
    role: string;
    href: string;
    imageURL: string;
  };
  imageUrl: string;
};

type SanityPost = {
  title: string;
  description: string | null;
  slug: { current: string; _type: "slug" };
  mainImage: ProjectType["mainImage"];
  imageURL: string | null;
  authorName: string;
  authorImage: {
    asset: { _ref: string };
  };
  _createdAt: string;
};

export const revalidate = 60;

export default async function BlogContentsPage() {
  const posts = await sanityFetch<SanityPost[]>({ query: projectsQuery });
  console.log("POSTS RETURNED: ", posts);
  return (
    <div>
      <Projects posts={posts} />
    </div>
  );
}

function Projects({ posts }: { posts: SanityPost[] }) {
  const allProjects: Project[] = posts.map((post) => ({
    title: post.title,
    file: post.slug.current,
    description: post.description ?? "",
    date: new Date(post._createdAt).toLocaleDateString(),
    datetime: post._createdAt,
    author: {
      name: post.authorName,
      role: "Founder",
      href: "#",
      imageURL: post.authorImage?.asset?._ref
        ? builder.image(post.authorImage).url()
        : "/images/blog/elie-profile.jpg",
    },
    imageUrl: post.imageURL ?? "/images/reach-inbox-zero.png",
  }));

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-8 font-cal text-3xl tracking-tight text-gray-900 sm:text-4xl">
          I DID GOOD
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((post) => (
            <ProjectCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ post }: { post: Post }) {
  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={`/projects/${post.file}`}>
        <div className="relative h-48 w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <CardContent className="pt-4">
          <h3 className="mb-2 font-cal text-lg leading-6 text-gray-900 group-hover:text-gray-600">
            {post.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-600">
            {post.description}
          </p>
          <div className="flex items-center gap-x-4">
            <Image
              src={post.author.imageURL}
              alt=""
              className="h-8 w-8 rounded-full bg-gray-50"
              width={32}
              height={32}
            />
            <div className="text-sm">
              <p className="font-semibold text-gray-900">{post.author.name}</p>
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

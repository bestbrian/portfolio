import { groq } from "next-sanity";

// Get all posts
export const projectsQuery = groq`*[_type == "project"] {
  _createdAt,
  title,
  slug,
  mainImage,
  "imageURL": mainImage.asset->url,
  authorName,
  authorImage
}`;

// Get a single post by its slug
export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{ 
    title, description, mainImage, body
  }`;

// Get all post slugs
export const projectPathsQuery = groq`*[_type == "project" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get 4 most recent posts
export const recentProjectsQuery = groq`*[_type == "project"] | order(date desc) [0...4] {
  "slug": slug.current,
  title,
  description,
  date,
  "image": mainImage.asset->url
}`;

export const projectSlugsQuery = groq`*[_type == "project"] {
  "slug": slug.current,
  date
}`;

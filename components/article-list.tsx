"use client";

import { ArticleCards } from "./article-expand";

interface ArticleListProps {
  posts: any;
}

export function ArticleList({ posts }: ArticleListProps) {
  return <ArticleCards posts={posts} />;
}

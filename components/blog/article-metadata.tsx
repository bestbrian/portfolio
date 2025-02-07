import { Badge } from "../ui/badge";

interface ArticleMetaDataProps {
  publishDate: string;
  readingStats: { text: string };
  tags: string[];
}

export function ArticleMetaData({
  publishDate,
  readingStats,
  tags,
}: ArticleMetaDataProps) {
  return (
    <div className="pt-4 md:pt-0 md:sticky md:top-24 md:pl-16">
      <p className="md:pb-1">
        <span className="text-baserimary">Published:</span> {publishDate}
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
  );
}

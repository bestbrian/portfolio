import { Badge } from "../ui/badge";

interface ReadingStats {
  text: string;
}

interface ArticleMetaDataProps {
  publishDate: string;
  readingStats: ReadingStats;
  tags: string[];
}

export const ArticleMetaData = ({
  publishDate,
  readingStats,
  tags,
}: ArticleMetaDataProps): JSX.Element => {
  return (
    <div className="pt-4 md:pt-0 md:sticky md:top-24 md:pl-16 pr-4">
      <p className="md:pb-1">
        <span className="text-baserimary">Published:</span> {publishDate}
      </p>
      <p className="md:pb-2">{readingStats.text}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag: string, index: number) => (
          <Badge key={index} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

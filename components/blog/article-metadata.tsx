import { CalendarDays, Clock } from "lucide-react";
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
      <p className="flex justify-start md:pb-1">
        <CalendarDays className="pr-2 stroke-primary" />
        {publishDate}
      </p>
      <p className="flex justify-start md:pb-2">
        <Clock className="pr-2 stroke-primary" />
        {readingStats.text}
      </p>
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

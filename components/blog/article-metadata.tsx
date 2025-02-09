import { CalendarDays, CalendarPlus, Clock } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface ReadingStats {
  text: string;
}

interface ArticleMetaDataProps {
  publishDate: string;
  editDate: string;
  readingStats: ReadingStats;
  tags: string[];
}

export const ArticleMetaData = ({
  publishDate,
  editDate,
  readingStats,
  tags,
}: ArticleMetaDataProps): JSX.Element => {
  return (
    <div className="pt-4 md:pt-0 md:sticky md:top-24 md:pl-16 pr-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <p className="flex justify-start md:pb-1">
              <CalendarDays className="pr-2 stroke-primary" />
              {publishDate}
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <span>Published Date</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <p className="flex justify-start md:pb-1">
              <CalendarPlus className="pr-2 stroke-primary" />
              {editDate}
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <span>Last Edited</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
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

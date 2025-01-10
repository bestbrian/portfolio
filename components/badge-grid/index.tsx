import { ReactNode } from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// TODO: Move to /types/ folder for imports
export interface BadgeProps {
  name: string;
  highlight?: string;
  icon?: ReactNode;
  tooltip?: string;
}

export const BadgeGrid = ({
  badges,
  title,
}: {
  badges: BadgeProps[];
  title: string;
}) => {
  return (
    <div className="p-4">
      <h3>{title}</h3>
      <div className="flex gap-3 items-center mt-4 flex-wrap">
        <TooltipProvider delayDuration={100}>
          {badges.map((badge, i) =>
            badge.tooltip ? (
              <Tooltip key={i}>
                <TooltipTrigger>
                  <Badge
                    className={cn(
                      "select-none p-2 rounded-md bg-secondary text-primary border-primary font-normal text-sm hover:bg-secondary hover:text-primary",
                      badge.highlight
                        ? `bg-${badge.highlight} border-${badge.highlight} hover:bg-${badge.highlight} hover:border-${badge.highlight}`
                        : null
                    )}
                  >
                    {badge.name}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>{badge.tooltip}</TooltipContent>
              </Tooltip>
            ) : (
              <Badge
                key={i}
                // BRIAN: MAY need to play with tailwind.config colors or add prop for text IF needed
                className={cn(
                  "select-none p-2 rounded-md bg-secondary text-primary border-primary font-normal text-sm hover:bg-secondary hover:text-primary",
                  badge.highlight
                    ? `bg-${badge.highlight} border-${badge.highlight} hover:bg-${badge.highlight} hover:border-${badge.highlight}`
                    : null
                )}
              >
                {badge.name}
              </Badge>
            )
          )}
        </TooltipProvider>
      </div>
    </div>
  );
};

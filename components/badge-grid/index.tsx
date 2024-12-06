import { ReactNode } from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

// TODO: Move to /types/ folder for imports
export interface BadgeProps {
  name: string;
  highlight?: string;
  icon?: ReactNode;
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
        {badges.map((badge, i) => (
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
        ))}
      </div>
    </div>
  );
};

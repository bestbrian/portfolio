import { BadgeProps } from "../badge-grid";
import { Badge } from "../ui/badge";
import Image from "next/image";

interface ToolGridProps {
  image: string;
  imageDark?: string;
  name: string;
  badge: BadgeProps;
}

export const ToolGrid = ({ tools }: { tools: ToolGridProps[] }) => {
  return (
    <div className="flex flex-wrap gap-4 py-6 justify-center md:justify-start md:px-4">
      {tools.map((tool, i) => (
        <div
          key={i}
          className="rounded-md bg-card flex flex-col items-center justify-between py-4 w-[6.75rem] h-40"
        >
          <div className="h-16 flex items-center">
            <Image
              src={tool.image}
              alt={tool.name}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUf8BzDAAEJAHbKoDoHQAAAABJRU5ErkJggg=="
              width={60}
              height={60}
              className={tool.imageDark ? "dark:hidden" : ""}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            {tool.imageDark && (
              <Image
                src={tool.imageDark}
                alt={`${tool.name} (dark mode)`}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUf8BzDAAEJAHbKoDoHQAAAABJRU5ErkJggg=="
                width={60}
                height={60}
                className="hidden dark:block"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            )}
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm font-medium text-foreground">{tool.name}</p>
            <Badge className="uppercase rounded-sm bg-muted text-muted-foreground border-muted font-mono text-xs">
              {tool.badge.name}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
};

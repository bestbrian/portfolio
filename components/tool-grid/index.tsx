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
    <div className="flex md:px-4 pb-4 gap-2 items-center mt-4 flex-wrap">
      {tools.map((tool, i) => (
        <div
          key={i}
          className="rounded-md bg-card items-center flex flex-col justify-between py-4 w-[6.75rem] h-40"
        >
          <div className="h-[60px] flex items-center">
            <Image
              src={tool.image}
              alt="alt"
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
                alt="alt"
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
            <p className="text-sm">{tool.name}</p>
            <Badge className="uppercase rounded-sm bg-card text-primary border-primary font-mono text-xs light:text-black">
              {tool.badge.name}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
};

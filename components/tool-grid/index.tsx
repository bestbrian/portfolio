import { BadgeProps } from "../badge-grid";
import { Badge } from "../ui/badge";
import Image from "next/image";

interface ToolGridProps {
  image: string;
  name: string;
  badge: BadgeProps;
}

export const ToolGrid = ({ tools }: { tools: ToolGridProps[] }) => {
  return (
    <div className="flex px-4 gap-3 items-center mt-4 flex-wrap">
      {tools.map((tool, i) => (
        <div
          key={i}
          className="rounded-md bg-secondary items-center flex flex-col justify-between py-4 w-28 h-40"
        >
          <div className="h-[60px] flex items-center">
            <Image
              src={tool.image}
              alt={tool.name}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUf8BzDAAEJAHbKoDoHQAAAABJRU5ErkJggg=="
              width={60}
              height={60}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm">{tool.name}</p>
            <Badge className="uppercase rounded-sm bg-primary text-black border-primary font-mono text-xs">
              {tool.badge.name}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
};

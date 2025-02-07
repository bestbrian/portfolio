import { ChevronDown } from "lucide-react";
import { Squiggle } from "../squiggle";

interface ArticleHeaderProps {
  heroImage: string;
  title: string;
}

export function ArticleHeader({ heroImage, title }: ArticleHeaderProps) {
  return (
    <section
      className="h-full flex flex-col justify-between text-white mt-6 py-4 relative rounded-2xl mx-4 md:m-16 2xl:mx-auto max-w-screen-2xl"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="relative font-subway mx-auto">ARTICLE</p>
      <div className="min-h-[calc(100svh-256px)] md:min-h-[40svh] flex flex-col justify-center items-center">
        <Squiggle />
        <h1 className="w-10/12 my-2 mx-auto font-bold leading-tight text-center text-heading-lg md:text-heading-xl md:w-1/2">
          {title}
        </h1>
        <Squiggle />
      </div>
      <ChevronDown strokeWidth={1} size={32} className="relative mx-auto" />
    </section>
  );
}

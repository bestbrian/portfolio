import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

interface ContentBlock {
  type: string;
  content: any;
}

interface ArticleContentProps {
  renderedContent: ContentBlock[];
}

export function ArticleContent({ renderedContent }: ArticleContentProps) {
  return (
    <article className="md:max-w-2xl mx-auto pb-8">
      {renderedContent.map((content, index) =>
        content.type === "carousel" ? (
          <Carousel key={index}>
            <CarouselContent>
              {Array.isArray(content.content) &&
                content.content.map((block) => (
                  <CarouselItem
                    key={block.id}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={block.image.file?.url || block.image.external?.url}
                      alt={block.image.caption?.[0]?.plain_text || "Image"}
                      width={800}
                      height={600}
                      className="w-auto h-auto max-h-[600px] object-contain rounded-lg"
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        )
      )}
    </article>
  );
}

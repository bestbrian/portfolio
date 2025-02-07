import readingTime from "reading-time";
import { NotionRenderer } from "@notion-render/client";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const getReadingTime = async (blocks: BlockObjectResponse[]) => {
  const renderer = new NotionRenderer();
  const html = await renderer.render(...blocks);
  const text = html.replace(/<[^>]+>/g, "");
  return readingTime(text);
};

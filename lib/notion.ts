import "server-only";
import React from "react";
import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import {
  BrianbestDatabase,
  BrianbestResponse,
  BrianbestResponseDTO,
} from "@/notion-sdk/dbs/brianbest";

const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const notion = new BrianbestDatabase({
  notionSecret: process.env.NOTION_TOKEN!,
});

export const fetchPages = React.cache(async () => {
  const response = await notion.query({
    filter: {
      and: [{ status: { equals: "Live" } }],
    },
    sorts: [
      {
        property: "created",
        direction: "descending",
      },
    ],
  });

  // Clean and transform the response
  const cleanResponse = JSON.parse(JSON.stringify(response));
  return cleanResponse.results;
});

export const fetchBySlug = React.cache(async (slug: string) => {
  const response = await notion.query({
    filter: {
      and: [{ status: { equals: "Live" } }],
    },
    sorts: [{ property: "created", direction: "descending" }],
  });

  const cleanResponse = JSON.parse(JSON.stringify(response));
  const post = cleanResponse.results.find(
    (post: BrianbestResponse) =>
      post.properties.Slug.rich_text[0]?.plain_text === slug
  );

  return post;
});

// export const fetchFeaturedPosts = React.cache(() => {
//   return notion.databases.query({
//     database_id: process.env.NOTION_DB_ID!,
//     filter: {
//       property: "Featured",
//       checkbox: {
//         equals: true,
//       },
//     },
//   });
// });

export const fetchPageBlocks = React.cache(async (pageId: string) => {
  const response = await notionClient.blocks.children.list({
    block_id: pageId,
    page_size: 100,
  });

  const cleanResponse = JSON.parse(JSON.stringify(response));
  return cleanResponse.results;
});

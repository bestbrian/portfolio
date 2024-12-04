import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "project",
      title: "Project",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "title",
            maxLength: 96,
          },
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "mainImage",
          title: "Main image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "body",
          title: "Body",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "authorName",
          title: "Author Name",
          type: "string",
        },
        {
          name: "authorImage",
          title: "Author Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};

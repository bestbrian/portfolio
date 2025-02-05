export const BRIANBEST_PROP_VALUES = {
"tags": [
  "featured"
] as const,
"status": [
  "Created",
  "Draft",
  "Live"
] as const,
}

export const BRIANBEST_PROPS_TO_IDS = {
  "slug": "BeNn",
  "tags": "sP%3CL",
  "status": "%7CnQL",
  "title": "title",
  "edited": "Nura",
  "created": "is~D"
} as const
export const BRIANBEST_IDS_TO_PROPS = {
  "BeNn": "slug",
  "sP%3CL": "tags",
  "%7CnQL": "status",
  "title": "title",
  "Nura": "edited",
  "is~D": "created"
} as const
export const BRIANBEST_PROPS_TO_TYPES = {
  "slug": "rich_text",
  "tags": "multi_select",
  "status": "status",
  "title": "title",
  "edited": "last_edited_time",
  "created": "created_time"
} as const

  export type BrianbestDTOProperties = keyof typeof BRIANBEST_PROPS_TO_IDS
  
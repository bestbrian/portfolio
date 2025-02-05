import { BrianbestResponse } from "./types"
import { UpdatePageBodyParameters,
RichTextItemRequest
} from '../../core/types/notion-api.types'

type TypeFromRecord<Obj, Type> = Obj extends Record<string, infer T> ? Extract<T, Type> : never

export type BrianbestPropertiesPatch = {
  slug?: string | { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] } | RichTextItemRequest[]
  tags?: BrianbestResponse['properties']['Tags']['multi_select'][number]['name'][]
  status?: TypeFromRecord<UpdatePageBodyParameters['properties'], { type?: 'status' }>['status']
  title?: string | { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] } | RichTextItemRequest[]
}

  
export class BrianbestPatchDTO {
  __data: UpdatePageBodyParameters

  constructor(opts: {
    properties?: BrianbestPropertiesPatch
    coverUrl?: string
    icon?: UpdatePageBodyParameters['icon']
    archived?: UpdatePageBodyParameters['archived']
  }) {
    const { properties: props, coverUrl, icon, archived } = opts

    this.__data = {}
    this.__data.properties = {}
    this.__data.cover = coverUrl ? { type: 'external', external: { url: coverUrl } } : undefined
    this.__data.icon = icon
    this.__data.archived = archived
    
    if (props?.slug !== undefined) {
      this.__data.properties['BeNn'] = {
        type: 'rich_text',
        rich_text: typeof props.slug === 'string' 
          ? [{ type: 'text', text: { content: props.slug } }]
          : Array.isArray(props.slug)
            ? props.slug
            : props.slug === null
              ? []
              : [
                  {
                    type: 'text',
                    text: {
                      content: props.slug.text,
                      link: props.slug?.url ? { url: props.slug.url } : undefined
                    },
                    annotations: props.slug.annotations
                  },
                ]
      }
    }

    if (props?.tags !== undefined) {
      this.__data.properties['sP%3CL'] = {
        type: 'multi_select',
        multi_select: props.tags?.map((item) => ({ name: item })),
      }
    }

    if (props?.status !== undefined) {
      this.__data.properties['%7CnQL'] = {
        type: 'status',
        status: props.status,
      }
    }

    if (props?.title !== undefined) {
      this.__data.properties['title'] = {
        type: 'title',
        title: typeof props.title === 'string' 
          ? [{ type: 'text', text: { content: props.title } }]
          : Array.isArray(props.title)
            ? props.title
            : props.title === null
              ? []
              : [
                  {
                    type: 'text',
                    text: {
                      content: props.title.text,
                      link: props.title?.url ? { url: props.title.url } : undefined
                    },
                    annotations: props.title.annotations
                  },
                ]
      }
    }
  }
}

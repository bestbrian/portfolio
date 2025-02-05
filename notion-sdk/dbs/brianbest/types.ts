import { WithOptional, Join, PathsToStringProps } from '../../core/types/helper.types'
import {
DatabaseObjectResponse,
StringRequest,
CreatedTimePropertyItemObjectResponse,
LastEditedTimePropertyItemObjectResponse,
MultiSelectPropertyItemObjectResponse,
RichTextPropertyItemObjectResponse,
StatusPropertyItemObjectResponse,
TitlePropertyItemObjectResponse,
ExistencePropertyFilter,
QueryDatabaseBodyParameters,
TimestampCreatedTimeFilter,
TimestampLastEditedTimeFilter,
DatePropertyFilter,
TextPropertyFilter
} from '../../core/types/notion-api.types'
import { BRIANBEST_PROPS_TO_IDS } from './constants'

export interface BrianbestResponse extends WithOptional<Omit<DatabaseObjectResponse, 'properties'>, 'title'| 'description'| 'is_inline'| 'url'| 'public_url'> {
  properties: {
    "Slug": RichTextPropertyItemObjectResponse,
    "Tags": Omit<MultiSelectPropertyItemObjectResponse, 'multi_select'> & { multi_select: [{ id: StringRequest, name: 'featured', color: 'orange' }]},
    "Status": Omit<StatusPropertyItemObjectResponse, 'status'> & { status: { id: StringRequest, name: 'Created', color: 'default' } | { id: StringRequest, name: 'Draft', color: 'blue' } | { id: StringRequest, name: 'Live', color: 'green' }},
    "Title": TitlePropertyItemObjectResponse,
    "Edited": LastEditedTimePropertyItemObjectResponse,
    "Created": CreatedTimePropertyItemObjectResponse
  }
}

export type BrianbestResponseProperties = keyof BrianbestResponse['properties']
export type BrianbestPath = Join<PathsToStringProps<BrianbestResponse>>

type BrianbestSlugPropertyFilter = TextPropertyFilter

export type BrianbestTagsPropertyType = BrianbestResponse['properties']['Tags']['multi_select'][number]['name']

type BrianbestTagsPropertyFilter =
  | {
      contains: BrianbestTagsPropertyType
    }
  | {
      does_not_contain: BrianbestTagsPropertyType
    }          
  | ExistencePropertyFilter


export type BrianbestStatusPropertyType = BrianbestResponse['properties']['Status']['status']['name']

type BrianbestStatusPropertyFilter =
  | {
      equals: BrianbestStatusPropertyType
    }
  | {
      does_not_equal: BrianbestStatusPropertyType
    }
  | ExistencePropertyFilter      

type BrianbestTitlePropertyFilter = TextPropertyFilter
type BrianbestEditedPropertyFilter = DatePropertyFilter
type BrianbestCreatedPropertyFilter = DatePropertyFilter

export type BrianbestPropertyFilter = { slug: BrianbestSlugPropertyFilter } | { tags: BrianbestTagsPropertyFilter } | { status: BrianbestStatusPropertyFilter } | { title: BrianbestTitlePropertyFilter } | { edited: BrianbestEditedPropertyFilter } | { created: BrianbestCreatedPropertyFilter }

export type BrianbestQuery = Omit<QueryDatabaseBodyParameters, 'filter' | 'sorts'> & {
  sorts?: Array<
  | {
      property: keyof typeof BRIANBEST_PROPS_TO_IDS
      direction: 'ascending' | 'descending'
    }
  | {
      timestamp: 'created_time' | 'last_edited_time'
      direction: 'ascending' | 'descending'
    }
  >
  filter?:
    | {
        or: Array<
          | BrianbestPropertyFilter
          | TimestampCreatedTimeFilter
          | TimestampLastEditedTimeFilter
          | {
              // or: BrianbestQuery['filter']
              or: Array<BrianbestPropertyFilter>
            }
          | {
              // and: BrianbestQuery['filter']
              and: Array<BrianbestPropertyFilter>
            }
        >
      }
    | {
        and: Array<
          | BrianbestPropertyFilter
          | TimestampCreatedTimeFilter
          | TimestampLastEditedTimeFilter
          | {
              // or: BrianbestQuery['filter']
              or: Array<BrianbestPropertyFilter>
            }
          | {
              // and: BrianbestQuery['filter']
              and: Array<BrianbestPropertyFilter>
            }
        >
      }
    | BrianbestPropertyFilter
    | TimestampCreatedTimeFilter
    | TimestampLastEditedTimeFilter
}

export type BrianbestQueryFilter = BrianbestQuery['filter']

export type BrianbestQueryResponse = {
  results: BrianbestResponse[]
  next_cursor: string | null
  has_more: boolean
}


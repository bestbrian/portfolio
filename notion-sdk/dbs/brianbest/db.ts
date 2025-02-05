import { BrianbestResponse, BrianbestQuery, BrianbestQueryResponse } from './types'
import { BrianbestPatchDTO } from './patch.dto'
import { GenericDatabaseClass, DatabaseOptions } from '../../core/src/generic-db'
import { BRIANBEST_PROPS_TO_TYPES, BRIANBEST_PROPS_TO_IDS, BrianbestDTOProperties } from './constants'

export class BrianbestDatabase extends GenericDatabaseClass<
  BrianbestResponse,
  BrianbestPatchDTO,
  BrianbestQuery,
  BrianbestQueryResponse,
  BrianbestDTOProperties
> {
  protected notionDatabaseId: string
  
  constructor(options: DatabaseOptions) {
    super(options)

    this.notionDatabaseId = '18b9f42c39cb8068a51fda91db3536eb'
  }

  protected queryRemapFilter(filter?: Record<string, unknown>) {
    if (!filter) {
      return undefined
    }

    const notionFilter = {} as Record<string, unknown>

    Object.entries(filter).forEach(([key, value]) => {
      if (key === 'and' || key === 'or') {
        if (Array.isArray(value)) {
          notionFilter[key] = value.map((v) => this.queryRemapFilter(v))
        } else {
          throw new Error(`Brianbest: Invalid filter value for ${key}: ${value}`)
        }
      } else {
        if (!(key in BRIANBEST_PROPS_TO_TYPES)) {
          throw new Error(`Brianbest: Invalid filter key: ${key}`)
        }

        const propType = BRIANBEST_PROPS_TO_TYPES[key as keyof typeof BRIANBEST_PROPS_TO_TYPES];
        const propId = BRIANBEST_PROPS_TO_IDS[key as keyof typeof BRIANBEST_PROPS_TO_IDS];

        notionFilter['property'] = propId
        notionFilter[propType] = value
      }
    })
    
    return notionFilter
  }

  protected queryRemapSorts(sorts?: Record<string, string>[]) {
    return sorts?.map((sort) => {
      if ('property' in sort) {
        return {
          property: BRIANBEST_PROPS_TO_IDS[sort.property as keyof typeof BRIANBEST_PROPS_TO_IDS],
          direction: sort.direction,
        }
      }

      return sort
    })
  }

  protected queryRemapFilterProperties(filterProps?: string[]) {
    return filterProps?.map((p) => BRIANBEST_PROPS_TO_IDS[p as keyof typeof BRIANBEST_PROPS_TO_IDS])
  }
}

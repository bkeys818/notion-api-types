import { RequestTemplate, List } from '../../global'
import { NotionResponse } from '../../..'

export interface Request extends RequestTemplate {
    endpoint: `pages/${string}/properties/${string}`
    method: 'GET'
    params?: {
        /** For paginated properties. */
        start_cursor?: string
        /** For paginated properties. The max number of property item objects on a page. The default size is 100 */
        page_size?: number
    }
}

/** Note: Missing Rollup type */
export type Response =
    | Exclude<PropertyItem, { type: ComplexResponseTypes | 'rollup' }>
    | PaginatedPropertyValues<
          Extract<PropertyItem, { type: ComplexResponseTypes }>
      >
    | PaginatedPropertyValues<NotionResponse.PageProperties.Relation>

type ComplexResponseTypes = 'title' | 'rich_text' | 'relation' | 'people'

type PropertyItem = NotionResponse.PageProperty & { object: 'property_item' }

type PaginatedPropertyValues<T extends { type: string }> = {
    [K in T as K['type']]: List<T> & {
        type: 'property_item'
        property_item: {
            id: string
            next_url: string | null
            type: K['type']
        } & { [_ in K['type']]: Record<never, never> }
    }
}[T['type']]

import { RequestTemplate, List } from './global'
import { NotionResponse } from '..'

export interface Request extends RequestTemplate {
    endpoint: `search`
    method: 'POST'
    params?: {
        /** When supplied, limits which pages are returned by comparing the query to the page title. */
        query?: string
        /** When supplied, sorts the results based on the provided criteria. */
        sort?: {
            /** The name of the timestamp to sort against. */
            timestamp: 'last_edited_time'
            /** The direction to sort */
            direction: 'ascending' | 'descending'
        }
        /** When supplied, filters the results based on the provided criteria. */
        filter?: SearchFilter<'object', 'page' | 'database'>
        /** When supplied, returns a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results. */
        start_cursor?: string
        /** The number of items from the full list desired in the response. Maximum: 100 */
        page_size?: number
    }
}

export type Response = List<NotionResponse.Database | NotionResponse.Page>

type SearchFilter<P, V> = {
    /** The name of the property to filter by. */
    property: P
    /** The value of the property to filter the results by. */
    value: V
}

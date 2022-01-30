import { RequestTemplate, List } from '../global'
import { NotionResponse } from '../..'

export interface Request extends RequestTemplate {
    endpoint: `users`
    method: 'GET'
    params?: {
        /** When supplied, returns a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results. */
        start_cursor?: string
        /** The number of items from the full list desired in the response. Maximum: 100 */
        page_size?: number
    }
}

export type Response = List<NotionResponse.User>

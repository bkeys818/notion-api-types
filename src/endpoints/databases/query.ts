import { RequestTemplate, List } from '../global'
import { NotionResponse } from '../../'
import Filter from './filter'
export { Filter }
// @ts-expect-error Import is used in tsdoc link
import * as Conditions from './filter/conditions'

export interface Request extends RequestTemplate {
    endpoint: `databases/${string}/query`
    method: 'POST'
    params?: {
        /** When supplied, limits which pages are returned based on the {@link Conditions filter conditions}. */
        filter?: Filter
        sorts?: {
            /** The name of the property to sort against. */
            property: string
            /** The name of the timestamp to sort against. */
            timestamp: 'created_time' | 'last_edited_time'
            /** The direction to sort. */
            direction: 'ascending' | 'descending'
        }[]
        /** When supplied, returns a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results. */
        start_cursor?: string
        /** The number of items from the full list desired in the response. Maximum: 100 */
        page_size?: number
    }
}

export type Response = List<NotionResponse.Page>

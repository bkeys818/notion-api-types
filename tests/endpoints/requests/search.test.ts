import { Search } from '../../../types/endpoints'
import { headers } from './global'

export const search = (token: string, query?: string): Search.Request => ({
    endpoint: 'search',
    headers: headers(token),
    method: 'POST',
    params: {
        query: query,
        filter: { property: 'object', value: 'page' },
        sort: { timestamp: 'last_edited_time', direction: 'ascending' },
    },
})

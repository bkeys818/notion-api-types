import { Search } from '../../../types/endpoints'
import { headers } from './global'

export const search = (
    token: string,
    type: 'page' | 'database',
    query?: string
): Search.Request => ({
    endpoint: 'search',
    headers: headers(token),
    method: 'POST',
    params: {
        query: query,
        filter: { property: 'object', value: type },
        sort: { timestamp: 'last_edited_time', direction: 'ascending' },
    },
})

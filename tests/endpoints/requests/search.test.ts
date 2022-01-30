import type { Search } from '../../../types/endpoints'
import { headers } from './global.test'
import { index } from '../../utils'

type SearchParams = NonNullable<Search.Request['params']>
const filters: NonNullable<SearchParams['filter']>[] = [
    {
        property: 'object',
        value: (['database', 'page'] as const)[index],
    },
]
const sort: NonNullable<SearchParams['sort']> = {
    direction: (['ascending', 'descending'] as const)[index],
    timestamp: 'last_edited_time',
}
const search: Search.Request = {
    endpoint: 'search',
    headers: headers,
    method: 'POST',
    params: {
        query: 'some_query',
        filter: filters[index],
        sort: sort,
    },
}

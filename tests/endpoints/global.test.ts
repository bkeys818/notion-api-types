import type { List } from '../../types/endpoints/global'

export const list = <T>(results: T[]): List<T> => ({
    object: 'list',
    results,
    has_more: false,
    next_cursor: null,
})

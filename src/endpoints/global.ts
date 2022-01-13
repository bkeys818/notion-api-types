export interface List<T> {
    object: 'list'
    /** The page, or partial list, or results. */
    results: T[]
    /** When the response includes the end of the list, `false`. Otherwise, `true`. */
    has_more: boolean
    /**
     * Only available when `has_more` is `true`.
     *
     * Used to retrieve the next page of results by passing the value as the `start_cursor` parameter to the same endpoint.
     */
    next_cursor: string | null
}

export interface RequestTemplate {
    endpoint: `${
        | 'databases'
        | 'pages'
        | 'blocks'
        | 'users'
        | 'search'}${string}`
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE'
    headers: {
        'Notion-Version': '2021-08-16'
        Authorization: `Bearer ${string}`
    }
    params?: { [key: string]: any }
}

export * from './test-file'

export function toCamelCase(value: string) {
    return value.replace(/([-_][a-z\d])/gi, $1 =>
        $1.toUpperCase().replace('-', '').replace('_', '')
    )
}
export function capitalize(value: string) {
    return value[0].toUpperCase() + value.slice(1)
}

export function createIsType<O extends { type: string }, T extends O['type']>(
    type: T
) {
    return (value: O): value is Extract<O, { type: T }> => value.type == type
}

export type Unwrap<P> = P extends Promise<infer T> ? T : never

export const index = 0 as number

type A = 'A' | 'B' | 'C'
type B = 'A' | 'B'

export type AllUnionUsed<U, T extends U> = Exclude<U, T> extends never
    ? undefined
    : Exclude<U, T>

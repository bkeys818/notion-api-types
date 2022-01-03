// @ts-ignore
import type { Database } from '.'

type Combine<T> = {} & { [P in keyof T]: T[P] }
export type NotionObj<Map, T extends keyof Map, Base = {}> = T extends T
    ? Combine<(T extends keyof Map[T] ? Map[T] : { [K in T]: Map[K] }) & { type: T } & Base>
    : never

export type Emoji = { type: 'emoji'; emoji: string }

export type Resolve<T> = {} & { [P in keyof T]: T[P] }

export type NotionObject<Map, T extends keyof Map, Base = {}> = T extends T
    ? Resolve<{ [K in T]: Map[K] } & { type: T } & Base>
    : never

export type ComplexNotionObject<
    Map,
    T extends keyof Map,
    Base = {}
> = T extends T ? Resolve<Map[T] & { type: T } & Base> : never

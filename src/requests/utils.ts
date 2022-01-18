import { Resolve } from '../utils'

export type PartialPick<T, K extends keyof T> = Resolve<
    T extends T
        ? {
              [P in Exclude<keyof T, K>]: T[P]
          } & { [P in K]?: T[P] }
        : never
>

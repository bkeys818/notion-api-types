export type Resolve<T> = unknown & { [P in keyof T]: T[P] }

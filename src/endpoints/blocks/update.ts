import { RequestTemplate } from '../global'
import { NotionRequest, NotionResponse } from '../..'
import { Resolve } from '../../utils'

export interface Request extends RequestTemplate {
    endpoint: `blocks/${string}`
    method: 'PATCH'
    params?: UpdateType<'text' | 'checked'> & {
        /** Set to true to archive (delete) a block. Set to false to un-archive (restore) a block. */
        archived?: boolean
    }
}

export type Response = NotionResponse.Block

type UpdateType<Supported extends string> = UpdateTypeHelper<
    ExtractTypeWithKey<NotionRequest.Block, Supported>,
    Supported
>

type UpdateTypeHelper<T extends { type?: any }, Supported> = T extends T
    ? {
          [K in NonNullable<T['type']>]?: Resolve<
              Pick<T[K], Extract<keyof T[K], Supported>>
          >
      }
    : never

type ExtractTypeWithKey<
    T extends { type?: any },
    K extends string
> = T extends T
    ? K extends K
        ? T[Exclude<T['type'], undefined>] extends { [P in K]: any }
            ? T
            : never
        : never
    : never

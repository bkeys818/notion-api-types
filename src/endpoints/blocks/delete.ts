import { RequestTemplate } from '../global'
import { NotionResponse } from '../..'

export interface Request extends RequestTemplate {
    endpoint: `blocks/${string}`
    method: 'DELETE'
}

export type Response = NotionResponse.Block

import { RequestTemplate } from '../global'
import { NotionResponse } from '../..'

export interface Request extends RequestTemplate {
    endpoint: `blocks/${string}`
    method: 'GET'
}

export type Response = NotionResponse.Block

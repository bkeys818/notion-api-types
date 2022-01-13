import { RequestTemplate } from '../global'
import { NotionResponse } from '../..'

export interface Request extends RequestTemplate {
    endpoint: `pages/${string}`
    method: 'PATCH'
}

export type Response = NotionResponse.Page

import { RequestTemplate } from '../global'
import { NotionResponse } from '../..'

export interface Request extends RequestTemplate {
    endpoint: `pages/${string}`
    method: 'GET'
}

export type Response = NotionResponse.Page

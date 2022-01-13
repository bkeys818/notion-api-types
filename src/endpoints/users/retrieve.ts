import { RequestTemplate } from '../global'
import { NotionResponse } from '../..'

export interface Request extends RequestTemplate {
    endpoint: `users/${string}`
    method: 'GET'
}

export type Response = NotionResponse.User

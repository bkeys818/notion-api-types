import { RequestTemplate } from '../global'
import { NotionResponse } from '../..'

export interface Request extends RequestTemplate {
    endpoint: `users/me`
    method: 'GET'
}

export type Response = NotionResponse.Users.Bot

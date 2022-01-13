import { RequestTemplate } from '../global'
import { NotionResponse } from '../../'

export interface Request extends RequestTemplate {
    endpoint: `databases/${string}`
    method: 'GET'
}

export type Response = NotionResponse.Database

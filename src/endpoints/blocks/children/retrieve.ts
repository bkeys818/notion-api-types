import { RequestTemplate, List } from '../../global'
import { NotionResponse } from '../../..'

export interface Request extends RequestTemplate {
    endpoint: `blocks/${string}/children`
    method: 'GET'
}

export type Response = List<NotionResponse.Block>

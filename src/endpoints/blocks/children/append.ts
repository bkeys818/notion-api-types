import { RequestTemplate, List } from '../../global'
import { NotionRequest, NotionResponse } from '../../..'

export interface Request extends RequestTemplate {
    endpoint: `blocks/${string}/children`
    method: 'PATCH'
    params: {
        children: NotionRequest.Block[]
    }
}

export type Response = List<NotionResponse.Block>

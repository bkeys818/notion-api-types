import { RequestTemplate } from '../global'
import { NotionRequest, NotionResponse } from '../..'
import { Emoji } from '../../requests/global'

export interface Request extends RequestTemplate {
    endpoint: `pages/${string}`
    method: 'PATCH'
    params?: {
        properties?: { [key: string]: NotionRequest.PageProperty | undefined }
        archived?: boolean
        icon?: Emoji | NotionRequest.Files.External
        cover?: NotionRequest.Files.External
    }
}

export type Response = NotionResponse.Page

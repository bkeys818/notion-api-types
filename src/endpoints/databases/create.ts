import { RequestTemplate } from '../global'
import { NotionRequest, NotionResponse } from '../../'

export interface Request extends RequestTemplate {
    endpoint: `databases`
    method: 'POST'
    params: {
        parent: NotionRequest.Parents.PageId
        title?: [NotionRequest.RichTexts.Text]
        /** Requires a property with type `"title"` */
        properties: {
            [key: string]: NotionRequest.DatabaseProperty | undefined
        }
    }
}

export type Response = NotionResponse.Database

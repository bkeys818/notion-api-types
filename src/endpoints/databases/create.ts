import { RequestTemplate } from '../global'
import { NotionRequest, NotionResponse } from '../../'
import { Emoji } from '../../requests/global'

export interface Request extends RequestTemplate {
    endpoint: `databases`
    method: 'POST'
    params: {
        parent: NotionRequest.Parents.PageId
        title?: [NotionRequest.RichTexts.Text]
        description?: [NotionRequest.RichTexts.Text]
        icon?: Emoji | NotionRequest.Files.External
        cover?: NotionRequest.Files.External
        /** Requires a property with type `"title"` */
        properties: {
            [key: string]: NotionRequest.DatabaseProperty | undefined
        }
        /** Makes the database appear as an inline block, not a child page. */
        is_inline: boolean
    }
}

export type Response = NotionResponse.Database

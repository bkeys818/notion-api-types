import { RequestTemplate } from '../global'
import { NotionRequest, NotionResponse } from '../../'
import { SelectOptions as ResponseSelectOptions } from '../../responses/properties/global'
import { SelectOptions } from '../../requests/properties/global'
import { Resolve } from '../../utils'
import { Emoji } from '../../requests/global'

export interface Request extends RequestTemplate {
    endpoint: `databases/${string}`
    method: 'PATCH'
    params?: {
        title?: [NotionRequest.RichTexts.Text]
        description?: [NotionRequest.RichTexts.Text]
        icon?: Emoji | NotionRequest.Files.External
        cover?: NotionRequest.Files.External
        properties?: {
            [key: string]: CreateProperty | undefined
        }
    }
}
export type Response = NotionResponse.Database

type CreateProperty =
    | Exclude<
          NotionRequest.DatabaseProperty,
          | NotionRequest.DatabaseProperties.Select
          | NotionRequest.DatabaseProperties.MultiSelect
      >
    | Select
    | MultiSelect

interface Select {
    type?: 'select'
    select: { options?: (ExisitingSelectOptions | SelectOptions)[] }
}
interface MultiSelect {
    type?: 'multi_select'
    multi_select: { options?: (ExisitingSelectOptions | SelectOptions)[] }
}

type ExisitingSelectOptions = Resolve<
    Partial<Pick<ResponseSelectOptions, 'color'>> &
        (
            | Pick<ResponseSelectOptions, 'id'>
            | Pick<ResponseSelectOptions, 'name'>
        )
>

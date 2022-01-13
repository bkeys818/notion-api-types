import { RequestTemplate } from '../global'
import { NotionRequest, NotionResponse } from '../../'

// import { Create } from '.'

// import { Property as ResponseProp } from '../../properties/databases'
// import { PropertyType } from '../..'
import { SelectOptions as ResponseSelectOptions } from '../../response/properties/global'
import { SelectOptions } from '../../request/properties/global'
import { Resolve } from '../../utils'
// import { NotionObj } from '../../global'

export interface Request extends RequestTemplate {
    endpoint: `databases`
    method: 'POST'
    params?: {
        title?: [NotionRequest.RichTexts.Text]
        properties?: {
            [key: string]: CreateProperty
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

export interface Select {
    type?: 'select'
    select: { options?: (ExisitingSelectOptions | SelectOptions)[] }
}
export interface MultiSelect {
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

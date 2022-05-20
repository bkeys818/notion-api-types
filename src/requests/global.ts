import * as Response from '../responses/global'
import { PartialPick } from './utils'

export { Color } from '../global'

export type Emoji = PartialPick<Response.Emoji, 'type'>
export type NotionDate = PartialPick<Response.NotionDate, 'end' | 'time_zone'>

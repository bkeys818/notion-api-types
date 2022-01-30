import * as Response from '../responses/global'
import { PartialPick } from './utils'

export type Emoji = PartialPick<Response.Emoji, 'type'>
export type NotionDate = PartialPick<Response.NotionDate, 'end' | 'time_zone'>

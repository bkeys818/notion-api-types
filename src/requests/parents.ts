import { NotionResponse } from '..'
import { PartialPick } from './utils'

export type DatabaseId = PartialPick<NotionResponse.Parents.DatabaseId, 'type'>
export type PageId = PartialPick<NotionResponse.Parents.PageId, 'type'>

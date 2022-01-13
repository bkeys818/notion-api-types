import { NotionResponse, NotionRequest } from '..'
import { PartialPick } from './utils'
import { NotionDate } from './global'

export type Page = PartialPick<NotionResponse.Mentions.Page, 'type'>
export type Database = PartialPick<NotionResponse.Mentions.Database, 'type'>

interface MentionBase {
    /** Type of the inline mention. */
    type: string
}

export interface User extends MentionBase {
    type: 'user'
    user: NotionRequest.User
}
export interface Date extends MentionBase {
    type: 'date'
    date: NotionDate
}

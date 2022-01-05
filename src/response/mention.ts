import { NotionObject } from '../utils'
import { User } from '.'
import { NotionDate } from './global'

interface Mentions {
    user: User<'person'>
    page: { id: string }
    database: { id: string }
    date: NotionDate
}
export type MentionType = keyof Mentions
export type Mention<T extends MentionType = MentionType> = NotionObject<
    Mentions,
    T
>

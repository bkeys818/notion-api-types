import { Users } from '.'
import { NotionDate } from './global'

interface MentionBase {
    /** Type of the inline mention. */
    type: string
}

export interface User extends MentionBase {
    type: 'user'
    user: Users.Person
}
export interface Page extends MentionBase {
    type: 'page'
    page: { id: string }
}
export interface Database extends MentionBase {
    type: 'database'
    database: { id: string }
}
export interface Date extends MentionBase {
    type: 'date'
    date: NotionDate
}

import type { Mentions, Mention } from '../../types/responses'
import { users } from '.'
import { notionDate } from './global.test'
import { index, AllUnionUsed } from '../utils'

const user: Mentions.User = {
    type: 'user',
    user: users.person,
}

const page: Mentions.Page = {
    page: { id: 'random_page_id' },
    type: 'page',
}

const database: Mentions.Database = {
    database: { id: 'random_database_id' },
    type: 'database',
}

const date: Mentions.Date = {
    date: notionDate,
    type: 'date',
}

const allMentions = [user, page, database, date]
const _: AllUnionUsed<Mention, typeof allMentions[number]> = undefined
const anyMention: Mention = allMentions[index]
export default anyMention

import type { Mentions, Mention } from '../../types/requests'
import { notionDate } from './global.test'
import { anyUser } from '.'
import { index, AllUnionUsed } from '../utils'

const page: Mentions.Page = { page: { id: 'random_page_id' } }

const database: Mentions.Database = {
    database: { id: 'random_database_id' },
}

const user: Mentions.User = { user: anyUser }

const date: Mentions.Date = { date: notionDate }

const allMentions = [user, page, database, date]
const _: AllUnionUsed<Mention, typeof allMentions[number]> = undefined
const anyMention: Mention = allMentions[index]
export default anyMention

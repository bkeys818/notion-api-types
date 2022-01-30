import type {
    NotionItem,
    Emoji,
    NotionDate,
} from '../../types/responses/global'
import { anyParent, files, anyFile } from '.'
import { index } from '../utils'

export const emoji: Emoji = { type: 'emoji', emoji: '🛠' }

export const notionItem: NotionItem = {
    id: 'random_database_or_page_id',
    created_time: 'some_created_time',
    last_edited_time: 'some_last_edited_time',
    icon: [anyFile, emoji][index],
    cover: files.external,
    parent: anyParent,
    url: 'some_notion_url',
}

export const notionDate: NotionDate = {
    start: 'some_start_date',
    end: 'some_end_date',
    time_zone: 'some_time_zone',
}

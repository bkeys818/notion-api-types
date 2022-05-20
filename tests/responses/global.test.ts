import type {
    NotionObject,
    Emoji,
    NotionDate,
} from '../../types/responses/global'

export const emoji: Emoji = { type: 'emoji', emoji: '🛠' }

export const notionObject: NotionObject = {
    id: 'random_database_or_page_id',
    created_time: 'some_created_time',
    created_by: { object: 'user', id: 'random_user_id' },
    last_edited_time: 'some_last_edited_time',
    last_edited_by: { object: 'user', id: 'random_user_id' },
    archived: false,
}

export const notionDate: NotionDate = {
    start: 'some_start_date',
    end: 'some_end_date',
    time_zone: 'some_time_zone',
}

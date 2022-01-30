import type { NotionDate, Emoji } from '../../types/requests/global'

const date = (value: string) => new Date(value).toISOString()

export const notionDate: NotionDate = {
    start: date('1/1/2010'),
    end: date('1/2/2010'),
    time_zone: 'EST',
}

export const emoji: Emoji = { emoji: '🧪' }

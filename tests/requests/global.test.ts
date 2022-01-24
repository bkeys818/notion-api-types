import type { NotionDate } from '../../types/requests/global'

const date = (value: string) => new Date(value).toISOString()
const start = date('1/1/2000')

export const notionDates: Record<
    'basic' | 'duration' | 'timezone',
    NotionDate
> = {
    basic: { start },
    duration: { start, end: date('1/1/2010') },
    timezone: { start, time_zone: 'EST' },
}

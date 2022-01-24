import type { Mentions, Mention } from '../../types/responses'

const user: Mentions.User = {
    type: 'user',
    user: {
        avatar_url: null,
        id: 'some_id',
        name: 'Ben Keys (test account)',
        object: 'user',
        person: { email: 'hidden_email' },
        type: 'person',
    },
}

const database: Mentions.Database = {
    database: { id: 'some_id' },
    type: 'database',
}

const date: Mentions.Date = {
    date: { end: null, start: '2000-01-01', time_zone: null },
    type: 'date',
}

const mentions: Mention[] = [user, database, date]
export default mentions

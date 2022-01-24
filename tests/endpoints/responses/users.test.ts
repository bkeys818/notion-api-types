import type { Users } from '../../../types/endpoints'

const retrieveRes: Users.Retrieve.Response = {
    avatar_url: null,
    id: 'some_id',
    name: 'Ben Keys (test account)',
    object: 'user',
    person: { email: 'hidden_email' },
    type: 'person',
}

const listAllRes: Users.ListAll.Response = {
    has_more: false,
    next_cursor: null,
    object: 'list',
    results: [
        {
            avatar_url: null,
            id: 'some_id',
            name: 'Ben Keys (test account)',
            object: 'user',
            person: { email: 'hidden_email' },
            type: 'person',
        },
        {
            avatar_url: null,
            bot: { owner: { type: 'workspace', workspace: true } },
            id: 'some_id',
            name: 'Testing',
            object: 'user',
            type: 'bot',
        },
    ],
}

const retrieveMyBotRes: Users.RetrieveMyBot.Response = {
    avatar_url: null,
    bot: { owner: { type: 'workspace', workspace: true } },
    id: 'some_id',
    name: 'Testing',
    object: 'user',
    type: 'bot',
}

import type { Users } from '../../types/responses'

export const person: Users.Person = {
    object: 'user',
    id: 'db49262a-227e-4b55-afff-075c453a279c',
    name: 'Ben Keys',
    avatar_url: null,
    type: 'person',
    person: { email: 'name@domain.com' },
}

// bot (no access to)
const bot: Users.Bot = {
    object: 'user',
    id: 'ff676f4d-89a6-420b-a8af-38cadfc78d36',
    name: 'Testing',
    avatar_url: null,
    type: 'bot',
    bot: {},
}

// bot (w/ iternal integration)
const myBot1: Users.Bot = {
    object: 'user',
    id: '2e55865d-10dd-4d95-bb81-8b3e44a03a0d',
    name: 'Testing',
    avatar_url: null,
    type: 'bot',
    bot: { owner: { type: 'workspace', workspace: true } },
}

// bot (w/ public integration)
const myBot: Users.Bot = {
    object: 'user',
    id: 'ff676f4d-89a6-420b-a8af-38cadfc78d36',
    name: 'Canvas Sync',
    avatar_url: null,
    type: 'bot',
    bot: {
        owner: {
            type: 'user',
            user: {
                object: 'user',
                id: 'db49262a-227e-4b55-afff-075c453a279c',
                name: 'Benjamin Keys',
                avatar_url: null,
                type: 'person',
                person: { email: 'name@domain.com' },
            },
        },
    },
}
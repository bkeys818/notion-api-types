import type { Users, User } from '../../types/responses'
import { index, AllUnionUsed } from '../utils'

export const person: Users.Person = {
    object: 'user',
    id: 'random_user_id',
    name: 'Ben Keys',
    avatar_url: null,
    type: 'person',
    person: { email: 'name@domain.com' },
}

const bots: Users.Bot['bot'][] = [
    // bot (no access to)
    {},
    // bot (w/ iternal integration)
    { owner: { type: 'workspace', workspace: true } },
    // bot (w/ public integration)
    { owner: { type: 'user', user: person } },
]
export const bot: Users.Bot = {
    object: 'user',
    id: 'random_user_id',
    name: 'Testing',
    avatar_url: null,
    type: 'bot',
    bot: bots[index],
}

const allUsers = [person, bot]
const _: AllUnionUsed<User, typeof allUsers[number]> = undefined
const anyUser: User = allUsers[index]
export default anyUser

import type {
    Retrieve,
    ListAll,
    RetrieveMyBot,
} from '../../../types/endpoints/users'
import { headers } from './global.test'

const retrieve: Retrieve.Request = {
    endpoint: `users/random_user_id`,
    headers: headers,
    method: 'GET',
}

const listAll: ListAll.Request = {
    endpoint: 'users',
    headers: headers,
    method: 'GET',
}

const retrieveMyBot: RetrieveMyBot.Request = {
    endpoint: 'users/me',
    headers: headers,
    method: 'GET',
}

import {
    Retrieve,
    ListAll,
    RetrieveMyBot,
} from '../../../types/endpoints/users'
import { headers } from './global'

export const retrieve = (token: string, userId: string): Retrieve.Request => ({
    endpoint: `users/${userId}`,
    headers: headers(token),
    method: 'GET',
})

export const listAll = (token: string): ListAll.Request => ({
    endpoint: 'users',
    headers: headers(token),
    method: 'GET',
})

export const retrieveMyBot = (token: string): RetrieveMyBot.Request => ({
    endpoint: 'users/me',
    headers: headers(token),
    method: 'GET',
})

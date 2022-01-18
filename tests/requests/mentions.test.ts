import type { Mentions } from '../../types/requests'
import { notionDates } from './global'
import * as request from '.'

export const page = (pageId: string): Mentions.Page => ({
    page: { id: pageId },
})

export const database = (databaseId: string): Mentions.Database => ({
    database: { id: databaseId },
})

export const user = (userId: string): Mentions.User => ({
    user: request.user(userId),
})

export const date: Mentions.Date = { date: notionDates.basic }

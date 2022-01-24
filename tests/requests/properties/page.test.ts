import type { PageProperties } from '../../../types/requests/properties'
import * as request from '..'
import { selectOptions } from './global.test'
import { notionDates } from '../global.test'

export const richTexts: Record<
    PageProperties.RichText['rich_text'][number]['type'] & string,
    PageProperties.RichText
> = {
    text: { rich_text: request.richTexts.allText },
    mention: { rich_text: [request.richTexts.mention] },
    equation: { rich_text: [request.richTexts.equation] },
}

export const number: PageProperties.Number = { number: 17.48 }

export const select: PageProperties.Select = { select: selectOptions[2] }

export const multiSelect: PageProperties.MultiSelect = {
    multi_select: [selectOptions[1], selectOptions[3]],
}

export const dates: Record<keyof typeof notionDates, PageProperties.Date> = {
    basic: { date: notionDates.basic },
    duration: { date: notionDates.duration },
    timezone: { date: notionDates.timezone },
}

export const relation = (pageId: string): PageProperties.Relation => ({
    relation: [{ id: pageId }],
})

export const title: PageProperties.Title = {
    title: [request.richTexts.custom('page title')],
}

export const people = (userId: string): PageProperties.People => ({
    people: [request.user(userId)],
})

export const files: PageProperties.Files = {
    files: [{ ...request.files.external, name: 'Spotify Logo' }],
}

export const checkbox: PageProperties.Checkbox = { checkbox: true }

export const url: PageProperties.Url = { url: 'http://localhost:8000' }

export const email: PageProperties.Email = { email: 'username@example.com' }

export const phoneNumber: PageProperties.PhoneNumber = {
    phone_number: '(555) 555-5555',
}

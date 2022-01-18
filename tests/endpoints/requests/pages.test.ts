import { Create, Retrieve, Update } from '../../../types/endpoints/pages'
import { headers } from './global'
import { pageProperties, parents, blocks } from '../../requests'

export const create = (token: string, databaseId: string): Create.Request => ({
    endpoint: 'pages',
    method: 'POST',
    headers: headers(token),
    params: {
        parent: parents.databse(databaseId),
        icon: { emoji: '🧪' },
        properties: { title: pageProperties.title },
        children: [blocks.paragraph, blocks.syncedBlock()],
    },
})

export const retrieve = (token: string, pageId: string): Retrieve.Request => ({
    endpoint: `pages/${pageId}`,
    method: 'GET',
    headers: headers(token),
})

export const update = (
    token: string,
    pageId: string,
    userId: string
): Update.Request => ({
    endpoint: `pages/${pageId}`,
    method: 'PATCH',
    headers: headers(token),
    params: {
        properties: {
            'rich text - text': pageProperties.richTexts.text,
            'rich text - mentions': pageProperties.richTexts.mention,
            'rich text - equation': pageProperties.richTexts.equation,
            'number (dollar)': pageProperties.number,
            'single select': pageProperties.select,
            'mutli select': pageProperties.multiSelect,
            'date (basic)': pageProperties.dates.basic,
            'date (duration)': pageProperties.dates.duration,
            'date (timezone)': pageProperties.dates.timezone,
            person: pageProperties.people(userId),
            files: pageProperties.files,
            checkbox: pageProperties.checkbox,
            'local url': pageProperties.url,
            'email address': pageProperties.email,
            'phone number': pageProperties.phoneNumber,
            'relation (self)': pageProperties.relation(pageId),
        },
    },
})

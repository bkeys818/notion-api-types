import {
    Create,
    Query,
    Retrieve,
    Update,
} from '../../../types/endpoints/databases'
import { headers } from './global'
import { databaseProperties as props } from '../../requests'

export const create = (token: string, parentId: string): Create.Request => ({
    endpoint: 'databases',
    method: 'POST',
    headers: headers(token),
    params: {
        parent: { page_id: parentId },
        title: [{ text: { content: 'Database For Testing' } }],
        properties: {
            title: props.title,
            'date (basic)': props.date,
            person: props.people,
            'number (dollar)': props.number,
        },
    },
})

export const query = (token: string, databaseId: string): Query.Request => ({
    endpoint: `databases/${databaseId}/query`,
    method: 'POST',
    headers: headers(token),
    params: {
        filter: {
            and: [
                { property: 'title', title: { is_not_empty: true } },
                {
                    or: [
                        {
                            property: 'number (dollar)',
                            number: { greater_than: 0 },
                        },
                        { property: 'date (basic)', date: { past_year: {} } },
                    ],
                },
            ],
        },
        sorts: [
            { timestamp: 'last_edited_time', direction: 'ascending' },
            { property: 'number (dollar)', direction: 'descending' },
        ],
    },
})
export const update = (token: string, databaseId: string): Update.Request => ({
    endpoint: `databases/${databaseId}`,
    method: 'PATCH',
    headers: headers(token),
    params: {
        title: [{ text: { content: 'Updated Database For Testing' } }],
        properties: {
            'rich text - text': props.richText,
            'rich text - mentions': props.richText,
            'rich text - equation': props.richText,
            'single select': props.select,
            'mutli select': props.multiSelect,
            'date (duration)': props.date,
            'date (timezone)': props.date,
            files: props.files,
            checkbox: props.checkbox,
            'local url': props.url,
            'email address': props.email,
            'phone number': props.phoneNumber,
            formula: props.formula,
            'relation (self)': props.relation(databaseId),
            'created time': props.createdTime,
            'created by': props.createdBy,
            'last edited time': props.lastEditedTime,
            'last edited by': props.lastEditedBy,
            'rollups - array': props.rollup('person'),
            'rollups - date': props.rollup('date (basic)', 'earliest_date'),
            'rollups - number': props.rollup('number (dollar)', 'average'),
        },
    },
})

export const retrieve = (
    token: string,
    databaseId: string
): Retrieve.Request => ({
    endpoint: `databases/${databaseId}`,
    method: 'GET',
    headers: headers(token),
})

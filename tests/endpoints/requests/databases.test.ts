import type {
    Create,
    Query,
    Retrieve,
    Update,
} from '../../../types/endpoints/databases'
import { headers } from './global.test'
import { parents, richTexts, anyDatabaseProperty } from '../../requests'

const create: Create.Request = {
    endpoint: 'databases',
    method: 'POST',
    headers: headers,
    params: {
        parent: parents.page,
        title: [richTexts.text],
        properties: { 'some property name': anyDatabaseProperty },
    },
}

const query: Query.Request = {
    endpoint: `databases/random_database_id/query`,
    method: 'POST',
    headers: headers,
    params: {
        filter: {
            and: [
                { property: 'name', title: { is_not_empty: true } },
                {
                    or: [
                        {
                            property: 'some number property',
                            number: { greater_than: 0 },
                        },
                        {
                            property: 'some date property',
                            date: { past_year: {} },
                        },
                    ],
                },
            ],
        },
        sorts: [
            { timestamp: 'last_edited_time', direction: 'ascending' },
            { property: 'some number property', direction: 'descending' },
        ],
    },
}
const update: Update.Request = {
    endpoint: `databases/random_database_id`,
    method: 'PATCH',
    headers: headers,
    params: {
        title: [richTexts.text],
        properties: { 'some property name': anyDatabaseProperty },
    },
}

const retrieve: Retrieve.Request = {
    endpoint: `databases/random_database_id`,
    method: 'GET',
    headers: headers,
}

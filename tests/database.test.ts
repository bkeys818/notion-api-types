import { Database } from '../types'

const database: Database = {
    object: 'database',
    id: '1d05903f-7b76-465a-b4f0-feb577927e8f',
    cover: null,
    icon: { type: 'emoji', emoji: '🧪' },
    created_time: '2021-12-31T14:31:00.000Z',
    last_edited_time: '2021-12-31T15:23:00.000Z',
    title: [
        {
            type: 'text',
            text: { content: 'Database For Testing', link: null },
            annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
            },
            plain_text: 'Database For Testing',
            href: null,
        },
    ],
    properties: {
        'phone number': {
            id: '%3B%7Cvs',
            name: 'phone number',
            type: 'phone_number',
            phone_number: {},
        },
        'rich text - equation': {
            id: '%3DNd%40',
            name: 'rich text - equation',
            type: 'rich_text',
            rich_text: {},
        },
        'last edited by': {
            id: '%3D%5D%40t',
            name: 'last edited by',
            type: 'last_edited_by',
            last_edited_by: {},
        },
        'number (dollar)': {
            id: 'C%40uA',
            name: 'number (dollar)',
            type: 'number',
            number: { format: 'dollar' },
        },
        'mutli select': {
            id: 'CN%7C%7B',
            name: 'mutli select',
            type: 'multi_select',
            multi_select: {
                options: [
                    {
                        id: '6f2455cc-d2f6-4770-a730-169cb3842b0d',
                        name: 'item 1',
                        color: 'green',
                    },
                    {
                        id: '05d0c3ff-b321-4277-a3bc-962d7330caad',
                        name: 'item 2',
                        color: 'blue',
                    },
                    {
                        id: '669bde9f-ec79-4ef0-adaa-fb3aa1140d2d',
                        name: 'item 3',
                        color: 'purple',
                    },
                    {
                        id: 'a5d2a896-ffa6-4066-8f3f-eb952259053b',
                        name: 'item 4',
                        color: 'pink',
                    },
                    {
                        id: '7158656f-8cfd-409f-80e6-b7057a02facd',
                        name: 'item 5',
                        color: 'red',
                    },
                ],
            },
        },
        checkbox: {
            id: 'DK%7DE',
            name: 'checkbox',
            type: 'checkbox',
            checkbox: {},
        },
        formula: {
            id: 'E%3AyU',
            name: 'formula',
            type: 'formula',
            formula: {
                expression:
                    'ceil(toNumber(day(prop("rollups - date"))) * prop("number (dollar)"))',
            },
        },
        'created time': {
            id: 'F%5B%3CV',
            name: 'created time',
            type: 'created_time',
            created_time: {},
        },
        'rollups - number': {
            id: 'HkTE',
            name: 'rollups - number',
            type: 'rollup',
            rollup: {
                rollup_property_name: 'number (dollar)',
                relation_property_name: 'relation (self)',
                rollup_property_id: 'C@uA',
                relation_property_id: 'RcgO',
                function: 'sum',
            },
        },
        'rollups - array': {
            id: 'JmID',
            name: 'rollups - array',
            type: 'rollup',
            rollup: {
                rollup_property_name: 'mutli select',
                relation_property_name: 'relation (self)',
                rollup_property_id: 'CN|{',
                relation_property_id: 'RcgO',
                function: 'show_original',
            },
        },
        'local url': {
            id: 'KD%3F%5B',
            name: 'local url',
            type: 'url',
            url: {},
        },
        'single select': {
            id: 'MurH',
            name: 'single select',
            type: 'select',
            select: {
                options: [
                    {
                        id: '81168c7b-70bf-4fbc-8d47-fd4b8a7fab4d',
                        name: 'item 1',
                        color: 'default',
                    },
                    {
                        id: '886a4cbd-4b73-4124-ae46-763b1f0d9ddf',
                        name: 'item 2',
                        color: 'gray',
                    },
                    {
                        id: '2cbb5387-8447-43a8-ad2e-7656c8020133',
                        name: 'item 3',
                        color: 'brown',
                    },
                    {
                        id: '54966cca-93b3-43d0-b285-14cc6ccaf846',
                        name: 'item 4',
                        color: 'orange',
                    },
                    {
                        id: 'bacd8f48-6c22-4a96-a1aa-3613f6aab3b0',
                        name: 'item 5',
                        color: 'yellow',
                    },
                ],
            },
        },
        'date (basic)': {
            id: 'PpW%3D',
            name: 'date (basic)',
            type: 'date',
            date: {},
        },
        'relation (self)': {
            id: 'RcgO',
            name: 'relation (self)',
            type: 'relation',
            relation: {
                database_id: '1d05903f-7b76-465a-b4f0-feb577927e8f',
                synced_property_name: 'relation (self)',
                synced_property_id: 'RcgO',
            },
        },
        'rich text - mentions': {
            id: 'VQ%3FF',
            name: 'rich text - mentions',
            type: 'rich_text',
            rich_text: {},
        },
        'last edited time': {
            id: 'ZNYt',
            name: 'last edited time',
            type: 'last_edited_time',
            last_edited_time: {},
        },
        files: {
            id: '%5Be%5D%7C',
            name: 'files',
            type: 'files',
            files: {},
        },
        'date (duration)': {
            id: '%5EkRO',
            name: 'date (duration)',
            type: 'date',
            date: {},
        },
        'rollups - date': {
            id: 'cka%40',
            name: 'rollups - date',
            type: 'rollup',
            rollup: {
                rollup_property_name: 'date (basic)',
                relation_property_name: 'relation (self)',
                rollup_property_id: 'PpW=',
                relation_property_id: 'RcgO',
                function: 'earliest_date',
            },
        },
        'rich text - text': {
            id: 'fRmw',
            name: 'rich text - text',
            type: 'rich_text',
            rich_text: {},
        },
        person: {
            id: 'gUtO',
            name: 'person',
            type: 'people',
            people: {},
        },
        'date (timezone)': {
            id: 'nZAZ',
            name: 'date (timezone)',
            type: 'date',
            date: {},
        },
        'email address': {
            id: 'oHTz',
            name: 'email address',
            type: 'email',
            email: {},
        },
        'created by': {
            id: 'uADj',
            name: 'created by',
            type: 'created_by',
            created_by: {},
        },
        name: { id: 'title', name: 'name', type: 'title', title: {} },
    },
    parent: { type: 'workspace', workspace: true },
    url: 'https://www.notion.so/1d05903f7b76465ab4f0feb577927e8f',
}

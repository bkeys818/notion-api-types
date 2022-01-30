import type { Create, Retrieve, Update } from '../../../types/endpoints/pages'
import { headers } from './global.test'
import { anyParent, files, anyPageProperty, anyBlock } from '../../requests'
import { emoji } from '../../requests/global.test'
import { index } from '../../utils'

export const create: Create.Request = {
    endpoint: 'pages',
    method: 'POST',
    headers: headers,
    params: {
        parent: anyParent,
        icon: [files.external, emoji][index],
        properties: { 'some property name': anyPageProperty },
        children: [anyBlock],
    },
}

export const retrieve: Retrieve.Request = {
    endpoint: `pages/random_page_id`,
    method: 'GET',
    headers: headers,
}

export const update: Update.Request = {
    endpoint: `pages/random_page_id`,
    method: 'PATCH',
    headers: headers,
    params: {
        properties: { 'some property name': anyPageProperty },
    },
}

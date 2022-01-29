import type {
    Retrieve,
    Delete,
    Update,
    Children,
} from '../../../types/endpoints/blocks'
import { headers } from './global.test'
import { anyBlock, blocks } from '../../requests'

const retrieve: Retrieve.Request = {
    endpoint: `blocks/random_block_id`,
    headers: headers,
    method: 'GET',
}

const update: Update.Request = {
    endpoint: `blocks/random_block_id`,
    headers: headers,
    method: 'PATCH',
    params: blocks.paragraph,
}

const deleteBlock: Delete.Request = {
    endpoint: `blocks/random_block_id`,
    headers: headers,
    method: 'DELETE',
}

const children: {
    readonly retrieve: Children.Retrieve.Request
    readonly append: Children.Append.Request
} = {
    retrieve: {
        endpoint: `blocks/random_block_id/children`,
        headers: headers,
        method: 'GET',
    },
    append: {
        endpoint: `blocks/random_block_id/children`,
        headers: headers,
        method: 'PATCH',
        params: { children: [anyBlock] },
    },
}

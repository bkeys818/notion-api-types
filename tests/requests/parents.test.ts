import type { Parents, Parent } from '../../types/requests'
import { index, AllUnionUsed } from '../utils'

export const page: Parents.PageId = { page_id: 'random_page_id' }

export const database: Parents.DatabaseId = {
    database_id: 'random_database_id',
}

const allParents = [page, database]
const _: AllUnionUsed<Parent, typeof allParents[number]> = undefined
const anyParent: Parent = allParents[index]
export default anyParent

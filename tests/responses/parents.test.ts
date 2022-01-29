import type { Parents, Parent } from '../../types/responses'
import { index, AllUnionUsed } from '../utils'

export const pageId: Parents.PageId = {
    page_id: 'random_page_id',
    type: 'page_id',
}

export const databaseId: Parents.DatabaseId = {
    database_id: 'random_database_id',
    type: 'database_id',
}

export const workspace: Parents.Workspace = {
    type: 'workspace',
    workspace: true,
}

const allParents = [pageId, databaseId, workspace]
const _: AllUnionUsed<Parent, typeof allParents[number]> = undefined
const anyParent: Parent = allParents[index]
export default anyParent

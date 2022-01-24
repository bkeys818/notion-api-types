import type { Parents, Parent } from '../../types/responses'

const pageId: Parents.PageId = { page_id: 'some_page_id', type: 'page_id' }

const databaseId: Parents.DatabaseId = {
    database_id: 'some_database_id',
    type: 'database_id',
}

const workspace: Parents.Workspace = { type: 'workspace', workspace: true }

const mentions: Parent[] = [pageId, databaseId, workspace]
export default mentions

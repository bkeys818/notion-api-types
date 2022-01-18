import type { Parents } from '../../types/requests'

export const page = (pageId: string): Parents.PageId => ({ page_id: pageId })

export const databse = (databaseId: string): Parents.DatabaseId => ({
    database_id: databaseId,
})

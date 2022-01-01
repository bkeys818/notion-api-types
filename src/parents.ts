// @ts-ignore
import { Database, Page } from '.'

export interface DatabaseId {
    type: 'database_id'
    /** The ID of the {@link Database database} that this page belongs to. */
    database_id: string
}
export interface PageId {
    type: 'page_id'
    /** The ID of the {@link Page page} that this page belongs to. */
    page_id: string
}
export interface Workspace {
    type: 'workspace'
    workspace: true
}

export type Any = DatabaseId | PageId | Workspace

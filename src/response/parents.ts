// @ts-expect-error Import is used in tsdoc link
import { Database, Page } from '.'

interface ParentBase {
    type: string
}

export interface DatabaseId extends ParentBase {
    type: 'database_id'
    /** The ID of the {@link Database database} that this page belongs to. */
    database_id: string
}
export interface PageId extends ParentBase {
    type: 'page_id'
    /** The ID of the {@link Page page} that this page belongs to. */
    page_id: string
}
export interface Workspace extends ParentBase {
    type: 'workspace'
    workspace: true
}

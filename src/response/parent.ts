import { NotionObject } from '../utils'

interface Parents {
    /** The ID of the {@link Database database} that this page belongs to. */
    database_id: string
    /** The ID of the {@link Page page} that this page belongs to. */
    page_id: string
    workspace: true
}
export type ParentType = keyof Parents
export type Parent<T extends ParentType = ParentType> = NotionObject<Parents, T>

import { Emoji } from './global'
import * as Properties from './properties'
import * as RichTexts from './rich-texts'
import * as Parents from './parents'
import * as Files from './files'
export * as Blocks from './blocks'
export * as Users from './users'
export { Properties, RichTexts, Parents, Files }

export interface Database {
    object: 'database'
    /** Unique identifier for the database. */
    id: string
    /** Date and time when this database was created. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
    created_time: string
    /** Date and time when this database was updated. Formatted as an ISO 8601 date time string. */
    last_edited_time: string
    /** Name of the database as it appears in Notion. See {@link RichText rich text object} for a breakdown of the properties. */
    title: RichTexts.Any[]
    /** Page icon. */
    icon: File | Emoji
    /** Page cover image. */
    cover: Files.External
    /**
     * Schema of properties for the database as they appear in Notion.
     *
     * `key`: string - The name of the property as it appears in Notion.
     *
     * `value`: object - A {@link Properties.Databases.Any Property object}.
     */
    properties: { [key: string]: Properties.Databases.Any }
    /** The parent of this page. */
    parent: Parents.PageId | Parents.Workspace
    /** The URL of the Notion database. */
    url: string
}
export interface Page {
    object: 'page'
    /** Unique identifier of the page. */
    id: string
    /** Date and time when this page was created. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
    created_time: string
    /** Date and time when this page was updated. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
    last_edited_time: string
    /** The archived status of the page. */
    archived: boolean
    /** Page icon. */
    icon: File | Emoji
    /** Page cover image. */
    cover: Files.External
    /**
     * Property values of this page.
     *
     * If `parent.type` is `"page_id"` or `"workspace"`, then the only valid key is title.
     *
     * If `parent.type` is `"database_id"`, then the keys and values of this field are determined by the {@link Database.properties properties} of the {@link Database database} this page belongs to.
     *
     * key string Name of a property as it appears in Notion.
     *
     * value object A {@link Properties.Pages.Any Property value object}.
     */
    properties: Properties.Pages.Any
    /** The parent of this page. */
    parent: Parents.Any
    /** The URL of the Notion page. */
    url: string
}
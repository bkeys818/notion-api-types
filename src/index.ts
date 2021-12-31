import { Emoji } from './global'
import * as Properties from './properties'
import * as RichTexts from './rich-texts'
import * as Parents from './parents'
import * as Files from './files'
export * as Blocks from './blocks'
export * as Users from './users'
export { Properties, RichTexts, Parents, Files }

interface NotionItem {
    id: string
    /** Date and time when this page was created. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
    created_time: string
    /** Date and time when this page was updated. Formatted as an ISO 8601 date time string. */
    last_edited_time: string
    /** Page icon. */
    icon: Files.Any | Emoji | null
    /** Page cover image. */
    cover: Files.External | null
    /** The parent of this page. */
    parent: Parents.Any
    /** The URL of the Notion page. */
    url: string
}

export interface Database extends NotionItem {
    object: 'database'
    /** Name of the page as it appears in Notion. See {@link RichTexts.Text rich text object} for a breakdown of the properties. */
    title: RichTexts.Text[]
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
}
export interface Page extends NotionItem {
    object: 'page'
    /** The archived status of the page. */
    archived: boolean
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
    properties: { [key: string]: Properties.Pages.Any }
}

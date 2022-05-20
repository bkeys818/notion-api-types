import { NotionObject, Emoji } from './global'
import { Parents, RichTexts, DatabaseProperty, Files } from '.'

export default interface Database extends NotionObject {
    object: 'database'
    /** Name of the database as it appears in Notion. See {@link RichTexts.Text rich text object} for a breakdown of the properties. */
    title: [RichTexts.Text]
    /**
     * Schema of properties for the database as they appear in Notion.
     *
     * `key`: string - The name of the property as it appears in Notion.
     *
     * `value`: object - A {@link DatabaseProperty Property object}.
     */
    properties: { [key: string]: DatabaseProperty }
    /** Database icon. */
    icon: File | Emoji | null
    /** Database cover image. */
    cover: Files.External | null
    /** The parent of this database. */
    parent: Parents.PageId | Parents.Workspace
    /** The URL of the Notion database. */
    url: string
}

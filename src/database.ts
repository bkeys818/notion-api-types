import { NotionItem } from './global'
import { Parent, RichText } from '.'
import { Databases } from './properties'

export default interface Database extends NotionItem {
    object: 'database'
    /** Name of the page as it appears in Notion. See {@link RichTexts.Text rich text object} for a breakdown of the properties. */
    title: [RichText<'text'>]
    /**
     * Schema of properties for the database as they appear in Notion.
     *
     * `key`: string - The name of the property as it appears in Notion.
     *
     * `value`: object - A {@link Properties.Databases.Any Property object}.
     */
    properties: { [key: string]: Databases.Property }
    /** The parent of this page. */
    parent: Parent<'page_id' | 'workspace'>
}

import { NotionItem } from './global'
import { Parents, RichTexts, DatabaseProperty } from '.'

export default interface Database extends NotionItem {
    object: 'database'
    /** Name of the page as it appears in Notion. See {@link RichTexts.Text rich text object} for a breakdown of the properties. */
    title: [RichTexts.Text]
    /**
     * Schema of properties for the database as they appear in Notion.
     *
     * `key`: string - The name of the property as it appears in Notion.
     *
     * `value`: object - A {@link DatabaseProperty Property object}.
     */
    properties: { [key: string]: DatabaseProperty }
    /** The parent of this page. */
    parent: Parents.PageId | Parents.Workspace
}

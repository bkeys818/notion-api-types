import { NotionObject, Emoji } from './global'
import { PageProperty, Parent, Files } from '.'

// @ts-expect-error Import is used in tsdoc link
import { Database } from '.'

export default interface Page extends NotionObject {
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
     * value object A {@link PageProperty Property value object}.
     */
    properties: { [key: string]: PageProperty }
    /** Page icon. */
    icon: File | Emoji | null
    /** Page cover image. */
    cover: Files.External | null
    /** The parent of this page. */
    parent: Parent
    /** The URL of the Notion page. */
    url: string
}

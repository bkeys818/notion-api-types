import { NotionItem } from './global'
import { Pages } from './properties'

// @ts-ignore
import { Database } from '.'

export default interface Page extends NotionItem {
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
     * value object A {@link Pages.Property Property value object}.
     */
    properties: { [key: string]: Pages.Property }
}

import { NotionObject } from './utils'
import { RichText, File } from '.'
import { Emoji } from './global'

interface Text {
    /** Rich text in the block. */
    text: RichText[]
}
interface Caption {
    /** Caption of the block */
    caption: RichText[]
}
interface Blocks {
    paragraph: Text
    bulleted_list_item: Text
    numbered_list_item: Text
    toggle: Text
    to_do: Text & {
        /** Whether the to_do is checked or not. */
        checked: boolean | null
    }
    quote: Text
    callout: Text & {
        /** Page icon. */
        icon: Emoji | File
    }
    synced_block: {
        synced_from: null | {
            /** Type of this synced from object.  */
            type: 'block_id'
            /** Identifier of an original synced_block */
            block_id: string
        }
    }
    template: Text
    column: Record<string, never>
    child_page: {
        /** Plain text of page title. */
        title: string
    }
    child_database: {
        /** Plain text of the database title */
        title: string
    }
    heading_1: Text
    heading_2: Text
    heading_3: Text
    embed: Caption & {
        /** Link to website the embed block will display. */
        url: string
    }
    image: Caption & File
    video: Caption & File
    file: Caption & File
    pdf: Caption & File
    bookmark: Caption & {
        /** Bookmark link */
        url: string
    }
    equation: { /** A KaTeX compatible string */ expression: string }
    divider: Record<string, never>
    table_of_contents: Record<string, never>
    breadcrumb: Record<string, never>
    column_list: Record<string, never>
    link_preview: { url: string }
    link_to_page:
        | { type: 'page_id'; page_id: string }
        | { type: 'database_id'; database_id: string }
    unsupported: Record<string, never>
}
export type BlockType = keyof Blocks
export type Block<T extends BlockType = BlockType> = NotionObject<
    Blocks,
    T,
    {
        object: 'block'
        /** Identifier for the block. */
        id: string
        /** Date and time when this block was created. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
        created_time: string
        /** Date and time when this block was last updated. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
        last_edited_time: string
        /** The archived status of the block. */
        archived: boolean
        /** Whether or not the block has children blocks nested within it. */
        has_children: boolean
    }
>

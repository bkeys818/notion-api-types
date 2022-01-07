import { NotionObject } from '../utils'
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
    heading_1: Text
    heading_2: Text
    heading_3: Text
    bulleted_list_item: Text
    numbered_list_item: Text
    to_do: Text & {
        /** Whether the to_do is checked or not. */
        checked: boolean | null
    }
    toggle: Text
    child_page: {
        /** Plain text of page title. */
        title: string
    }
    child_database: {
        /** Plain text of the database title */
        title: string
    }
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
    callout: Text & {
        /** Page icon. */
        icon: Emoji | File
    }
    quote: Text
    equation: { /** A KaTeX compatible string */ expression: string }
    divider: Record<string, never>
    table_of_contents: Record<string, never>
    breadcrumb: Record<string, never>
    column: Record<string, never>
    column_list: Record<string, never>
    link_preview: { url: string }
    synced_block: {
        synced_from: null | {
            /** Type of this synced from object.  */
            type: 'block_id'
            /** Identifier of an original synced_block */
            block_id: string
        }
    }
    template: Text
    link_to_page:
        | { type: 'page_id'; page_id: string }
        | { type: 'database_id'; database_id: string }
    table: {
        /** Number of columns in the table. */
        readonly table_width: number
        /** Whether or not the table has a column header. If `true`, the first row in the table will appear visually distinct from the other rows. */
        has_column_header: boolean
        /** Whether or not the table has a header row. If true, the first column in the table will appear visually distinct from the other columns. */
        has_row_header: boolean
    }
    table_row: {
        /** Array of cell contents in horizontal display order. Array length should match the `"table_width"` value of the table containing this row. Each cell itself is an array of rich text objects. */
        cells: RichText[][]
    }
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

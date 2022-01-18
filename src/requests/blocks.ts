import { NotionResponse, NotionRequest } from '..'
import { PartialPick } from './utils'
import { Emoji } from './global'

interface BlockBase {
    /** Type of block. */
    type?: string
}

interface ParentBlock extends BlockBase {
    /** Any nested children blocks of the block */
    children: NotionRequest.Block[]
}

interface Text {
    /** Rich text in the block. */
    text: NotionRequest.RichText[]
}
interface Caption {
    /** Caption of the block */
    caption: NotionRequest.RichText[]
}

export interface Paragraph extends ParentBlock {
    type?: 'paragraph'
    paragraph: Text
}
export interface Heading1 extends ParentBlock {
    type?: 'heading_1'
    heading_1: Text
}
export interface Heading2 extends ParentBlock {
    type?: 'heading_2'
    heading_2: Text
}
export interface Heading3 extends ParentBlock {
    type?: 'heading_3'
    heading_3: Text
}
export interface BulletedListItem extends ParentBlock {
    type?: 'bulleted_list_item'
    bulleted_list_item: Text
}
export interface NumberedListItem extends ParentBlock {
    type?: 'numbered_list_item'
    numbered_list_item: Text
}
export interface ToDo extends ParentBlock {
    type?: 'to_do'
    to_do: Text & {
        /** Whether the todo is checked or not. */
        checked: boolean | null
    }
}
export interface Toggle extends ParentBlock {
    type?: 'toggle'
    toggle: Text
}
export interface Embed extends BlockBase {
    type?: 'embed'
    embed: Caption & {
        /** Link to website the embed block will display. */
        url: string
    }
}
export interface Image extends BlockBase {
    type?: 'image'
    image: Caption & NotionRequest.File
}
export interface Video extends BlockBase {
    type?: 'video'
    video: Caption & NotionRequest.File
}
export interface File extends BlockBase {
    type?: 'file'
    file: Caption & NotionRequest.File
}
export interface Pdf extends BlockBase {
    type?: 'pdf'
    pdf: Caption & NotionRequest.File
}
export interface Bookmark extends BlockBase {
    type?: 'bookmark'
    bookmark: Caption & {
        /** Bookmark link */
        url: string
    }
}
export interface Callout extends ParentBlock {
    type?: 'callout'
    callout: Text & {
        /** Page icon. */
        icon: Emoji | NotionRequest.File
    }
}
export interface Quote extends ParentBlock {
    type?: 'quote'
    quote: Text
}
export interface Equation extends BlockBase {
    type?: 'equation'
    equation: { /** A KaTeX compatible string */ expression: string }
}
export interface Divider extends BlockBase {
    type?: 'divider'
    divider: Record<string, never>
}
export interface TableOfContents extends BlockBase {
    type?: 'table_of_contents'
    table_of_contents: Record<string, never>
}
export interface Breadcrumb extends BlockBase {
    type?: 'breadcrumb'
    breadcrumb: Record<string, never>
}
export interface Column extends ParentBlock {
    type?: 'column'
    column: Record<string, never>
}
export interface ColumnList extends ParentBlock {
    type?: 'column_list'
    column_list: Record<string, never>
    children: Column[]
}
export interface SyncedBlock extends ParentBlock {
    type?: 'synced_block'
    synced_block: {
        synced_from: null | {
            /** Type of this synced from object.  */
            type?: 'block_id'
            /** Identifier of an original syncedblock */
            block_id: string
        }
    }
}
export interface Template extends ParentBlock {
    type?: 'template'
    template: Text
}
export interface LinkToPage extends BlockBase {
    type?: 'link_to_page'
    link_to_page: PartialPick<
        NotionResponse.Blocks.LinkToPage['link_to_page'],
        'type'
    >
}
export interface Table extends ParentBlock {
    type?: 'table'
    table: PartialPick<
        NotionResponse.Blocks.Table['table'],
        'has_column_header' | 'has_row_header'
    >
    children: TableRow[]
}
export interface TableRow extends ParentBlock {
    type?: 'table_row'
    table_row: {
        /** Array of cell contents in horizontal display order. Array length should match the `"table_width"` value of the table containing this row. Each cell itself is an array of rich text objects. */
        cells: NotionRequest.RichText[][]
    }
}
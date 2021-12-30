import { Emoji } from './global'
import { RichTexts, Files } from './index'

interface BlockBase {
    object: 'block'
    /** Identifier for the block. */
    id: string
    /** Date and time when this block was created. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
    created_time: string
    /** Date and time when this block was last updated. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
    last_edited_time: string
    /** The archived status of the block. */
    archived: boolean
}
interface ParentBlock extends BlockBase {
    /** Whether or not the block has children blocks nested within it. */
    has_children: boolean
}

interface Text {
    /** Any nested children blocks of the block. */
    text: RichTexts.Any[]
}
interface TextWithChildren extends Text {
    /** Any nested children blocks of the block. */
    children: Any[]
}

export interface Paragraph extends ParentBlock {
    type: 'paragraph'
    paragraph: TextWithChildren
}
export interface BulletedListItem extends ParentBlock {
    type: 'bulleted_list_item'
    bulleted_list_item: TextWithChildren
}
export interface NumberedListItem extends ParentBlock {
    type: 'numbered_list_item'
    numbered_list_item: TextWithChildren
}
export interface Toggle extends ParentBlock {
    type: 'toggle'
    toggle: TextWithChildren
}
export interface ToDo extends ParentBlock {
    type: 'to_do'
    to_do: TextWithChildren & {
        /** Whether the to_do is checked or not. */
        checked: boolean | null
    }
}
export interface Quote extends ParentBlock {
    type: 'quote'
    quote: TextWithChildren
}
export interface Callout extends ParentBlock {
    type: 'callout'
    callout: TextWithChildren & {
        /** Page icon. */
        icon: Emoji | Files.Any
    }
}
export interface SyncedBlock extends ParentBlock {
    type: 'synced_block'
    synced_block:
        | {
              /** Value is always `null` to signify that this is an original synced block and that is not referring to another block */
              synced_from: null
              /** Any nested children blocks of the `synced_block` block. These blocks will be synced across this block and references to this `synced_block` */
              children: Any[]
          }
        | {
              /** Object that contains the id of the original synced_block */
              synced_from: {
                  /** Type of this synced from object.  */
                  type: 'block_id'
                  /** Identifier of an original synced_block */
                  block_id: string
              }
          }
}
export interface Template extends ParentBlock {
    type: 'template'
    template: TextWithChildren
}
export interface Column extends ParentBlock {
    type: 'column'
    column: {
        /** List of blocks in a single column. */
        children: Any[]
    }
}
export interface ChildPage extends ParentBlock {
    type: 'child_page'
    child_page: {
        /** Plain text of page title. */
        title: string
    }
}
export interface ChildDatabase extends ParentBlock {
    type: 'child_database'
    child_database: {
        /** Plain text of the database title */
        title: string
    }
}

export interface Heading1 extends BlockBase {
    type: 'heading_1'
    heading_1: { text: RichTexts.Any[] }
}
export interface Heading2 extends BlockBase {
    type: 'heading_2'
    heading_2: { text: RichTexts.Any[] }
}
export interface Heading3 extends BlockBase {
    type: 'heading_3'
    heading_3: { text: RichTexts.Any[] }
}
export interface Embed extends BlockBase {
    type: 'embed'
    embed: {
        /** Link to website the embed block will display. */
        url: string
    }
}
export interface Image extends BlockBase {
    type: 'image'
    /** Image file reference */
    image: Files.Any
}
export interface Video extends BlockBase {
    type: 'video'
    /** Video file reference */
    video: Files.Any
}
export interface FileBlock extends BlockBase {
    type: 'file'
    /** File reference */
    file: Files.Any
    /** Caption of the file block */
    caption: RichTexts.Any[]
}
export interface Pdf extends BlockBase {
    type: 'pdf'
    /** PDF file reference */
    pdf: Files.Any
}
export interface Bookmark extends BlockBase {
    type: 'bookmark'
    bookmark: {
        /** Bookmark link */
        url: string
        /** Caption of the bookmark block */
        caption: RichTexts.Any[]
    }
}
export interface Equation extends BlockBase {
    type: 'equation'
    equation: {
        /** A KaTeX compatible string */
        expression: string
    }
}
export interface Divider extends BlockBase {
    type: 'divider'
    divider: {}
}
export interface TableOfContents extends BlockBase {
    type: 'table_of_contents'
    table_of_contents: {}
}
export interface Breadcrumb extends BlockBase {
    type: 'breadcrumb'
    breadcrumb: {}
}
export interface ColumnList extends BlockBase {
    type: 'column_list'
    column_list: {
        /** List of columns in the column_list block. */
        children: Column[]
    }
}
export interface LinkPreview extends BlockBase {
    type: 'link_preview'
    link_preview: { url: string }
}
export interface LinkToPage extends BlockBase {
    type: 'link_to_page'
    link_to_page:
        | { type: 'page_id'; page_id: string }
        | { type: 'database_id'; database_id: string }
}
export interface Unsupported extends BlockBase {
    type: 'unsupported'
    unsupported: {}
}

export type Any =
    | Paragraph
    | BulletedListItem
    | NumberedListItem
    | Toggle
    | ToDo
    | Quote
    | Callout
    | SyncedBlock
    | Template
    | Column
    | ChildPage
    | ChildDatabase
    | Heading1
    | Heading2
    | Heading3
    | Embed
    | Image
    | Video
    | FileBlock
    | Pdf
    | Bookmark
    | Equation
    | Divider
    | TableOfContents
    | Breadcrumb
    | ColumnList
    | LinkPreview
    | LinkToPage
    | Unsupported

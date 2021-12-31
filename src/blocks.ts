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
    /** Whether or not the block has children blocks nested within it. */
    has_children: boolean
}

interface Text {
    /** Rich text in the block. */
    text: RichTexts.Any[]
}

interface Caption {
    /** Caption of the block */
    caption: RichTexts.Any[]
}

export interface Paragraph extends BlockBase {
    type: 'paragraph'
    paragraph: Text
}
export interface BulletedListItem extends BlockBase {
    type: 'bulleted_list_item'
    bulleted_list_item: Text
}
export interface NumberedListItem extends BlockBase {
    type: 'numbered_list_item'
    numbered_list_item: Text
}
export interface Toggle extends BlockBase {
    type: 'toggle'
    toggle: Text
}
export interface ToDo extends BlockBase {
    type: 'to_do'
    to_do: Text & {
        /** Whether the to_do is checked or not. */
        checked: boolean | null
    }
}
export interface Quote extends BlockBase {
    type: 'quote'
    quote: Text
}
export interface Callout extends BlockBase {
    type: 'callout'
    callout: Text & {
        /** Page icon. */
        icon: Emoji | Files.Any
    }
}
export interface SyncedBlock extends BlockBase {
    type: 'synced_block'
    synced_block: {
        synced_from: null | {
            /** Type of this synced from object.  */
            type: 'block_id'
            /** Identifier of an original synced_block */
            block_id: string
        }
    }
}
export interface Template extends BlockBase {
    type: 'template'
    template: Text
}
export interface Column extends BlockBase {
    type: 'column'
    column: {}
}
export interface ChildPage extends BlockBase {
    type: 'child_page'
    child_page: {
        /** Plain text of page title. */
        title: string
    }
}
export interface ChildDatabase extends BlockBase {
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
    embed: Caption & {
        /** Link to website the embed block will display. */
        url: string
    }
}
export interface Image extends BlockBase {
    type: 'image'
    /** Image file reference */
    image: Caption & Files.Any
}
export interface Video extends BlockBase {
    type: 'video'
    /** Video file reference */
    video: Caption & Files.Any
}
export interface File extends BlockBase {
    type: 'file'
    /** File reference */
    file: Caption & Files.Any
}
export interface Pdf extends BlockBase {
    type: 'pdf'
    /** PDF file reference */
    pdf: Caption & Files.Any
}
export interface Bookmark extends BlockBase {
    type: 'bookmark'
    bookmark: Caption & {
        /** Bookmark link */
        url: string
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
    column_list: {}
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
    | File
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

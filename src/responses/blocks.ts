import { NotionResponse } from '..'
import { NotionObject, Emoji } from './global'

interface BlockBase extends NotionObject {
    object: 'block'
    /** Type of block. */
    type: string
    /** The archived status of the block. */
    archived: boolean
    /** Whether or not the block has children blocks nested within it. */
    has_children: boolean
}

interface ChildlessBase extends BlockBase {
    has_children: false
}

interface Text {
    /** Rich text in the block. */
    rich_text: NotionResponse.RichText[]
}
interface Caption {
    /** Caption of the block */
    caption: NotionResponse.RichText[]
}

export interface Paragraph extends BlockBase {
    type: 'paragraph'
    paragraph: Text
}
export interface Heading1 extends BlockBase {
    type: 'heading_1'
    heading_1: Text
}
export interface Heading2 extends BlockBase {
    type: 'heading_2'
    heading_2: Text
}
export interface Heading3 extends BlockBase {
    type: 'heading_3'
    heading_3: Text
}
export interface BulletedListItem extends BlockBase {
    type: 'bulleted_list_item'
    bulleted_list_item: Text
}
export interface NumberedListItem extends BlockBase {
    type: 'numbered_list_item'
    numbered_list_item: Text
}
export interface ToDo extends BlockBase {
    type: 'to_do'
    to_do: Text & {
        /** Whether the todo is checked or not. */
        checked: boolean | null
    }
}
export interface Toggle extends BlockBase {
    type: 'toggle'
    toggle: Text
}
export interface Code extends ChildlessBase {
    type: 'code'
    code: Text &
        Caption & {
            // prettier-ignore
            /** Coding language in code block */
            language: 'abap'| 'arduino'| 'bash'| 'basic'| 'c'| 'clojure'| 'coffeescript'| 'c++'| 'c#'| 'css'| 'dart'| 'diff'| 'docker'| 'elixir'| 'elm'| 'erlang'| 'flow'| 'fortran'| 'f#'| 'gherkin'| 'glsl'| 'go'| 'graphql'| 'groovy'| 'haskell'| 'html'| 'java'| 'javascript'| 'json'| 'julia'| 'kotlin'| 'latex'| 'less'| 'lisp'| 'livescript'| 'lua'| 'makefile'| 'markdown'| 'markup'| 'matlab'| 'mermaid'| 'nix'| 'objective-c'| 'ocaml'| 'pascal'| 'perl'| 'php'| 'plain text'| 'powershell'| 'prolog'| 'protobuf'| 'python'| 'r'| 'reason'| 'ruby'| 'rust'| 'sass'| 'scala'| 'scheme'| 'scss'| 'shell'| 'sql'| 'swift'| 'typescript'| 'vb.net'| 'verilog'| 'vhdl'| 'visual basic'| 'webassembly'| 'xml'| 'yaml'| 'java/c/c++/c#'
        }
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
export interface Embed extends ChildlessBase {
    type: 'embed'
    embed: Caption & {
        /** Link to website the embed block will display. */
        url: string
    }
}
export interface Image extends ChildlessBase {
    type: 'image'
    image: Caption & NotionResponse.File
}
export interface Video extends ChildlessBase {
    type: 'video'
    video: Caption & NotionResponse.File
}
export interface File extends ChildlessBase {
    type: 'file'
    file: Caption & NotionResponse.File
}
export interface Pdf extends ChildlessBase {
    type: 'pdf'
    pdf: Caption & NotionResponse.File
}
export interface Bookmark extends ChildlessBase {
    type: 'bookmark'
    bookmark: Caption & {
        /** Bookmark link */
        url: string
    }
}
export interface Callout extends BlockBase {
    type: 'callout'
    callout: Text & {
        /** Page icon. */
        icon: Emoji | File
    }
}
export interface Quote extends BlockBase {
    type: 'quote'
    quote: Text
}
export interface Equation extends ChildlessBase {
    type: 'equation'
    equation: { /** A KaTeX compatible string */ expression: string }
}
export interface Divider extends ChildlessBase {
    type: 'divider'
    divider: Record<string, never>
}
export interface TableOfContents extends ChildlessBase {
    type: 'table_of_contents'
    table_of_contents: Record<string, never>
}
export interface Breadcrumb extends ChildlessBase {
    type: 'breadcrumb'
    breadcrumb: Record<string, never>
}
export interface Column extends BlockBase {
    type: 'column'
    column: Record<string, never>
}
export interface ColumnList extends BlockBase {
    type: 'column_list'
    column_list: Record<string, never>
}
export interface LinkPreview extends BlockBase {
    type: 'link_preview'
    link_preview: { url: string }
}
export interface SyncedBlock extends BlockBase {
    type: 'synced_block'
    synced_block: {
        synced_from: null | {
            /** Type of this synced from object.  */
            type: 'block_id'
            /** Identifier of an original syncedblock */
            block_id: string
        }
    }
}
export interface Template extends BlockBase {
    type: 'template'
    template: Text
}
export interface LinkToPage extends ChildlessBase {
    type: 'link_to_page'
    link_to_page:
        | { type: 'page_id'; page_id: string }
        | { type: 'database_id'; database_id: string }
}
export interface Table extends BlockBase {
    type: 'table'
    table: {
        /** Number of columns in the table. */
        readonly table_width: number
        /** Whether or not the table has a column header. If `true`, the first row in the table will appear visually distinct from the other rows. */
        has_column_header: boolean
        /** Whether or not the table has a header row. If true, the first column in the table will appear visually distinct from the other columns. */
        has_row_header: boolean
    }
}
export interface TableRow extends BlockBase {
    type: 'table_row'
    table_row: {
        /** Array of cell contents in horizontal display order. Array length should match the `"tablewidth"` value of the table containing this row. Each cell itself is an array of rich text objects. */
        cells: NotionResponse.RichText[][]
    }
}
export interface Unsupported extends BlockBase {
    type: 'unsupported'
    unsupported: Record<string, never>
}

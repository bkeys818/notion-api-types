import { NotionObj, Emoji } from './global'
import { Databases, Pages, PropertyType } from './properties'
export { Databases, Pages, PropertyType }

interface NotionItem {
    id: string
    /** Date and time when this page was created. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
    created_time: string
    /** Date and time when this page was updated. Formatted as an ISO 8601 date time string. */
    last_edited_time: string
    /** Page icon. */
    icon: File | Emoji | null
    /** Page cover image. */
    cover: File<'external'> | null
    /** The parent of this page. */
    parent: Parent
    /** The URL of the Notion page. */
    url: string
}
export interface Database extends NotionItem {
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
export interface Page extends NotionItem {
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

interface Parents {
    /** The ID of the {@link Database database} that this page belongs to. */
    database_id: string
    /** The ID of the {@link Page page} that this page belongs to. */
    page_id: string
    workspace: true
}
export type ParentType = keyof Parents
export type Parent<T extends ParentType = ParentType> = NotionObj<Parents, T>

interface Users {
    /** Properties only present for non-bot users. */
    readonly person: {
        /** Email address of person. This is only present if an integration has user capabilities that allow access to email addresses. */
        readonly email: string
    }
    /** Properties only present for bot users. */
    readonly bot: {
        /** Information about who owns this bot. */
        readonly owner?:
            | { readonly type: 'workspace'; readonly workspace: true }
            | { readonly type: 'user'; readonly user: User<'person'> }
    }
}
export type UserType = keyof Users
export type User<T extends UserType = UserType> = NotionObj<
    Users,
    T,
    {
        readonly object: 'user'
        /** Unique identifier for this user. */
        id: string
        /** User's name, as displayed in Notion. */
        readonly name: string | null
        /** Chosen avatar image. */
        readonly avatar_url: string | null
    }
>

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
    column: {}
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
    divider: {}
    table_of_contents: {}
    breadcrumb: {}
    column_list: {}
    link_preview: { url: string }
    link_to_page:
        | { type: 'page_id'; page_id: string }
        | { type: 'database_id'; database_id: string }
    unsupported: {}
}
export type BlockType = keyof Blocks
export type Block<T extends BlockType = BlockType> = NotionObj<
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

interface RichTexts {
    text: {
        /** Text content. This field contains the actual content of your text and is probably the field you'll use most often. */
        content: string
        /** Any inline link in this text. See link objects. */
        link: { type?: 'url'; url: string } | null
    }
    mention: Mention
    equation: {
        /** The LaTeX string representing this inline equation. */ expression: string
    }
}
interface Annotations {
    /** Whether the text is bolded. */
    bold: boolean
    /** Whether the text is italicized. */
    italic: boolean
    /** Whether the text is struck through. */
    strikethrough: boolean
    /** Whether the text is underlined. */
    underline: boolean
    /** Whether the text is code style. */
    code: boolean
    /** Color of the text. */
    color:
        | 'default'
        | 'gray'
        | 'brown'
        | 'orange'
        | 'yellow'
        | 'green'
        | 'blue'
        | 'purple'
        | 'pink'
        | 'red'
        | 'gray_background'
        | 'brown_background'
        | 'orange_background'
        | 'yellow_background'
        | 'green_background'
        | 'blue_background'
        | 'purple_background'
        | 'pink_background'
        | 'red_background'
}
export type RichTextType = keyof RichTexts
export type RichText<T extends RichTextType = RichTextType> = NotionObj<
    RichTexts,
    T,
    {
        /** The plain text without annotations. */
        plain_text: string
        /** The URL of any link or internal Notion mention in this text, if any. */
        href: string | null
        /** All annotations that apply to this rich text. Annotations include colors and bold/italics/underline/strikethrough. */
        annotations: Annotations
    }
>

interface Mentions {
    user: User<'person'>
    page: { id: string }
    database: { id: string }
    date: Pages.Property<'date'>['date']
}
export type MentionType = keyof Mentions
export type Mention<T extends MentionType = MentionType> = NotionObj<
    Mentions,
    T
>

interface Files {
    external: {
        /** Link to the externally hosted content. */
        url: string
    }
    file: {
        /** Authenticated S3 URL to the file. The file URL will be valid for 1 hour but updated links can be requested if required. */
        url: string
        /** Date and time when this block was created. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
        expiry_time: string
    }
}
export type FileType = keyof Files
export type File<T extends FileType = FileType> = NotionObj<Files, T>

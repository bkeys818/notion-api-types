import { ExtractUnion, Emoji } from './global'
import { PageProperty } from './page-property'
import { DatabaseProperty } from './database-property'
import { RichText } from './rich-text'

export * from './block'
export * from './database-property'
export * from './page-property'
export * from './rich-text'
export * from './user'

export interface Database {
    object: 'database'
    /** Unique identifier for the database. */
    id: string
    /** Date and time when this database was created. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
    created_time: string
    /** Date and time when this database was updated. Formatted as an ISO 8601 date time string. */
    last_edited_time: string
    /** Name of the database as it appears in Notion. See {@link RichText rich text object} for a breakdown of the properties. */
    title: RichText[]
    /** Page icon. */
    icon: File | Emoji
    /** Page cover image. */
    cover: File<'external'>
    /**
     * Schema of properties for the database as they appear in Notion.
     *
     * `key` string The name of the property as it appears in Notion.
     *
     * `value` object A {@link DatabaseProperty Property object}.
     */
    properties: DatabaseProperty
    /** The parent of this page. */
    parent: Parent<'page_id' | 'workspace'>
    /** The URL of the Notion database. */
    url: string
}
export interface Page {
    object: 'page'
    /** Unique identifier of the page. */
    id: string
    /** Date and time when this page was created. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
    created_time: string
    /** Date and time when this page was updated. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
    last_edited_time: string
    /** The archived status of the page. */
    archived: boolean
    /** Page icon. */
    icon: File | Emoji
    /** Page cover image. */
    cover: File<'external'>
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
    properties: PageProperty
    /** The parent of this page. */
    parent: Parent
    /** The URL of the Notion page. */
    url: string
}

export type ParentType = AllParents['type']
export type Parent<T extends ParentType = ParentType> = ExtractUnion<
    AllParents,
    T
>
type AllParents =
    | {
          type: 'database_id'
          /** The ID of the {@link Database database} that this page belongs to. */
          database_id: string
      }
    | {
          type: 'page_id'
          /** The ID of the {@link Page page} that this page belongs to. */
          page_id: string
      }
    | { type: 'workspace'; workspace: string }

export type FileType = AllFiles['type']
export type File<T extends FileType = FileType> = ExtractUnion<AllFiles, T>
type AllFiles =
    | {
          type: 'external'
          external: {
              /** Link to the externally hosted content. */
              url: string
          }
      }
    | {
          type: 'file'
          file: {
              /** Authenticated S3 URL to the file. The file URL will be valid for 1 hour but updated links can be requested if required. */
              url: string
              /** Date and time when this block was created. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
              expiry_time: string
          }
      }

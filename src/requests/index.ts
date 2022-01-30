import { NotionResponse } from '..'
import * as Blocks from './blocks'
import * as Parents from './parents'
import * as RichTexts from './rich-texts'
import * as Mentions from './mentions'
import * as Files from './files'
export {
    PageProperty,
    DatabaseProperty,
    PageProperties,
    DatabaseProperties,
} from './properties'
export { Blocks, Parents, RichTexts, Mentions, Files }

export type User = Pick<NotionResponse.User, 'id'>

export type Block =
    | Blocks.Paragraph
    | Blocks.Heading1
    | Blocks.Heading2
    | Blocks.Heading3
    | Blocks.BulletedListItem
    | Blocks.NumberedListItem
    | Blocks.ToDo
    | Blocks.Toggle
    | Blocks.Code
    | Blocks.Embed
    | Blocks.Image
    | Blocks.Video
    | Blocks.File
    | Blocks.Pdf
    | Blocks.Bookmark
    | Blocks.Callout
    | Blocks.Quote
    | Blocks.Equation
    | Blocks.Divider
    | Blocks.TableOfContents
    | Blocks.Breadcrumb
    | Blocks.Column
    | Blocks.ColumnList
    | Blocks.SyncedBlock
    | Blocks.Template
    | Blocks.LinkToPage
    | Blocks.Table
    | Blocks.TableRow

export type Parent = Parents.DatabaseId | Parents.PageId

export type RichText = RichTexts.Text | RichTexts.Mention | RichTexts.Equation

export type Mention =
    | Mentions.User
    | Mentions.Page
    | Mentions.Database
    | Mentions.Date

export type File = Files.External | Files.File

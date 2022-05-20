import type { Blocks, Block } from '../../types/responses'
import { anyRichText, anyFile } from '.'
import { notionObject, emoji } from './global.test'
import { index, AllUnionUsed } from '../utils'

const blockBase: Omit<Block, 'type'> = {
    ...notionObject,
    has_children: ([true, false] as const)[index],
    object: 'block',
}
const childlessBase: Omit<Blocks.Bookmark, 'type' | 'bookmark'> = {
    ...blockBase,
    has_children: false,
}

const rich_text: Blocks.Heading1['heading_1']['rich_text'] = [anyRichText]
const caption: Blocks.Image['image']['caption'] = [anyRichText]
const color: Blocks.Heading1['heading_1']['color'] = 'default'

const paragraph: Blocks.Paragraph = {
    ...blockBase,
    paragraph: { rich_text, color },
    type: 'paragraph',
}

const heading1: Blocks.Heading1 = {
    ...blockBase,
    heading_1: { rich_text, color },
    type: 'heading_1',
}

const heading2: Blocks.Heading2 = {
    ...blockBase,
    heading_2: { rich_text, color },
    type: 'heading_2',
}

const heading3: Blocks.Heading3 = {
    ...blockBase,
    heading_3: { rich_text, color },
    type: 'heading_3',
}

const bulletedListItem: Blocks.BulletedListItem = {
    ...blockBase,
    bulleted_list_item: { rich_text, color },
    type: 'bulleted_list_item',
}

const numberedListItem: Blocks.NumberedListItem = {
    ...blockBase,
    numbered_list_item: { rich_text, color },
    type: 'numbered_list_item',
}

const toDo: Blocks.ToDo = {
    ...blockBase,
    to_do: { checked: true, rich_text, color },
    type: 'to_do',
}

const toggle: Blocks.Toggle = {
    ...blockBase,
    toggle: { rich_text, color },
    type: 'toggle',
}

const code: Blocks.Code = {
    ...childlessBase,
    code: { rich_text, caption, language: 'typescript' },
    type: 'code',
}

const bulletedListItem1: Blocks.BulletedListItem = {
    ...blockBase,
    bulleted_list_item: { rich_text, color },
    type: 'bulleted_list_item',
}

const childPage: Blocks.ChildPage = {
    ...blockBase,
    child_page: { title: 'child page' },
    type: 'child_page',
}

const childDatabase: Blocks.ChildDatabase = {
    ...blockBase,
    child_database: { title: 'database page' },
    type: 'child_database',
}

const embed: Blocks.Embed = {
    ...childlessBase,
    embed: { url: 'some_url', caption },
    type: 'embed',
}

const bookmark: Blocks.Bookmark = {
    ...childlessBase,
    bookmark: { url: 'some_url', caption },
    type: 'bookmark',
}

const image: Blocks.Image = {
    ...childlessBase,
    image: { ...anyFile, caption },
    type: 'image',
}

const video: Blocks.Video = {
    ...childlessBase,
    video: { ...anyFile, caption },
    type: 'video',
}

const file: Blocks.File = {
    ...childlessBase,
    file: { ...anyFile, caption },
    type: 'file',
}

const pdf: Blocks.Pdf = {
    ...childlessBase,
    pdf: { ...anyFile, caption },
    type: 'pdf',
}

const callout: Blocks.Callout = {
    ...blockBase,
    callout: { icon: emoji, rich_text, color },
    type: 'callout',
}

const quote: Blocks.Quote = {
    ...blockBase,
    quote: { rich_text, color },
    type: 'quote',
}

const equation: Blocks.Equation = {
    ...childlessBase,
    equation: { expression: 'e=mc^2' },
    type: 'equation',
}

const divider: Blocks.Divider = {
    ...childlessBase,
    divider: {},
    type: 'divider',
}

const tableOfContents: Blocks.TableOfContents = {
    ...childlessBase,
    table_of_contents: { color },
    type: 'table_of_contents',
}

const breadcrumb: Blocks.Breadcrumb = {
    ...childlessBase,
    breadcrumb: {},
    type: 'breadcrumb',
}

const column: Blocks.Column = {
    ...blockBase,
    column: {},
    type: 'column',
}

const columnList: Blocks.ColumnList = {
    ...blockBase,
    column_list: {},
    type: 'column_list',
}

const linkPreview: Blocks.LinkPreview = {
    ...blockBase,
    link_preview: { url: 'http://localhost:5050' },
    type: 'link_preview',
}

const syncedBlockSyncedFroms: Blocks.SyncedBlock['synced_block']['synced_from'][] =
    [null, { block_id: 'random_block_id', type: 'block_id' }]
const syncedBlock: Blocks.SyncedBlock = {
    ...blockBase,
    synced_block: { synced_from: syncedBlockSyncedFroms[index] },
    type: 'synced_block',
}

const template: Blocks.Template = {
    ...blockBase,
    template: { rich_text },
    type: 'template',
}

const linkToPages: Blocks.LinkToPage['link_to_page'][] = [
    { database_id: 'random_database_id', type: 'database_id' },
    { page_id: 'random_page_id', type: 'page_id' },
]
const linkToPage: Blocks.LinkToPage = {
    ...childlessBase,
    link_to_page: linkToPages[index],
    type: 'link_to_page',
}

const table: Blocks.Table = {
    ...blockBase,
    table: { has_column_header: false, has_row_header: false, table_width: 1 },
    type: 'table',
}

const tableRow: Blocks.TableRow = {
    ...blockBase,
    table_row: { cells: [[anyRichText]] },
    type: 'table_row',
}

const unsupported: Blocks.Unsupported = {
    ...childlessBase,
    unsupported: {},
    type: 'unsupported',
}

const allBlocks = [
    paragraph,
    heading1,
    heading2,
    heading3,
    bulletedListItem,
    numberedListItem,
    toDo,
    toggle,
    code,
    bulletedListItem1,
    childPage,
    childDatabase,
    embed,
    bookmark,
    image,
    video,
    file,
    pdf,
    callout,
    quote,
    equation,
    divider,
    tableOfContents,
    breadcrumb,
    column,
    columnList,
    linkPreview,
    syncedBlock,
    template,
    linkToPage,
    table,
    tableRow,
    unsupported,
]
const _: AllUnionUsed<Block, typeof allBlocks[number]> = undefined
const anyBlocks: Block = allBlocks[index]
export default anyBlocks

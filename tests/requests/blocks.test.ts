import type { Blocks, Block } from '../../types/requests'
import { anyRichText, anyFile } from '.'
import { index, AllUnionUsed } from '../utils'

export const text: Blocks.Heading1['heading_1']['text'] = [anyRichText]
export const caption: Blocks.Image['image']['caption'] = [anyRichText]
export const children: Block[] = [{ paragraph: { text } }]

export const paragraph: Blocks.Paragraph = { paragraph: { text, children } }

export const heading1: Blocks.Heading1 = { heading_1: { text, children } }

export const heading2: Blocks.Heading2 = { heading_2: { text, children } }

export const heading3: Blocks.Heading3 = { heading_3: { text, children } }

export const bulletedListItem: Blocks.BulletedListItem = {
    bulleted_list_item: { text, children },
}

export const numberedListItem: Blocks.NumberedListItem = {
    numbered_list_item: { text, children },
}

export const toDo: Blocks.ToDo = { to_do: { text, checked: true, children } }

export const toggle: Blocks.Toggle = { toggle: { text, children } }

export const code: Blocks.Code = {
    code: { text, caption, language: 'typescript' },
}

export const embed: Blocks.Embed = {
    embed: { url: 'http://localhost:5050', caption },
}

export const image: Blocks.Image = { image: { ...anyFile, caption } }

export const video: Blocks.Video = { video: { ...anyFile, caption } }

export const file: Blocks.File = { file: { ...anyFile, caption } }

export const pdf: Blocks.Pdf = { pdf: { ...anyFile, caption } }

export const bookmark: Blocks.Bookmark = {
    bookmark: { url: 'http://localhost:5050', caption },
}

export const callout: Blocks.Callout = { callout: { text, children } }

export const quote: Blocks.Quote = { quote: { text, children } }

export const equation: Blocks.Equation = { equation: { expression: 'e=mc^2' } }

export const divider: Blocks.Divider = { divider: {} }

export const tableOfContents: Blocks.TableOfContents = { table_of_contents: {} }

export const breadcrumb: Blocks.Breadcrumb = { breadcrumb: {} }

export const column: Blocks.Column = { column: { children: [paragraph] } }

export const columnList: Blocks.ColumnList = {
    column_list: { children: [column, column] },
}

export const syncedBlock: Blocks.SyncedBlock = {
    synced_block: {
        synced_from: [null, { block_id: 'random_block_id' }][index],
    },
}

export const template: Blocks.Template = { template: { text, children } }

export const linkToPage: Blocks.LinkToPage = {
    link_to_page: [
        { database_id: 'random_database_id' },
        { page_id: 'random_page_id' },
    ][index],
}

export const tableRow: Blocks.TableRow = { table_row: { cells: [text] } }

export const table: Blocks.Table = {
    table: { table_width: 2, children: [tableRow, tableRow] },
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
    embed,
    image,
    video,
    file,
    pdf,
    bookmark,
    callout,
    quote,
    equation,
    divider,
    tableOfContents,
    breadcrumb,
    column,
    columnList,
    syncedBlock,
    template,
    linkToPage,
    tableRow,
    table,
]
const _: AllUnionUsed<Block, typeof allBlocks[number]> = undefined
const anyBlock: Block = allBlocks[index]
export default anyBlock

import type { Blocks } from '../../types/requests'
import { richTexts } from '.'

const text = (value: string) => [richTexts.custom(value)]
const children = [{ paragraph: { text: text('child block') } }]

const urls = {
    githubRepo: 'https://github.com/bkeys818/notion-api-types',
    exampleFiles: {
        png: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png',
        mp4: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4',
        doc: 'https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.doc',
        pdf: 'https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf',
    },
}

export const paragraph: Blocks.Paragraph = {
    paragraph: { text: text('paragraph'), children },
}

export const heading1: Blocks.Heading1 = {
    heading_1: { text: text('heading 1'), children },
}

export const heading2: Blocks.Heading2 = {
    heading_2: { text: text('heading 2'), children },
}

export const heading3: Blocks.Heading3 = {
    heading_3: { text: text('heading 3'), children },
}

export const bulletedListItem: Blocks.BulletedListItem = {
    bulleted_list_item: { text: text('bulleted list item'), children },
}

export const numberedListItem: Blocks.NumberedListItem = {
    numbered_list_item: { text: text('numbered list item'), children },
}

export const toDo: Blocks.ToDo = {
    to_do: { text: text('to do'), checked: true, children },
}

export const toggle: Blocks.Toggle = {
    toggle: { text: text('toggle'), children },
}

export const embed: Blocks.Embed = {
    embed: { url: urls.githubRepo, caption: text('embed') },
}

export const image: Blocks.Image = {
    image: { external: { url: urls.exampleFiles.png }, caption: text('image') },
}

export const video: Blocks.Video = {
    video: { external: { url: urls.exampleFiles.mp4 }, caption: text('video') },
}

export const file: Blocks.File = {
    file: { external: { url: urls.exampleFiles.doc }, caption: text('file') },
}

export const pdf: Blocks.Pdf = {
    pdf: { external: { url: urls.exampleFiles.pdf }, caption: text('pdf') },
}

export const bookmark: Blocks.Bookmark = {
    bookmark: { url: urls.githubRepo, caption: text('bookmark') },
}

export const callout: Blocks.Callout = {
    callout: { text: text('callout'), children },
}

export const quote: Blocks.Quote = { quote: { text: text('quote'), children } }

export const equation: Blocks.Equation = { equation: { expression: 'e=mc^2' } }

export const divider: Blocks.Divider = { divider: {} }

export const tableOfContents: Blocks.TableOfContents = { table_of_contents: {} }

export const breadcrumb: Blocks.Breadcrumb = { breadcrumb: {} }

const column: Blocks.Column = { column: { children: [paragraph] } }

export const columnList: Blocks.ColumnList = {
    column_list: { children: [column, column] },
}

export const syncedBlock = (blockId?: string): Blocks.SyncedBlock =>
    blockId
        ? { synced_block: { synced_from: { block_id: blockId } } }
        : { synced_block: { synced_from: null, children } }

export const template: Blocks.Template = {
    template: { text: text('template'), children },
}

export const linkToPage = (databaseId: string): Blocks.LinkToPage => ({
    link_to_page: { database_id: databaseId },
})

const tableRow: Blocks.TableRow = {
    table_row: {
        cells: [text('cell'), text('cell')],
    },
}

export const table: Blocks.Table = {
    table: { table_width: 2, children: [tableRow, tableRow] },
}

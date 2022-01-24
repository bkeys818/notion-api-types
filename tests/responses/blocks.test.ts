import type { Blocks } from '../../types/responses'
import richTexts from './rich-texts.test'

const heading1: Blocks.Heading1 = {
    archived: false,
    created_time: 'some_created_time',
    has_children: false,
    heading_1: { text: richTexts },
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'heading_1',
}

const heading2: Blocks.Heading2 = {
    archived: false,
    created_time: 'some_created_time',
    has_children: false,
    heading_2: { text: richTexts },
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'heading_2',
}

const heading3: Blocks.Heading3 = {
    archived: false,
    created_time: 'some_created_time',
    has_children: false,
    heading_3: { text: richTexts },
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'heading_3',
}

const bulletedListItem: Blocks.BulletedListItem = {
    archived: false,
    bulleted_list_item: { text: richTexts },
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'bulleted_list_item',
}

const numberedListItem: Blocks.NumberedListItem = {
    archived: false,
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    numbered_list_item: { text: richTexts },
    object: 'block',
    type: 'numbered_list_item',
}

const toDo: Blocks.ToDo = {
    archived: false,
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    to_do: { checked: true, text: richTexts },
    type: 'to_do',
}

const bulletedListItem1: Blocks.BulletedListItem = {
    archived: false,
    bulleted_list_item: { text: richTexts },
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'bulleted_list_item',
}

const childPage: Blocks.ChildPage = {
    archived: false,
    child_page: { title: 'child page' },
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'child_page',
}

const childDatabase: Blocks.ChildDatabase = {
    archived: false,
    child_database: { title: 'database page' },
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'child_database',
}

const bookmark: Blocks.Bookmark = {
    archived: false,
    bookmark: { caption: richTexts, url: 'some_url' },
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'bookmark',
}

const image: Blocks.Image = {
    archived: false,
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    image: {
        caption: richTexts,
        external: { url: 'some_url' },
        type: 'external',
    },
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'image',
}

const video: Blocks.Video = {
    archived: false,
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'video',
    video: {
        caption: richTexts,
        external: { url: 'some_url' },
        type: 'external',
    },
}

const file: Blocks.File = {
    archived: false,
    created_time: 'some_created_time',
    file: {
        caption: richTexts,
        external: { url: 'some_url' },
        type: 'external',
    },
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'file',
}

const pdf: Blocks.Pdf = {
    archived: false,
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    pdf: {
        caption: richTexts,
        external: { url: 'some_url' },
        type: 'external',
    },
    type: 'pdf',
}

const callout: Blocks.Callout = {
    archived: false,
    callout: { icon: { emoji: '🛠', type: 'emoji' }, text: richTexts },
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'callout',
}

const quote: Blocks.Quote = {
    archived: false,
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    quote: { text: richTexts },
    type: 'quote',
}

const equation: Blocks.Equation = {
    archived: false,
    created_time: 'some_created_time',
    equation: { expression: 'e = mc^2' },
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'equation',
}

const tableOfContents: Blocks.TableOfContents = {
    archived: false,
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    table_of_contents: {},
    type: 'table_of_contents',
}

const breadcrumb: Blocks.Breadcrumb = {
    archived: false,
    breadcrumb: {},
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'breadcrumb',
}

const columnList: Blocks.ColumnList = {
    archived: false,
    column_list: {},
    created_time: 'some_created_time',
    has_children: true,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'column_list',
}

const linkPreview: Blocks.LinkPreview = {
    archived: false,
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    link_preview: { url: 'some_url' },
    object: 'block',
    type: 'link_preview',
}

const syncedBlock: Blocks.SyncedBlock = {
    archived: false,
    created_time: 'some_created_time',
    has_children: true,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    synced_block: { synced_from: null },
    type: 'synced_block',
}

const syncedBlock1: Blocks.SyncedBlock = {
    archived: false,
    created_time: 'some_created_time',
    has_children: true,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    synced_block: {
        synced_from: { block_id: 'some_block_id', type: 'block_id' },
    },
    type: 'synced_block',
}

const template: Blocks.Template = {
    archived: false,
    created_time: 'some_created_time',
    has_children: true,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    template: { text: richTexts },
    type: 'template',
}

const linkToPage: Blocks.LinkToPage = {
    archived: false,
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    link_to_page: { database_id: 'some_database_id', type: 'database_id' },
    object: 'block',
    type: 'link_to_page',
}

const table: Blocks.Table = {
    archived: false,
    created_time: 'some_created_time',
    has_children: true,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    table: { has_column_header: false, has_row_header: false, table_width: 1 },
    type: 'table',
}

const column: Blocks.Column = {
    archived: false,
    column: {},
    created_time: 'some_created_time',
    has_children: true,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    type: 'column',
}

const tableRow: Blocks.TableRow = {
    archived: false,
    created_time: 'some_created_time',
    has_children: false,
    id: 'some_id',
    last_edited_time: 'some_last_edited_time',
    object: 'block',
    table_row: { cells: [richTexts] },
    type: 'table_row',
}

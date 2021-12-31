import type { Blocks } from '..'
import richText from './rich-texts.test'

const paragraph: Blocks.Paragraph = {
    object: 'block',
    id: '198012e8-57e4-4962-97f4-1979ba813464',
    created_time: '2021-12-31T15:23:00.000Z',
    last_edited_time: '2021-12-31T15:26:00.000Z',
    has_children: true,
    archived: false,
    type: 'paragraph',
    paragraph: { text: [richText] },
}

const bulletedListItem: Blocks.BulletedListItem = {
    object: 'block',
    id: 'ff136785-29d6-4209-9756-1d5ccffcd6d0',
    created_time: '2021-12-31T15:25:00.000Z',
    last_edited_time: '2021-12-31T15:26:00.000Z',
    has_children: false,
    archived: false,
    type: 'bulleted_list_item',
    bulleted_list_item: { text: [richText] },
}

const numberedListItem: Blocks.NumberedListItem = {
    object: 'block',
    id: '4dd3d332-67f7-4610-ad3c-9764ebcfa31f',
    created_time: '2021-12-31T15:26:00.000Z',
    last_edited_time: '2021-12-31T15:26:00.000Z',
    has_children: false,
    archived: false,
    type: 'numbered_list_item',
    numbered_list_item: { text: [richText] },
}

const toggle: Blocks.Toggle = {
    object: 'block',
    id: 'af4d4d4e-3bf8-494a-97a7-e62a88e9b1b1',
    created_time: '2021-12-31T15:27:00.000Z',
    last_edited_time: '2021-12-31T15:27:00.000Z',
    has_children: true,
    archived: false,
    type: 'toggle',
    toggle: { text: [richText] },
}

const heading1: Blocks.Heading1 = {
    object: 'block',
    id: '6fabc996-4f90-4ef6-b59a-2f2a5a5cd4b6',
    created_time: '2021-12-31T15:27:00.000Z',
    last_edited_time: '2021-12-31T15:28:00.000Z',
    has_children: true,
    archived: false,
    type: 'heading_1',
    heading_1: { text: [richText] },
}

const heading2: Blocks.Heading2 = {
    object: 'block',
    id: 'c1eb8f40-1f9c-42ca-bc71-5c945155ebc7',
    created_time: '2021-12-31T15:28:00.000Z',
    last_edited_time: '2021-12-31T15:28:00.000Z',
    has_children: true,
    archived: false,
    type: 'heading_2',
    heading_2: { text: [richText] },
}

const heading3: Blocks.Heading3 = {
    object: 'block',
    id: '56828d24-cdcf-4a1f-98ed-d8e2a9383662',
    created_time: '2021-12-31T15:29:00.000Z',
    last_edited_time: '2021-12-31T15:29:00.000Z',
    has_children: false,
    archived: false,
    type: 'heading_3',
    heading_3: { text: [richText] },
}

const toDo: Blocks.ToDo = {
    object: 'block',
    id: 'dda38fb5-ef3f-4cac-bab9-2bc3f59d3b76',
    created_time: '2021-12-31T15:29:00.000Z',
    last_edited_time: '2021-12-31T15:31:00.000Z',
    has_children: true,
    archived: false,
    type: 'to_do',
    to_do: { text: [richText], checked: false },
}

const quote: Blocks.Quote = {
    object: 'block',
    id: 'ed4dc4db-2c23-4c79-929f-b4c676c10c28',
    created_time: '2021-12-31T15:31:00.000Z',
    last_edited_time: '2021-12-31T15:31:00.000Z',
    has_children: false,
    archived: false,
    type: 'quote',
    quote: { text: [richText] },
}

const callout: Blocks.Callout = {
    object: 'block',
    id: 'e6d64b3f-f3fa-4d8b-a800-82cb9d46e73d',
    created_time: '2021-12-31T15:31:00.000Z',
    last_edited_time: '2021-12-31T15:32:00.000Z',
    has_children: true,
    archived: false,
    type: 'callout',
    callout: { text: [richText], icon: { type: 'emoji', emoji: '💡' } },
}

const syncedBlockSource: Blocks.SyncedBlock = {
    object: 'block',
    id: 'eca06c60-84c1-448c-b048-316d877ecd4d',
    created_time: '2021-12-31T15:32:00.000Z',
    last_edited_time: '2021-12-31T15:32:00.000Z',
    has_children: true,
    archived: false,
    type: 'synced_block',
    synced_block: { synced_from: null },
}
const syncedBlock1: Blocks.SyncedBlock = {
    object: 'block',
    id: '7f0c2ac4-b20f-4042-9acc-6a66b398cadc',
    created_time: '2021-12-31T15:32:00.000Z',
    last_edited_time: '2021-12-31T15:32:00.000Z',
    has_children: true,
    archived: false,
    type: 'synced_block',
    synced_block: {
        synced_from: {
            type: 'block_id',
            block_id: 'eca06c60-84c1-448c-b048-316d877ecd4d',
        },
    },
}

const template: Blocks.Template = {
    object: 'block',
    id: 'b64de8b1-a276-406e-a530-d8d2f9231ce8',
    created_time: '2021-12-31T15:33:00.000Z',
    last_edited_time: '2021-12-31T15:34:00.000Z',
    has_children: true,
    archived: false,
    type: 'template',
    template: { text: [richText] },
}

const columnList: Blocks.ColumnList = {
    object: 'block',
    id: 'dd50340b-2003-40b4-a565-5b622278d39d',
    created_time: '2021-12-31T15:34:00.000Z',
    last_edited_time: '2021-12-31T15:35:00.000Z',
    has_children: true,
    archived: false,
    type: 'column_list',
    column_list: {},
}

const childPage: Blocks.ChildPage = {
    object: 'block',
    id: '2ad92748-5fc3-4642-8f6e-a9937506db5e',
    created_time: '2021-12-31T15:35:00.000Z',
    last_edited_time: '2021-12-31T15:35:00.000Z',
    has_children: false,
    archived: false,
    type: 'child_page',
    child_page: { title: 'empty child page' },
}

const childDatabase: Blocks.ChildDatabase = {
    object: 'block',
    id: '1f06babd-1bb0-4c0b-9d45-d7370f48907f',
    created_time: '2021-12-31T15:36:00.000Z',
    last_edited_time: '2021-12-31T15:36:00.000Z',
    has_children: false,
    archived: false,
    type: 'child_database',
    child_database: { title: 'child database' },
}

const embed: Blocks.Embed = {
    object: 'block',
    id: 'c8bdf1ca-a117-4769-afca-e18e42d2c423',
    created_time: '2021-12-31T15:38:00.000Z',
    last_edited_time: '2021-12-31T15:40:00.000Z',
    has_children: false,
    archived: false,
    type: 'embed',
    embed: {
        caption: [richText],
        url: 'https://open.spotify.com/playlist/7EwshuVdguEXDrZ2ZzwEBB',
    },
}

const imageExternal: Blocks.Image = {
    object: 'block',
    id: '02d90ebf-8477-4476-9177-089c5a808f57',
    created_time: '2021-12-31T15:52:00.000Z',
    last_edited_time: '2021-12-31T15:52:00.000Z',
    has_children: false,
    archived: false,
    type: 'image',
    image: {
        caption: [richText],
        type: 'external',
        external: { url: 'https://picsum.photos/300/200' },
    },
}
const imageInternal: Blocks.Image = {
    object: 'block',
    id: '3330703b-a5a0-4a1e-9452-d103041468b5',
    created_time: '2021-12-31T15:47:00.000Z',
    last_edited_time: '2021-12-31T15:47:00.000Z',
    has_children: false,
    archived: false,
    type: 'image',
    image: {
        caption: [richText],
        type: 'file',
        file: {
            url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bc18e9ce-5f25-4eb0-9a69-add2071cc496/Test_image.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211231T161851Z&X-Amz-Expires=3600&X-Amz-Signature=9a9129f27379c1fc21bde4f40364259d7fb45f5fb374f4a9b5d3c932eb2d6567&X-Amz-SignedHeaders=host&x-id=GetObject',
            expiry_time: '2021-12-31T17:18:51.198Z',
        },
    },
}

const video: Blocks.Video = {
    object: 'block',
    id: '8e296761-aab2-4f91-a2a5-f1a81100aa4d',
    created_time: '2021-12-31T15:48:00.000Z',
    last_edited_time: '2021-12-31T15:48:00.000Z',
    has_children: false,
    archived: false,
    type: 'video',
    video: {
        caption: [richText],
        type: 'external',
        external: {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        },
    },
}

const fileExternal: Blocks.File = {
    object: 'block',
    id: 'a6e7febe-6505-4042-994c-095fc693db28',
    created_time: '2021-12-31T15:54:00.000Z',
    last_edited_time: '2021-12-31T15:55:00.000Z',
    has_children: false,
    archived: false,
    type: 'file',
    file: {
        caption: [richText],
        type: 'external',
        external: {
            url: 'https://drive.google.com/file/d/0B1MVW1mFO2zmSnZKYlNmT3pjbFE',
        },
    },
}
const fileInternal: Blocks.File = {
    object: 'block',
    id: '0ad691b1-bf12-4322-828f-2815f98da2be',
    created_time: '2021-12-31T15:49:00.000Z',
    last_edited_time: '2021-12-31T15:53:00.000Z',
    has_children: false,
    archived: false,
    type: 'file',
    file: {
        caption: [richText],
        type: 'file',
        file: {
            url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/30dc12b0-0d34-4741-8339-c826a95aa90d/file.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211231T161851Z&X-Amz-Expires=3600&X-Amz-Signature=b96c7bfa3370cfd64da81c70842b784b465ca284954bce4d52dba6291a665f3a&X-Amz-SignedHeaders=host&x-id=GetObject',
            expiry_time: '2021-12-31T17:18:51.244Z',
        },
    },
}

const pdfExternal: Blocks.Pdf = {
    object: 'block',
    id: '81c8d88b-0dcf-4d19-bf33-0354e167fc06',
    created_time: '2021-12-31T15:56:00.000Z',
    last_edited_time: '2021-12-31T15:57:00.000Z',
    has_children: false,
    archived: false,
    type: 'pdf',
    pdf: {
        caption: [richText],
        type: 'external',
        external: {
            url: 'https://s2.q4cdn.com/498544986/files/doc_downloads/test.pdf',
        },
    },
}
const pdfInternal: Blocks.Pdf = {
    object: 'block',
    id: '6be95125-899c-476e-8f15-b442bbd0134f',
    created_time: '2021-12-31T15:57:00.000Z',
    last_edited_time: '2021-12-31T15:57:00.000Z',
    has_children: false,
    archived: false,
    type: 'pdf',
    pdf: {
        caption: [richText],
        type: 'file',
        file: {
            url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/44cc591d-7dd8-4ed5-871d-40d37a051520/test.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211231T161851Z&X-Amz-Expires=3600&X-Amz-Signature=536c6f3cfc9a85437b1e197ba76424e78a99363ab42cfef4e74fe67e505a70b4&X-Amz-SignedHeaders=host&x-id=GetObject',
            expiry_time: '2021-12-31T17:18:51.186Z',
        },
    },
}

const bookmark: Blocks.Bookmark = {
    object: 'block',
    id: '83a81127-5dfa-4150-b2ed-693e7a3d3325',
    created_time: '2021-12-31T16:02:00.000Z',
    last_edited_time: '2021-12-31T16:02:00.000Z',
    has_children: false,
    archived: false,
    type: 'bookmark',
    bookmark: {
        caption: [richText],
        url: 'https://developers.notion.com',
    },
}

const equation: Blocks.Equation = {
    object: 'block',
    id: '774e8443-c735-4bf7-a36d-ae7dad222f98',
    created_time: '2021-12-31T16:03:00.000Z',
    last_edited_time: '2021-12-31T16:05:00.000Z',
    has_children: false,
    archived: false,
    type: 'equation',
    equation: {
        expression:
            '|x| = \\begin{cases} x, &\\quad x \\geq 0 \\\\ -x, &\\quad x <0 \\end{cases}',
    },
}

const divider: Blocks.Divider = {
    object: 'block',
    id: '978611eb-a9e9-4cbd-a2c6-b05f03cb3970',
    created_time: '2021-12-31T16:06:00.000Z',
    last_edited_time: '2021-12-31T16:06:00.000Z',
    has_children: false,
    archived: false,
    type: 'divider',
    divider: {},
}

const tableOfContents: Blocks.TableOfContents = {
    object: 'block',
    id: '50a523f5-c25d-4617-ba0b-e803cf1f401e',
    created_time: '2021-12-31T16:06:00.000Z',
    last_edited_time: '2021-12-31T16:06:00.000Z',
    has_children: false,
    archived: false,
    type: 'table_of_contents',
    table_of_contents: {},
}

const breadcrumb: Blocks.Breadcrumb = {
    object: 'block',
    id: '97776b04-57c7-45c9-ae2e-d6a21d8250e9',
    created_time: '2021-12-31T16:06:00.000Z',
    last_edited_time: '2021-12-31T16:06:00.000Z',
    has_children: false,
    archived: false,
    type: 'breadcrumb',
    breadcrumb: {},
}

const linkToPage: Blocks.LinkToPage = {
    object: 'block',
    id: '5ac69105-ed2f-447c-9e1e-22b0748fa5e3',
    created_time: '2021-12-31T16:08:00.000Z',
    last_edited_time: '2021-12-31T16:08:00.000Z',
    has_children: false,
    archived: false,
    type: 'link_to_page',
    link_to_page: {
        type: 'page_id',
        page_id: '003bd3fd-67e0-4c56-bca4-48bc7575f49e',
    },
}
const linkToDatabase: Blocks.LinkToPage = {
    object: 'block',
    id: 'c64291c3-4d36-45ae-b6c8-14a9f7bed2b8',
    created_time: '2021-12-31T16:08:00.000Z',
    last_edited_time: '2021-12-31T16:08:00.000Z',
    has_children: false,
    archived: false,
    type: 'link_to_page',
    link_to_page: {
        type: 'database_id',
        database_id: '1d05903f-7b76-465a-b4f0-feb577927e8f',
    },
}

const linkPreview: Blocks.LinkPreview = {
    object: 'block',
    id: '3154d54c-23ee-4c48-a7d4-c137c6be907f',
    created_time: '2021-12-31T16:18:00.000Z',
    last_edited_time: '2021-12-31T16:18:00.000Z',
    has_children: false,
    archived: false,
    type: 'link_preview',
    link_preview: {
        url: 'https://github.com/bkeys818/notion-api-types',
    },
}

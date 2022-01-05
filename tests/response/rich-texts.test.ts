import type { RichText } from '../../types/response'
import { person } from './users.test'

const colors: RichText['annotations']['color'][] = [
    'default',
    'gray',
    'brown',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'pink',
    'red',
    'gray_background',
    'brown_background',
    'orange_background',
    'yellow_background',
    'green_background',
    'blue_background',
    'purple_background',
    'pink_background',
    'red_background',
]

const annotations: RichText['annotations'][] = [
    {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: colors[0],
    },
    {
        bold: true,
        italic: true,
        strikethrough: true,
        underline: true,
        code: true,
        color: colors[0],
    },
]

const textBasic: RichText<'text'> = {
    type: 'text',
    text: { content: 'hello world!', link: null },
    annotations: annotations[0],
    plain_text: 'default',
    href: null,
}
const textLink: RichText<'text'> = {
    type: 'text',
    text: { content: 'hello world!', link: { url: 'http://localhost:8080' } },
    annotations: annotations[0],
    plain_text: 'link',
    href: 'http://localhost:8080',
}

const equation: RichText<'equation'> = {
    type: 'equation',
    equation: { expression: 'E = mc^2' },
    annotations: annotations[0],
    plain_text: 'E = mc^2',
    href: null,
}

const mentionUser: RichText<'mention'> = {
    type: 'mention',
    mention: { type: 'user', user: person },
    annotations: annotations[0],
    plain_text: '@Ben Keys',
    href: null,
}
const mentionPage: RichText<'mention'> = {
    type: 'mention',
    mention: {
        type: 'page',
        page: {
            id: '003bd3fd-67e0-4c56-bca4-48bc7575f49e',
        },
    },
    annotations: annotations[0],
    plain_text: 'basic title',
    href: 'https://www.notion.so/003bd3fd67e04c56bca448bc7575f49e',
}
const mentionDatabase: RichText<'mention'> = {
    type: 'mention',
    mention: {
        type: 'database',
        database: {
            id: '1d05903f-7b76-465a-b4f0-feb577927e8f',
        },
    },
    annotations: annotations[0],
    plain_text: 'Database For Testing',
    href: 'https://www.notion.so/1d05903f7b76465ab4f0feb577927e8f',
}
const mentionDate: RichText<'mention'> = {
    type: 'mention',
    mention: {
        type: 'date',
        date: {
            start: '2000-01-01',
            end: null,
            time_zone: null,
        },
    },
    annotations: annotations[0],
    plain_text: '2000-01-01 → ',
    href: null,
}

const richText: RichText = [
    textBasic,
    textLink,
    equation,
    mentionUser,
    mentionPage,
    mentionDatabase,
    mentionDate,
][0]
export default richText

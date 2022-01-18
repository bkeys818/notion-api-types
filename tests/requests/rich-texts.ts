export * from './rich-texts.test'
import type { RichTexts } from '../../types/requests'
import { mentions } from '.'

export const allText: RichTexts.Text[] = [
    { text: { content: 'hello ' }, annotations: { color: 'blue_background' } },
    { text: { content: 'world! ' }, annotations: { underline: true } },
    { text: { content: 'hello ' }, annotations: { bold: true } },
    { text: { content: 'world! ', link: { url: 'http://localhost:8080' } } },
    {
        text: { content: 'hello ' },
        annotations: { strikethrough: true, color: 'brown' },
    },
    { text: { content: 'world! ' }, annotations: { code: true } },
]

export const allMentions = (
    ...args: [
        ...Parameters<typeof mentions.page>,
        ...Parameters<typeof mentions.database>
        // ...Parameters<typeof mentions.user>
    ]
): RichTexts.Mention[] => [
    { mention: mentions.page(args[0]) },
    { mention: mentions.database(args[1]) },
    // { mention: mentions.user(args[2]) },
    { mention: mentions.date },
]

export const custom = (value: string): RichTexts.Text => ({
    text: { content: value },
})

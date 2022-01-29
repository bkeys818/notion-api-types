import type { RichTexts, RichText } from '../../types/responses'
import { anyMention } from '.'
import { index, AllUnionUsed } from '../utils'

const annotations: RichText['annotations'] = {
    bold: false,
    code: false,
    color: 'default',
    italic: false,
    strikethrough: false,
    underline: false,
}

const textLinks: RichTexts.Text['text']['link'][] = [
    null,
    { url: 'http://localhost:5050', type: 'url' },
]
export const text: RichTexts.Text = {
    annotations: annotations,
    href: null,
    plain_text: 'hello world!',
    text: { content: 'hello world!', link: textLinks[index] },
    type: 'text',
}

export const mention: RichTexts.Mention = {
    annotations: annotations,
    href: null,
    mention: anyMention,
    plain_text: '@Ben Keys (test account)',
    type: 'mention',
}

export const equation: RichTexts.Equation = {
    annotations: annotations,
    equation: { expression: 'e=mc^2' },
    href: null,
    plain_text: 'e=mc^2',
    type: 'equation',
}

const allRichTexts = [text, mention, equation]
const _: AllUnionUsed<RichText, typeof allRichTexts[number]> = undefined
const anyRichText: RichText = allRichTexts[index]
export default anyRichText

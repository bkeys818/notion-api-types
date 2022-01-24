import type { RichTexts, RichText } from '../../types/responses'
import mentions from './mentions.test'

const annotations: RichText['annotations'] = {
    bold: false,
    code: false,
    color: 'blue_background',
    italic: false,
    strikethrough: false,
    underline: false,
}

const text: RichTexts.Text = {
    annotations: annotations,
    href: null,
    plain_text: 'hello ',
    text: { content: 'hello ', link: null },
    type: 'text',
}

const mention: RichTexts.Mention = {
    annotations: annotations,
    href: null,
    mention: mentions[0],
    plain_text: '@Ben Keys (test account)',
    type: 'mention',
}

const equation: RichTexts.Equation = {
    annotations: annotations,
    equation: { expression: 'e=mc^2' },
    href: null,
    plain_text: 'e=mc^2',
    type: 'equation',
}

const richTexts: RichText[] = [text, mention, equation]
export default richTexts

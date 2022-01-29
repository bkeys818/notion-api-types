import type { RichTexts, RichText } from '../../types/requests'
import { anyMention } from '.'
import { index, AllUnionUsed } from '../utils'

const link: RichTexts.Text['text']['link'] = [
    undefined,
    { url: 'http://localhost:5050' },
][index]
export const text: RichTexts.Text = { text: { content: 'hello world!', link } }

export const mention: RichTexts.Mention = { mention: anyMention }

export const equation: RichTexts.Equation = {
    equation: { expression: 'e=mc^2' },
}

const allRichTexts = [text, mention, equation]
const _: AllUnionUsed<RichText, typeof allRichTexts[number]> = undefined
const anyRichText: RichText = allRichTexts[index]
export default anyRichText

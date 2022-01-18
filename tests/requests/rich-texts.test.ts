import type { RichTexts } from '../../types/requests'
import { mentions } from '.'

export const text: RichTexts.Text = { text: { content: 'hello world!' } }

export const mention: RichTexts.Mention = { mention: mentions.date }

export const equation: RichTexts.Equation = {
    equation: { expression: 'e=mc^2' },
}

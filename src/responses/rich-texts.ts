import { NotionResponse } from '..'
import { Color } from './global'

interface RichTextBase {
    /** The plain text without annotations. */
    plain_text: string
    /** The URL of any link or internal Notion mention in this text, if any. */
    href: string | null
    /** All annotations that apply to this rich text. Annotations include colors and bold/italics/underline/strikethrough. */
    annotations: Annotations
    /** Type of this rich text object. */
    type: string
}

export interface Text extends RichTextBase {
    type: 'text'
    text: {
        /** Text content. This field contains the actual content of your text and is probably the field you'll use most often. */
        content: string
        /** Any inline link in this text. See link objects. */
        link: { type?: 'url'; url: string } | null
    }
}
export interface Mention extends RichTextBase {
    type: 'mention'
    mention: NotionResponse.Mention
}
export interface Equation extends RichTextBase {
    type: 'equation'
    equation: {
        /** The LaTeX string representing this inline equation. */ expression: string
    }
}

interface Annotations {
    /** Whether the text is bolded. */
    bold: boolean
    /** Whether the text is italicized. */
    italic: boolean
    /** Whether the text is struck through. */
    strikethrough: boolean
    /** Whether the text is underlined. */
    underline: boolean
    /** Whether the text is code style. */
    code: boolean
    /** Color of the text. */
    color: Color
}

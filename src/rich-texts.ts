import * as Mentions from './mentions'

interface RichTextBase {
    /** The plain text without annotations. */
    plain_text: string
    /** The URL of any link or internal Notion mention in this text, if any. */
    href: string | null
    /** All annotations that apply to this rich text. Annotations include colors and bold/italics/underline/strikethrough. */
    annotations: Annotations
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
    mention: Mentions.Any
}
export interface Equation extends RichTextBase {
    type: 'equation'
    equation: {
        /** The LaTeX string representing this inline equation. */ expression: string
    }
}

export type Any = Text | Mention | Equation

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
    color:
        | 'default'
        | 'gray'
        | 'brown'
        | 'orange'
        | 'yellow'
        | 'green'
        | 'blue'
        | 'purple'
        | 'pink'
        | 'red'
        | 'gray_background'
        | 'brown_background'
        | 'orange_background'
        | 'yellow_background'
        | 'green_background'
        | 'blue_background'
        | 'purple_background'
        | 'pink_background'
        | 'red_background'
}

import { ExtractUnion } from './global'
import { User, PageProperty } from '.'

export type RichTextType = AllRichTexts['type']
export type RichText<T extends RichTextType = RichTextType> = ExtractUnion<
    AllRichTexts,
    T
>
type AllRichTexts = {
    /** The plain text without annotations. */
    plain_text: string
    /** The URL of any link or internal Notion mention in this text, if any. */
    href: string | null
    /** All annotations that apply to this rich text. Annotations include colors and bold/italics/underline/strikethrough. */
    annotations: Annotations
} & (
    | {
          type: 'text'
          text: {
              /** Text content. This field contains the actual content of your text and is probably the field you'll use most often. */
              content: string
              /** Any inline link in this text. See link objects. */
              link: { type: 'url'; url: string } | null
          }
      }
    | { type: 'mention'; mention: Mention }
    | {
          type: 'equation'
          equation: {
              /** The LaTeX string representing this inline equation. */ expression: string
          }
      }
)

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
    /** Color of the text. Possible values are: "default", "gray", "brown", "orange", "yellow", "green", "blue", "purple", "pink", "red", "gray_background", "brown_background", "orange_background", "yellow_background", "green_background", "blue_background", "purple_background", "pink_background", "red_background". */
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

export type MentionType = AllMentions['type']
export type Mention<T extends MentionType = MentionType> = ExtractUnion<
    AllMentions,
    T
>
type AllMentions =
    | { type: 'user'; user: User<'person'> }
    | { type: 'page'; page: { id: string } }
    | { type: 'database'; database: { id: string } }
    | { type: 'date'; date: PageProperty<'date'> }
    | {
          type: 'link_preview'
          link_preview: {
              /** The originally pasted url used to create the mention */
              url: string
          }
      }

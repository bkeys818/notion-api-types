import { NotionResponse, NotionRequest } from '..'
import { PartialPick } from './utils'

interface RichTextBase {
    annotations?: Partial<NotionResponse.RichText['annotations']>
    /** Type of this rich text object. */
    type?: string
}

export interface Text extends RichTextBase {
    type?: 'text'
    text: PartialPick<NotionResponse.RichTexts.Text['text'], 'link'>
}
export interface Mention extends RichTextBase {
    type?: 'mention'
    mention: NotionRequest.Mention
}
export interface Equation extends RichTextBase {
    type?: 'equation'
    equation: {
        /** The LaTeX string representing this inline equation. */ expression: string
    }
}

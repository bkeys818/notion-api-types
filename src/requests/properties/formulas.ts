import { Formulas as ResponseFormulas } from '../../responses/properties'
import { PartialPick } from '../utils'
import { NotionDate } from '../global'

export type String = PartialPick<ResponseFormulas.String, 'type'>
export type Number = PartialPick<ResponseFormulas.Number, 'type'>
export type Boolean = PartialPick<ResponseFormulas.Boolean, 'type'>

interface FormulaBase {
    /** The type of the formula result */
    type: string
}

export interface Date extends FormulaBase {
    type: 'date'
    date: NotionDate | null
}

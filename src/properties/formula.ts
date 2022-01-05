import { NotionObject } from '../utils'
import { NotionDate } from '../global'

interface Formulas {
    string: string | null
    number: number | null
    boolean: boolean
    date: NotionDate | null
}
export type FormulaType = keyof Formulas
export type Formula<T extends FormulaType = FormulaType> = NotionObject<
    Formulas,
    T
>

import { NotionDate } from '../global'

interface FormulaBase {
    /** The type of the formula result */
    type: string
}

export interface String extends FormulaBase {
    type: 'string'
    string: string | null
}
export interface Number extends FormulaBase {
    type: 'number'
    number: number | null
}
export interface Boolean extends FormulaBase {
    type: 'boolean'
    boolean: boolean
}
export interface Date extends FormulaBase {
    type: 'date'
    date: NotionDate | null
}

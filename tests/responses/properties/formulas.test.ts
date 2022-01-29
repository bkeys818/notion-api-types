import type { Formulas, Formula } from '../../../types/responses/properties'
import { notionDate } from '../global.test'
import { index, AllUnionUsed } from '../../utils'

export const string: Formulas.String = {
    type: 'string',
    string: 'hello world!',
}

export const number: Formulas.Number = {
    type: 'number',
    number: 0,
}

export const boolean: Formulas.Boolean = {
    type: 'boolean',
    boolean: true,
}

export const date: Formulas.Date = {
    type: 'date',
    date: notionDate,
}

const allFormulas = [string, number, boolean, date]
const _: AllUnionUsed<Formula, typeof allFormulas[number]> = undefined
const anyFormulas: Formula = allFormulas[index]
export default anyFormulas

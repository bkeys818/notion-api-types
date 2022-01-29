import type { Rollups, Rollup } from '../../../types/responses/properties'
import { notionDate } from '../global.test'
import { index, AllUnionUsed } from '../../utils'

export const number: Rollups.Number = {
    type: 'number',
    number: 0,
    function: 'show_original',
}

export const date: Rollups.Date = {
    type: 'date',
    date: notionDate,
    function: 'show_original',
}

export const array: Rollups.Array = {
    type: 'array',
    array: [{ type: 'number', number: 0 }],
    function: 'show_original',
}

const allRollups = [number, date, array]
const _: AllUnionUsed<Rollup, typeof allRollups[number]> = undefined
const anyRollup: Rollup = allRollups[index]
export default anyRollup

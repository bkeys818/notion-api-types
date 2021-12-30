import { Pages } from './'

export interface Number {
    type: 'number'
    number: number
}
export interface Date {
    type: 'date'
    date: Date
}
export interface Array {
    type: 'array'
    array: Omit<Exclude<Pages.Any, Pages.Rollup>, 'id'>[]
}

export type Any = Number | Date | Array

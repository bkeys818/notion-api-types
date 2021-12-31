import { Pages } from './'

export interface Number {
    type: 'number'
    number: number
    function:
        | 'show_original'
        | 'show_unique_values'
        | 'count_all'
        | 'count_values'
        | 'count_unique_values'
        | 'count_empty'
        | 'count_not_empty'
        | 'percent_empty'
        | 'percent_not_empty'
        | 'sum'
        | 'average'
        | 'median'
        | 'min'
        | 'max'
        | 'range'
}
export interface Date {
    type: 'date'
    date: Pages.Date['date']
    function:
        | 'show_original'
        | 'show_unique_values'
        | 'count_all'
        | 'count_values'
        | 'count_unique_values'
        | 'count_empty'
        | 'count_not_empty'
        | 'percent_empty'
        | 'percent_not_empty'
        | 'earliest_date'
        | 'latest_date'
        | 'date_range'
}
export interface Array {
    type: 'array'
    array: Omit<Exclude<Pages.Any, Pages.Rollup>, 'id'>[]
    function:
        | 'show_original'
        | 'show_unique_values'
        | 'count_all'
        | 'count_values'
        | 'count_unique_values'
        | 'count_empty'
        | 'count_not_empty'
        | 'percent_empty'
        | 'percent_not_empty'
}

export type Any = Number | Date | Array

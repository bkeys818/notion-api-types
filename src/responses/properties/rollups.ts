import { Resolve } from '../../utils'
import { NotionDate } from '../global'
import { PageProperties, PageProperty } from '..'

interface RollupBase {
    /** The type of rollup. */
    type: string
    function: string
}

export interface Number extends RollupBase {
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
export interface Date extends RollupBase {
    type: 'date'
    date: NotionDate
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
export interface Array extends RollupBase {
    type: 'array'
    array: OmitId<Exclude<PageProperty, PageProperties.Rollup>>[]
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

type OmitId<T extends { id: string }> = T extends T
    ? Resolve<Omit<T, 'id'>>
    : never

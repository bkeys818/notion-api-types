import { ComplexNotionObject, Resolve } from '../../utils'
import { NotionDate } from '../global'
import { PropertyType, PageProperty } from '..'

interface Rollups {
    number: {
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
    date: {
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
    array: {
        array: OmitId<PageProperty<Exclude<PropertyType, 'rollup'>>>[]
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
}

export type RollupType = keyof Rollups
export type Rollup<T extends RollupType = RollupType> = ComplexNotionObject<
    Rollups,
    T
>

type OmitId<T extends { id: string }> = T extends T
    ? Resolve<Omit<T, 'id'>>
    : never

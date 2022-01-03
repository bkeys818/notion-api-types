import { NotionObj } from '../global'
export * as Databases from './databases'
import * as Pages from './pages'
export { Pages }

export type PropertyType = Pages.Property['type']

interface FormulaMap {
    string: string | null
    number: number | null
    boolean: boolean
    date: Date | null
}
export type FormulaType = keyof FormulaMap
export type Formula<T extends FormulaType = FormulaType> = NotionObj<
    FormulaMap,
    T
>

type OmitId<T extends { id: string }> = T extends T ? Omit<T, 'id'> : never
interface RollupMap {
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
        date: Pages.Property<'date'>['date']
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
        array: OmitId<Pages.Property<Exclude<PropertyType, 'rollup'>>>[]
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
export type RollupType = keyof RollupMap
export type Rollup<T extends RollupType = RollupType> = NotionObj<RollupMap, T>

import * as Conditions from './conditions'
import { NotionRequest } from '../../..'

type FilterValue = FilterValueFor<
    Exclude<NotionRequest.DatabaseProperty['type'], 'rollup' | undefined>
>

type Filter =
    | ({
          /** The name or ID of the property to filter on. */
          property: string
      } & FilterValue)
    | { and: Filter[] }
    | { or: Filter[] }
export default Filter

type ConditionFor<T> = T extends
    | 'title'
    | 'rich_text'
    | 'url'
    | 'email'
    | 'phone_number'
    ? Conditions.Text
    : T extends 'number'
    ? Conditions.Number
    : T extends 'checkbox'
    ? Conditions.Checkbox
    : T extends 'select'
    ? Conditions.Select
    : T extends 'multi_select'
    ? Conditions.MutliSelect
    : T extends 'date' | 'created_time' | 'last_edited_time'
    ? Conditions.Date
    : T extends 'people' | 'created_by' | 'last_edited_by'
    ? Conditions.People
    : T extends 'files'
    ? Conditions.File
    : T extends 'relation'
    ? Conditions.Relation
    : T extends 'formula'
    ? Conditions.Formula
    : never

type FilterValueFor<T extends string> = T extends T
    ? { [K in T]: ConditionFor<K> }
    : never

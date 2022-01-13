import { NotionResponse } from '../..'
import { PartialPick } from '../utils'
import { SelectOptions } from './global'

interface DatabasePropertyBase {
    /** Type that controls the behavior of the property.  */
    type?: string
}

export interface Title extends DatabasePropertyBase {
    type?: 'title'
    title: Record<string, never>
}
export interface RichText extends DatabasePropertyBase {
    type?: 'rich_text'
    rich_text: Record<string, never>
}
export interface Number extends DatabasePropertyBase {
    type?: 'number'
    number: Partial<NotionResponse.DatabaseProperties.Number['number']>
}
export interface Select extends DatabasePropertyBase {
    type?: 'select'
    select: { options?: SelectOptions[] }
}
export interface MultiSelect extends DatabasePropertyBase {
    type?: 'multi_select'
    multi_select: { options?: SelectOptions[] }
}
export interface Date extends DatabasePropertyBase {
    type?: 'date'
    date: Record<string, never>
}
export interface People extends DatabasePropertyBase {
    type?: 'people'
    people: Record<string, never>
}
export interface Files extends DatabasePropertyBase {
    type?: 'files'
    files: Record<string, never>
}
export interface Checkbox extends DatabasePropertyBase {
    type?: 'checkbox'
    checkbox: Record<string, never>
}
export interface Url extends DatabasePropertyBase {
    type?: 'url'
    url: Record<string, never>
}
export interface Email extends DatabasePropertyBase {
    type?: 'email'
    email: Record<string, never>
}
export interface PhoneNumber extends DatabasePropertyBase {
    type?: 'phone_number'
    phone_number: Record<string, never>
}
export interface Formula extends DatabasePropertyBase {
    type?: 'formula'
    formula: NotionResponse.DatabaseProperties.Formula['formula']
}
export interface Relation extends DatabasePropertyBase {
    type?: 'relation'
    relation: Pick<
        NotionResponse.DatabaseProperties.Relation['relation'],
        'database_id'
    >
}
type ResponseRollup = NotionResponse.DatabaseProperties.Rollup['rollup']
export interface Rollup extends DatabasePropertyBase {
    type?: 'rollup'
    rollup: PartialPick<
        ResponseRollup,
        Exclude<keyof ResponseRollup, 'function'>
    >
}
export interface CreatedTime extends DatabasePropertyBase {
    type?: 'created_time'
    created_time: Record<string, never>
}
export interface CreatedBy extends DatabasePropertyBase {
    type?: 'created_by'
    created_by: Record<string, never>
}
export interface LastEditedTime extends DatabasePropertyBase {
    type?: 'last_edited_time'
    last_edited_time: Record<string, never>
}
export interface LastEditedBy extends DatabasePropertyBase {
    type?: 'last_edited_by'
    last_edited_by: Record<string, never>
}

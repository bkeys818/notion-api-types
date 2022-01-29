import { NotionResponse } from '../..'
import * as Properties from '.'
import { SelectOptions } from './global'
import { NotionDate } from '../global'

interface PagePropertyBase {
    /**
     * Underlying identifier for the property. This identifier is guaranteed to remain constant when the property name changes. It may be a UUID, but is often a short random string.
     *
     * The id may be used in place of name when creating or updating pages.
     */
    id: string
    /** Type of the property. */
    type: string
}

export interface RichText extends PagePropertyBase {
    type: 'rich_text'
    rich_text: NotionResponse.RichText[]
}
export interface Number extends PagePropertyBase {
    type: 'number'
    number: number | null
}
export interface Select extends PagePropertyBase {
    type: 'select'
    select: SelectOptions | null
}
export interface MultiSelect extends PagePropertyBase {
    type: 'multi_select'
    multi_select: SelectOptions[]
}
export interface Date extends PagePropertyBase {
    type: 'date'
    date: NotionDate | null
}
export interface Formula extends PagePropertyBase {
    type: 'formula'
    formula: Properties.Formula
}
export interface Relation extends PagePropertyBase {
    type: 'relation'
    relation: { id: string }[]
}
export interface Rollup extends PagePropertyBase {
    type: 'rollup'
    rollup: Properties.Rollup
}
export interface Title extends PagePropertyBase {
    type: 'title'
    title: [NotionResponse.RichTexts.Text]
}
export interface People extends PagePropertyBase {
    type: 'people'
    people: NotionResponse.User[]
}
export interface Files extends PagePropertyBase {
    type: 'files'
    files: (NotionResponse.File & { name: string })[]
}
export interface Checkbox extends PagePropertyBase {
    type: 'checkbox'
    checkbox: boolean
}
export interface Url extends PagePropertyBase {
    type: 'url'
    url: string | null
}
export interface Email extends PagePropertyBase {
    type: 'email'
    email: string | null
}
export interface PhoneNumber extends PagePropertyBase {
    type: 'phone_number'
    phone_number: string | null
}
export interface CreatedTime extends PagePropertyBase {
    type: 'created_time'
    created_time: string
}
export interface CreatedBy extends PagePropertyBase {
    type: 'created_by'
    created_by: NotionResponse.User
}
export interface LastEditedTime extends PagePropertyBase {
    type: 'last_edited_time'
    last_edited_time: string
}
export interface LastEditedBy extends PagePropertyBase {
    type: 'last_edited_by'
    last_edited_by: NotionResponse.User
}

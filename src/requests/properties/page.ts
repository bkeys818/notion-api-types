import { NotionRequest } from '../..'
import { SelectOptions } from './global'
import { NotionDate } from '../global'

interface PagePropertyBase {
    /** Type of the property. */
    type?: string
}

export interface RichText extends PagePropertyBase {
    type?: 'rich_text'
    rich_text: NotionRequest.RichText[]
}
export interface Number extends PagePropertyBase {
    type?: 'number'
    number: number | null
}
export interface Select extends PagePropertyBase {
    type?: 'select'
    select: SelectOptions | null
}
export interface MultiSelect extends PagePropertyBase {
    type?: 'multi_select'
    multi_select: SelectOptions[]
}
export interface Date extends PagePropertyBase {
    type?: 'date'
    date: NotionDate | null
}
export interface Relation extends PagePropertyBase {
    type?: 'relation'
    relation: { id: string }[]
}
export interface Title extends PagePropertyBase {
    type?: 'title'
    title: [NotionRequest.RichTexts.Text]
}
export interface People extends PagePropertyBase {
    type?: 'people'
    people: NotionRequest.User[]
}
export interface Files extends PagePropertyBase {
    type?: 'files'
    files: (NotionRequest.File & { name?: string })[]
}
export interface Checkbox extends PagePropertyBase {
    type?: 'checkbox'
    checkbox: boolean
}
export interface Url extends PagePropertyBase {
    type?: 'url'
    url: string
}
export interface Email extends PagePropertyBase {
    type?: 'email'
    email: string | null
}
export interface PhoneNumber extends PagePropertyBase {
    type?: 'phone_number'
    phone_number: string | null
}

import { NotionDate } from '../global'
import { NotionObject } from '../../utils'
import { RichText, User, File } from '..'
import { Rollup } from './rollup'
import { Formula } from './formula'
import { SelectOptions } from './global'

interface PageProperties {
    rich_text: RichText[]
    number: number | null
    select: SelectOptions | null
    multi_select: SelectOptions[]
    date: NotionDate | null
    formula: Formula
    relation: { id: string }[]
    rollup: Rollup
    title: [RichText<'text'>]
    people: User[]
    files: (File & { name: string })[]
    checkbox: boolean
    url: string
    email: string | null
    phone_number: string | null
    created_time: string
    created_by: User
    last_edited_time: string
    last_edited_by: User
}
export type PropertyType = keyof PageProperties
export type PageProperty<T extends PropertyType = PropertyType> = NotionObject<
    PageProperties,
    T,
    {
        /**
         * Underlying identifier for the property. This identifier is guaranteed to remain constant when the property name changes. It may be a UUID, but is often a short random string.
         *
         * The id may be used in place of name when creating or updating pages.
         */
        id: string
    }
>

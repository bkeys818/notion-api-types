import * as Formulas from './formulas'
import * as Rollups from './rollups'
import { SelectOptions } from './global'
import { RichTexts, Users, Files } from '..'

interface PropertyBase {
    /**
     * Underlying identifier for the property. This identifier is guaranteed to remain constant when the property name changes. It may be a UUID, but is often a short random string.
     *
     * The id may be used in place of name when creating or updating pages.
     */
    id: string
}

export interface RichText extends PropertyBase {
    type: 'rich_text'
    rich_text: RichTexts.Any[]
}
export interface Number extends PropertyBase {
    type: 'number'
    number: number | null
}
export interface Select extends PropertyBase {
    type: 'select'
    select: SelectOptions | null
}
export interface MultiSelect extends PropertyBase {
    type: 'multi_select'
    multi_select: SelectOptions[]
}
export interface Date extends PropertyBase {
    type: 'date'
    date: {
        /** An ISO 8601 format date, with optional time. */
        start: string
        /**
         * An ISO 8601 formatted date, with optional time. Represents the end of a date range.
         *
         * If `null`, this property's date value is not a range.
         */
        end: string | null
        /**
         * Time zone information for `start` and `end`. Possible values are extracted from the [IANA database](https://www.iana.org/time-zones) and they are based on the time zones from [Moment.js](https://momentjs.com/timezone/).
         *
         * When time zone is provided, `start` and `end` should not have any [UTC offsets](https://en.wikipedia.org/wiki/UTC_offset). In addition, when time zone  is provided, `start` and `end` cannot be dates without time information.
         *
         * If `null`, time zone information will be contained in [UTC offsets](https://en.wikipedia.org/wiki/UTC_offset) in `start` and `end`.
         */
        time_zone: string | null
    } | null
}
export interface Formula extends PropertyBase {
    type: 'formula'
    formula: Formulas.Any
}
export interface Relation extends PropertyBase {
    type: 'relation'
    relation: { id: string }[]
}
export interface Rollup extends PropertyBase {
    type: 'rollup'
    rollup: Rollups.Any
}
export interface Title extends PropertyBase {
    type: 'title'
    title: [RichTexts.Text]
}
export interface People extends PropertyBase {
    type: 'people'
    people: Users.Any[]
}
export interface File extends PropertyBase {
    type: 'files'
    files: (Files.Any & { name: string })[]
}
export interface Checkbox extends PropertyBase {
    type: 'checkbox'
    checkbox: boolean
}
export interface Url extends PropertyBase {
    type: 'url'
    url: string
}
export interface Email extends PropertyBase {
    type: 'email'
    email: string | null
}
export interface PhoneNumber extends PropertyBase {
    type: 'phone_number'
    phone_number: number | null
}
export interface CreatedTime extends PropertyBase {
    type: 'created_time'
    created_time: string
}
export interface CreatedBy extends PropertyBase {
    type: 'created_by'
    created_by: Users.Any
}
export interface LastEditedTime extends PropertyBase {
    type: 'last_edited_time'
    last_edited_time: string
}
export interface LastEditedBy extends PropertyBase {
    type: 'last_edited_by'
    last_edited_by: Users.Any
}

export type Any =
    | RichText
    | Number
    | Select
    | MultiSelect
    | Date
    | Formula
    | Relation
    | Rollup
    | Title
    | People
    | File
    | Checkbox
    | Url
    | Email
    | PhoneNumber
    | CreatedTime
    | CreatedBy
    | LastEditedTime
    | LastEditedBy

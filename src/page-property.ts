import { ExtractUnion, SelectOptions } from './global'
import { RichText, User, File } from '.'

interface PropertyBase {
    /**
     * Underlying identifier for the property. This identifier is guaranteed to remain constant when the property name changes. It may be a UUID, but is often a short random string.
     *
     * The id may be used in place of name when creating or updating pages.
     */
    id: string
}

interface RichTextProperty extends PropertyBase {
    type: 'rich_text'
    rich_text: RichText[]
}
interface NumberProperty extends PropertyBase {
    type: 'number'
    number: number | null
}
interface SelectProperty extends PropertyBase {
    type: 'select'
    select: SelectOptions | null
}
interface MultiSelectProperty extends PropertyBase {
    type: 'multi_select'
    multi_select: SelectOptions[]
}
interface DateProperty extends PropertyBase {
    type: 'date'
    date: Date | null
}
interface FormulaProperty extends PropertyBase {
    type: 'formula'
    formula: Formula
}
interface RelationProperty extends PropertyBase {
    type: 'relation'
    relation: { id: string }[]
}
interface RollupProperty extends PropertyBase {
    type: 'rollup'
    rollup: Rollup
}
interface TitleProperty extends PropertyBase {
    type: 'title'
    title: RichText<'text'>[]
}
interface PeopleProperty extends PropertyBase {
    type: 'people'
    people: User[]
}
interface FilesProperty extends PropertyBase {
    type: 'files'
    files: (File & { name: string })[]
}
interface CheckboxProperty extends PropertyBase {
    type: 'checkbox'
    checkbox: boolean
}
interface UrlProperty extends PropertyBase {
    type: 'url'
    url: string
}
interface EmailProperty extends PropertyBase {
    type: 'email'
    email: string | null
}
interface PhoneNumberProperty extends PropertyBase {
    type: 'phone_number'
    phone_number: number | null
}
interface CreatedTimeProperty extends PropertyBase {
    type: 'created_time'
    created_time: Date
}
interface CreatedByProperty extends PropertyBase {
    type: 'created_by'
    created_by: User
}
interface LastEditedTimeProperty extends PropertyBase {
    type: 'last_edited_time'
    last_edited_time: Date
}
interface LastEditedByProperty extends PropertyBase {
    type: 'last_edited_by'
    last_edited_by: User
}

export type PagePropertyType = AllPageProperties['type']
export type PageProperty<T extends PagePropertyType = PagePropertyType> =
    ExtractUnion<AllPageProperties, T>
type AllPageProperties =
    | RichTextProperty
    | NumberProperty
    | SelectProperty
    | MultiSelectProperty
    | DateProperty
    | FormulaProperty
    | RelationProperty
    | RollupProperty
    | TitleProperty
    | PeopleProperty
    | FilesProperty
    | CheckboxProperty
    | UrlProperty
    | EmailProperty
    | PhoneNumberProperty
    | CreatedTimeProperty
    | CreatedByProperty
    | LastEditedTimeProperty
    | LastEditedByProperty

interface Date {
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
}

export type FormulaType = AllFormulas['type']
export type Formula<T extends FormulaType = FormulaType> = ExtractUnion<
    AllFormulas,
    T
>
type AllFormulas =
    | { type: 'string'; string: string | null }
    | { type: 'number'; number: number | null }
    | { type: 'boolean'; boolean: boolean }
    | { type: 'date'; date: Date | null }

export type RollupType = AllRollups['type']
export type Rollup<T extends RollupType = RollupType> = ExtractUnion<
    AllRollups,
    T
>
type AllRollups =
    | { type: 'number'; number: number }
    | { type: 'date'; date: Date }
    | {
          type: 'array'
          array: Omit<PageProperty<Exclude<PagePropertyType, 'rollup'>>, 'id'>[]
      }

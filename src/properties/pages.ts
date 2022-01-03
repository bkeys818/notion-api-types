import { Formula, Rollup } from '.'
import { NotionObj } from '../global'
import { SelectOptions } from './global'
import { RichText, User, File } from '..'

interface Properties {
    rich_text: { rich_text: RichText[] }
    number: { number: number | null }
    select: { select: SelectOptions | null }
    multi_select: { multi_select: SelectOptions[] }
    date: { date: {
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
    } | null }
    formula: { formula: Formula }
    relation: { relation: { id: string }[] }
    rollup: { rollup: Rollup }
    title: { title: [RichText<'text'>] }
    people: { people: User[] }
    files: { files: (File & { name: string })[] }
    checkbox: { checkbox: boolean }
    url: { url: string }
    email: { email: string | null }
    phone_number: { phone_number: string | null }
    created_time: { created_time: string }
    created_by: { created_by: User }
    last_edited_time: { last_edited_time: string }
    last_edited_by: { last_edited_by: User }
}

export type PropertyType = keyof Properties
export type Property<T extends PropertyType = PropertyType> = NotionObj<
    Properties,
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
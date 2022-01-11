import { Parent, Files } from '.'

export interface NotionItem {
    id: string
    /** Date and time when this page was created. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
    created_time: string
    /** Date and time when this page was updated. Formatted as an ISO 8601 date time string. */
    last_edited_time: string
    /** Page icon. */
    icon: File | Emoji | null
    /** Page cover image. */
    cover: Files.External | null
    /** The parent of this page. */
    parent: Parent
    /** The URL of the Notion page. */
    url: string
}

export interface Emoji {
    type: 'emoji'
    emoji: string
}

export interface NotionDate {
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

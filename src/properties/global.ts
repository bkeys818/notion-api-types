// @ts-ignore
import type { DatabaseProperty } from '../database'

export interface SelectOptions {
    /**
     * Name of the option as it appears in Notion.
     *
     * If the select {@link DatabaseProperty database property} does not yet have an option by that name, it will be added to the database schema if the integration also has write access to the parent database.
     *
     * Note: Commas (",") are not valid for select values.
     */
    name: string
    /** Identifier of the option, which does not change if the name is changed. These are sometimes, but not always, UUIDs */
    id: string
    /** Color of the option. */
    color:
        | 'default'
        | 'gray'
        | 'brown'
        | 'orange'
        | 'yellow'
        | 'green'
        | 'blue'
        | 'purple'
        | 'pink'
        | 'red'
}

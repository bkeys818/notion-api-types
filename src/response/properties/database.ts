import { NotionObject } from '../../utils'
import { PropertyType } from '..'
import { Rollup } from './rollup'
import { SelectOptions } from './global'

interface DatabaseProperties {
    title: Record<string, never>
    rich_text: Record<string, never>
    number: {
        format:
            | 'number'
            | 'number_with_commas'
            | 'percent'
            | 'dollar'
            | 'canadian_dollar'
            | 'euro'
            | 'pound'
            | 'yen'
            | 'ruble'
            | 'rupee'
            | 'won'
            | 'yuan'
            | 'real'
            | 'lira'
            | 'rupiah'
            | 'franc'
            | 'hong_kong_dollar'
            | 'new_zealand_dollar'
            | 'krona'
            | 'norwegian_krone'
            | 'mexican_peso'
            | 'rand'
            | 'new_taiwan_dollar'
            | 'danish_krone'
            | 'zloty'
            | 'baht'
            | 'forint'
            | 'koruna'
            | 'shekel'
            | 'chilean_peso'
            | 'philippine_peso'
            | 'dirham'
            | 'colombian_peso'
            | 'riyal'
            | 'ringgit'
            | 'leu'
            | 'argentine_peso'
            | 'uruguayan_peso'
    }
    select: { options: SelectOptions[] }
    multi_select: { options: SelectOptions[] }
    date: Record<string, never>
    people: Record<string, never>
    files: Record<string, never>
    checkbox: Record<string, never>
    url: Record<string, never>
    email: Record<string, never>
    phone_number: Record<string, never>
    formula: {
        /** Formula to evaluate for this property. You can read more about the [syntax for formulas](https://notion.so/notion/Formulas-28f3f5c3ae644c59b4d862046ea6a541) in the help center. */
        expression: string
    }
    relation: {
        /** The database this relation refers to. New linked pages must belong to this database in order to be valid. */
        database_id: string
        /** By default, relations are formed as two synced properties across databases: if you make a change to one property, it updates the synced property at the same time. `synced_property_name` refers to the `name` of the property in the related database. */
        synced_property_name: string | null
        /** By default, relations are formed as two synced properties across databases: if you make a change to one property, it updates the synced property at the same time. `synced_property_id` refers to the `id` of the property in the related database. This is usually a short string of random letters and symbols. */
        synced_property_id: string | null
    }
    rollup: {
        /** The name of the relation property this property is responsible for rolling up. */
        relation_property_name: string
        /** The `id` of the relation property this property is responsible for rolling up. */
        relation_property_id: string
        /** The name of the property of the pages in the related database that is used as an input to `function`. */
        rollup_property_name: string
        /** The `id` of the property of the pages in the related database that is used as an input to `function`. */
        rollup_property_id: string
        /** The function that is evaluated for every page in the relation of the rollup. */
        function: Rollup['function']
    }
    created_time: Record<string, never>
    created_by: Record<string, never>
    last_edited_time: Record<string, never>
    last_edited_by: Record<string, never>
}

export type DatabaseProperty<T extends PropertyType = PropertyType> =
    NotionObject<
        DatabaseProperties,
        T,
        {
            /**
             * The ID of the property, usually a short string of random letters and symbols.
             *
             * Some automatically generated property types have special human-readable IDs. For example, all Title properties have an ID of `"title"`.
             */
            id: string
            /** The name of the property as it appears in Notion. */
            name: string
        }
    >

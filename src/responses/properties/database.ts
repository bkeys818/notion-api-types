import * as Properties from '.'
import { SelectOptions } from './global'

interface DatabasePropertyBase {
    /**
     * The ID of the property, usually a short string of random letters and symbols.
     *
     * Some automatically generated property types have special human-readable IDs. For example, all Title properties have an ID of `"title"`.
     */
    id: string
    /** Type that controls the behavior of the property.  */
    type: string
    /** The name of the property as it appears in Notion. */
    name: string
}

export interface Title extends DatabasePropertyBase {
    type: 'title'
    title: Record<string, never>
}
export interface RichText extends DatabasePropertyBase {
    type: 'rich_text'
    rich_text: Record<string, never>
}
export interface Number extends DatabasePropertyBase {
    type: 'number'
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
}
export interface Select extends DatabasePropertyBase {
    type: 'select'
    select: { options: SelectOptions[] }
}
export interface MultiSelect extends DatabasePropertyBase {
    type: 'multi_select'
    multi_select: { options: SelectOptions[] }
}
export interface Date extends DatabasePropertyBase {
    type: 'date'
    date: Record<string, never>
}
export interface People extends DatabasePropertyBase {
    type: 'people'
    people: Record<string, never>
}
export interface Files extends DatabasePropertyBase {
    type: 'files'
    files: Record<string, never>
}
export interface Checkbox extends DatabasePropertyBase {
    type: 'checkbox'
    checkbox: Record<string, never>
}
export interface Url extends DatabasePropertyBase {
    type: 'url'
    url: Record<string, never>
}
export interface Email extends DatabasePropertyBase {
    type: 'email'
    email: Record<string, never>
}
export interface PhoneNumber extends DatabasePropertyBase {
    type: 'phone_number'
    phone_number: Record<string, never>
}
export interface Formula extends DatabasePropertyBase {
    type: 'formula'
    formula: {
        /** Formula to evaluate for this property. You can read more about the [syntax for formulas](https://notion.so/notion/Formulas-28f3f5c3ae644c59b4d862046ea6a541) in the help center. */
        expression: string
    }
}
export interface Relation extends DatabasePropertyBase {
    type: 'relation'
    relation: {
        /** The database this relation refers to. New linked pages must belong to this database in order to be valid. */
        database_id: string
        /** By default, relations are formed as two synced properties across databases: if you make a change to one property, it updates the synced property at the same time. `synced_property_name` refers to the `name` of the property in the related database. */
        synced_property_name: string | null
        /** By default, relations are formed as two synced properties across databases: if you make a change to one property, it updates the synced property at the same time. `synced_property_id` refers to the `id` of the property in the related database. This is usually a short string of random letters and symbols. */
        synced_property_id: string | null
    }
}
export interface Rollup extends DatabasePropertyBase {
    type: 'rollup'
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
        function: Properties.Rollup['function']
    }
}
export interface CreatedTime extends DatabasePropertyBase {
    type: 'created_time'
    created_time: Record<string, never>
}
export interface CreatedBy extends DatabasePropertyBase {
    type: 'created_by'
    created_by: Record<string, never>
}
export interface LastEditedTime extends DatabasePropertyBase {
    type: 'last_edited_time'
    last_edited_time: Record<string, never>
}
export interface LastEditedBy extends DatabasePropertyBase {
    type: 'last_edited_by'
    last_edited_by: Record<string, never>
}

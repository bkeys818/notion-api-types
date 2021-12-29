import { ExtractUnion } from './global'
import { SelectOptions } from './global'

interface PropertyBase {
    /**
     * The ID of the property, usually a short string of random letters and symbols.
     *
     * Some automatically generated property types have special human-readable IDs. For example, all Title properties have an ID of `"title"`.
     */
    id: string
    /** The name of the property as it appears in Notion. */
    name: string
}

interface Title extends PropertyBase {
    type: 'title'
    title: {}
}
interface RichText extends PropertyBase {
    type: 'rich_text'
    rich_text: {}
}
interface Number extends PropertyBase {
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
interface Select extends PropertyBase {
    type: 'select'
    select: { options: SelectOptions }
}
interface MultiSelect extends PropertyBase {
    type: 'multi_select'
    multi_select: { options: SelectOptions[] }
}
interface Date extends PropertyBase {
    type: 'date'
    date: {}
}
interface People extends PropertyBase {
    type: 'people'
    people: {}
}
interface Files extends PropertyBase {
    type: 'files'
    files: {}
}
interface Checkbox extends PropertyBase {
    type: 'checkbox'
    checkbox: {}
}
interface Url extends PropertyBase {
    type: 'url'
    url: {}
}
interface Email extends PropertyBase {
    type: 'email'
    email: {}
}
interface PhoneNumber extends PropertyBase {
    type: 'phone_number'
    phone_number: {}
}
interface Formula extends PropertyBase {
    type: 'formula'
    formula: {
        /** Formula to evaluate for this property. You can read more about the [syntax for formulas](https://notion.so/notion/Formulas-28f3f5c3ae644c59b4d862046ea6a541) in the help center. */
        expression: string
    }
}
interface Relation extends PropertyBase {
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
interface Rollup extends PropertyBase {
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
        function:
            | 'count_all'
            | 'count_values'
            | 'count_unique_values'
            | 'count_empty'
            | 'count_not_empty'
            | 'percent_empty'
            | 'percent_not_empty'
            | 'sum'
            | 'average'
            | 'median'
            | 'min'
            | 'max'
            | 'range'
            | 'show_original'
    }
}
interface CreatedTime extends PropertyBase {
    type: 'created_time'
    created_time: {}
}
interface CreatedBy extends PropertyBase {
    type: 'created_by'
    created_by: {}
}
interface LastEditedTime extends PropertyBase {
    type: 'last_edited_time'
    last_edited_time: {}
}
interface LastEditedBy extends PropertyBase {
    type: 'last_edited_by'
    last_edited_by: {}
}

export type DatabasePropertyType = AllDatabaseProperties['type']
export type DatabaseProperty<
    T extends DatabasePropertyType = DatabasePropertyType
> = ExtractUnion<AllDatabaseProperties, T>
type AllDatabaseProperties =
    | Title
    | RichText
    | Number
    | Select
    | MultiSelect
    | Date
    | People
    | Files
    | Checkbox
    | Url
    | Email
    | PhoneNumber
    | Formula
    | Relation
    | Rollup
    | CreatedTime
    | CreatedBy
    | LastEditedTime
    | LastEditedBy

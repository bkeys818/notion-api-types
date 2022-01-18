import * as Formulas from './formulas'
import * as DatabaseProperties from './database'
import * as PageProperties from './page'

export { Formulas, DatabaseProperties, PageProperties }

export type Formula =
    | Formulas.String
    | Formulas.Number
    | Formulas.Boolean
    | Formulas.Date

export type DatabaseProperty =
    | DatabaseProperties.Title
    | DatabaseProperties.RichText
    | DatabaseProperties.Number
    | DatabaseProperties.Select
    | DatabaseProperties.MultiSelect
    | DatabaseProperties.Date
    | DatabaseProperties.People
    | DatabaseProperties.Files
    | DatabaseProperties.Checkbox
    | DatabaseProperties.Url
    | DatabaseProperties.Email
    | DatabaseProperties.PhoneNumber
    | DatabaseProperties.Formula
    | DatabaseProperties.Relation
    | DatabaseProperties.Rollup
    | DatabaseProperties.CreatedTime
    | DatabaseProperties.CreatedBy
    | DatabaseProperties.LastEditedTime
    | DatabaseProperties.LastEditedBy

export type PageProperty =
    | PageProperties.RichText
    | PageProperties.Number
    | PageProperties.Select
    | PageProperties.MultiSelect
    | PageProperties.Date
    | PageProperties.Formula
    | PageProperties.Relation
    | PageProperties.Title
    | PageProperties.People
    | PageProperties.Files
    | PageProperties.Checkbox
    | PageProperties.Url
    | PageProperties.Email
    | PageProperties.PhoneNumber

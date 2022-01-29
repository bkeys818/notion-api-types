import type {
    DatabaseProperties,
    DatabaseProperty,
} from '../../../types/requests/properties'
import { selectOption } from './global.test'
import { index, AllUnionUsed } from '../../utils'

const title: DatabaseProperties.Title = { title: {} }

const richText: DatabaseProperties.RichText = { rich_text: {} }

const number: DatabaseProperties.Number = { number: { format: 'dollar' } }

const select: DatabaseProperties.Select = {
    select: { options: [selectOption] },
}

const multiSelect: DatabaseProperties.MultiSelect = {
    multi_select: { options: [selectOption] },
}

const date: DatabaseProperties.Date = { date: {} }

const people: DatabaseProperties.People = { people: {} }

const files: DatabaseProperties.Files = { files: {} }

const checkbox: DatabaseProperties.Checkbox = { checkbox: {} }

const url: DatabaseProperties.Url = { url: {} }

const email: DatabaseProperties.Email = { email: {} }

const phoneNumber: DatabaseProperties.PhoneNumber = { phone_number: {} }

const formula: DatabaseProperties.Formula = {
    formula: { expression: 'prop("some property name")' },
}

const relation: DatabaseProperties.Relation = {
    relation: { database_id: 'random_database_id' },
}

const rollup: DatabaseProperties.Rollup = {
    rollup: {
        relation_property_name: 'some relation property name',
        rollup_property_name: 'some property name',
        function: 'show_original',
    },
}

const createdTime: DatabaseProperties.CreatedTime = { created_time: {} }

const createdBy: DatabaseProperties.CreatedBy = { created_by: {} }

const lastEditedTime: DatabaseProperties.LastEditedTime = {
    last_edited_time: {},
}

const lastEditedBy: DatabaseProperties.LastEditedBy = {
    last_edited_by: {},
}

const allDatabaseProperty = [
    title,
    richText,
    number,
    select,
    multiSelect,
    date,
    people,
    files,
    checkbox,
    url,
    email,
    phoneNumber,
    formula,
    relation,
    rollup,
    createdTime,
    createdBy,
    lastEditedTime,
    lastEditedBy,
]
const _: AllUnionUsed<DatabaseProperty, typeof allDatabaseProperty[number]> =
    undefined
const anyDatabaseProperty: DatabaseProperty = allDatabaseProperty[index]
export default anyDatabaseProperty

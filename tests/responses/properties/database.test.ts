import type {
    DatabaseProperties,
    DatabaseProperty,
} from '../../../types/responses/properties'
import { selectOptions } from './global.test'
import { index, AllUnionUsed } from '../../utils'

const databasePropertyBase: Omit<DatabaseProperty, 'type'> = {
    id: 'random_property_id',
    name: 'some property name',
}

export const title: DatabaseProperties.Title = {
    ...databasePropertyBase,
    title: {},
    type: 'title',
}

export const richText: DatabaseProperties.RichText = {
    ...databasePropertyBase,
    rich_text: {},
    type: 'rich_text',
}

export const number: DatabaseProperties.Number = {
    ...databasePropertyBase,
    number: { format: 'number' },
    type: 'number',
}

export const select: DatabaseProperties.Select = {
    ...databasePropertyBase,
    select: { options: [selectOptions] },
    type: 'select',
}

export const multiSelect: DatabaseProperties.MultiSelect = {
    ...databasePropertyBase,
    multi_select: { options: [selectOptions] },
    type: 'multi_select',
}

export const date: DatabaseProperties.Date = {
    ...databasePropertyBase,
    date: {},
    type: 'date',
}

export const people: DatabaseProperties.People = {
    ...databasePropertyBase,
    people: {},
    type: 'people',
}

export const files: DatabaseProperties.Files = {
    ...databasePropertyBase,
    files: {},
    type: 'files',
}

export const checkbox: DatabaseProperties.Checkbox = {
    ...databasePropertyBase,
    checkbox: {},
    type: 'checkbox',
}

export const url: DatabaseProperties.Url = {
    ...databasePropertyBase,
    url: {},
    type: 'url',
}

export const email: DatabaseProperties.Email = {
    ...databasePropertyBase,
    email: {},
    type: 'email',
}

export const phoneNumber: DatabaseProperties.PhoneNumber = {
    ...databasePropertyBase,
    phone_number: {},
    type: 'phone_number',
}

export const formula: DatabaseProperties.Formula = {
    ...databasePropertyBase,
    formula: { expression: 'prop("Title")' },
    type: 'formula',
}

export const relation: DatabaseProperties.Relation = {
    ...databasePropertyBase,
    relation: {
        database_id: 'random_database_id',
        synced_property_name: 'some property name',
        synced_property_id: 'some_property_id',
    },
    type: 'relation',
}

export const rollup: DatabaseProperties.Rollup = {
    ...databasePropertyBase,
    rollup: {
        relation_property_name: 'some relation property name',
        relation_property_id: 'random_relation_property_id',
        rollup_property_name: 'some rollup property name',
        rollup_property_id: 'random_rollup_property_id',
        function: 'show_original',
    },
    type: 'rollup',
}

export const createdTime: DatabaseProperties.CreatedTime = {
    ...databasePropertyBase,
    created_time: {},
    type: 'created_time',
}

export const createdBy: DatabaseProperties.CreatedBy = {
    ...databasePropertyBase,
    created_by: {},
    type: 'created_by',
}

export const lastEditedTime: DatabaseProperties.LastEditedTime = {
    ...databasePropertyBase,
    last_edited_time: {},
    type: 'last_edited_time',
}

export const lastEditedBy: DatabaseProperties.LastEditedBy = {
    ...databasePropertyBase,
    last_edited_by: {},
    type: 'last_edited_by',
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

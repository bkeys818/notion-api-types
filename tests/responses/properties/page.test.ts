import type {
    PageProperties,
    PageProperty,
} from '../../../types/responses/properties'
import { richTexts, anyRichText, anyUser, anyFile } from '..'
import { anyFormula, anyRollup } from '.'
import { selectOptions } from './global.test'
import { notionDate } from '../global.test'
import { index, AllUnionUsed } from '../../utils'

const pagePropertyBase: Omit<PageProperty, 'type'> = {
    id: 'random_property_id',
}

export const richText: PageProperties.RichText = {
    ...pagePropertyBase,
    type: 'rich_text',
    rich_text: [anyRichText],
}
export const number: PageProperties.Number = {
    ...pagePropertyBase,
    type: 'number',
    number: 0,
}
export const select: PageProperties.Select = {
    ...pagePropertyBase,
    type: 'select',
    select: selectOptions,
}
export const multiSelect: PageProperties.MultiSelect = {
    ...pagePropertyBase,
    type: 'multi_select',
    multi_select: [selectOptions],
}
export const date: PageProperties.Date = {
    ...pagePropertyBase,
    type: 'date',
    date: notionDate,
}
export const formula: PageProperties.Formula = {
    ...pagePropertyBase,
    type: 'formula',
    formula: anyFormula,
}
export const relation: PageProperties.Relation = {
    ...pagePropertyBase,
    type: 'relation',
    relation: [{ id: 'random_page_id' }],
}
export const rollup: PageProperties.Rollup = {
    ...pagePropertyBase,
    type: 'rollup',
    rollup: anyRollup,
}
export const title: PageProperties.Title = {
    ...pagePropertyBase,
    type: 'title',
    title: [richTexts.text],
}
export const people: PageProperties.People = {
    ...pagePropertyBase,
    type: 'people',
    people: [anyUser],
}
export const files: PageProperties.Files = {
    ...pagePropertyBase,
    type: 'files',
    files: [{ ...anyFile, name: 'some file name' }],
}
export const checkbox: PageProperties.Checkbox = {
    ...pagePropertyBase,
    type: 'checkbox',
    checkbox: true,
}
export const url: PageProperties.Url = {
    ...pagePropertyBase,
    type: 'url',
    url: 'http://localhost:5050',
}
export const email: PageProperties.Email = {
    ...pagePropertyBase,
    type: 'email',
    email: 'username@domain.com',
}
export const phoneNumber: PageProperties.PhoneNumber = {
    ...pagePropertyBase,
    type: 'phone_number',
    phone_number: '(555)555-555',
}
export const createdTime: PageProperties.CreatedTime = {
    ...pagePropertyBase,
    type: 'created_time',
    created_time: 'some_created_time',
}
export const createdBy: PageProperties.CreatedBy = {
    ...pagePropertyBase,
    type: 'created_by',
    created_by: anyUser,
}
export const lastEditedTime: PageProperties.LastEditedTime = {
    ...pagePropertyBase,
    type: 'last_edited_time',
    last_edited_time: 'some_last_edited_time',
}
export const lastEditedBy: PageProperties.LastEditedBy = {
    ...pagePropertyBase,
    type: 'last_edited_by',
    last_edited_by: anyUser,
}

const allPageProperties = [
    richText,
    number,
    select,
    multiSelect,
    date,
    formula,
    relation,
    rollup,
    title,
    people,
    files,
    checkbox,
    url,
    email,
    phoneNumber,
    createdTime,
    createdBy,
    lastEditedTime,
    lastEditedBy,
]
const _: AllUnionUsed<PageProperty, typeof allPageProperties[number]> =
    undefined
const anyPageProperty: PageProperty = allPageProperties[index]
export default anyPageProperty

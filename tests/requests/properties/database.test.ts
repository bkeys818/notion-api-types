import type { DatabaseProperties } from '../../../types/requests/properties'
import { selectOptions } from './global'

export const title: DatabaseProperties.Title = { title: {} }

export const richText: DatabaseProperties.RichText = { rich_text: {} }

export const number: DatabaseProperties.Number = {
    number: { format: 'dollar' },
}

export const select: DatabaseProperties.Select = {
    select: { options: selectOptions },
}

export const multiSelect: DatabaseProperties.MultiSelect = {
    multi_select: { options: selectOptions },
}

export const date: DatabaseProperties.Date = { date: {} }

export const people: DatabaseProperties.People = { people: {} }

export const files: DatabaseProperties.Files = { files: {} }

export const checkbox: DatabaseProperties.Checkbox = { checkbox: {} }

export const url: DatabaseProperties.Url = { url: {} }

export const email: DatabaseProperties.Email = { email: {} }

export const phoneNumber: DatabaseProperties.PhoneNumber = { phone_number: {} }

export const formula: DatabaseProperties.Formula = {
    formula: { expression: 'prop("number (dollar)") * 2' },
}

export const relation = (database_id: string): DatabaseProperties.Relation => ({
    relation: { database_id },
})

export const rollup = (
    rollup_property_name: string,
    rollupFunction?: DatabaseProperties.Rollup['rollup']['function']
): DatabaseProperties.Rollup => ({
    rollup: {
        relation_property_name: 'relation (self)',
        rollup_property_name,
        function: rollupFunction ?? 'show_original',
    },
})

export const createdTime: DatabaseProperties.CreatedTime = { created_time: {} }

export const createdBy: DatabaseProperties.CreatedBy = { created_by: {} }

export const lastEditedTime: DatabaseProperties.LastEditedTime = {
    last_edited_time: {},
}

export const lastEditedBy: DatabaseProperties.LastEditedBy = {
    last_edited_by: {},
}

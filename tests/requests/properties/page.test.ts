import type {
    PageProperties,
    PageProperty,
} from '../../../types/requests/properties'
import { anyRichText, richTexts, anyUser, anyFile } from '..'
import { selectOption } from './global.test'
import { notionDate } from '../global.test'
import { index, AllUnionUsed } from '../../utils'

const richText: PageProperties.RichText = { rich_text: [anyRichText] }

const number: PageProperties.Number = { number: 17.48 }

const select: PageProperties.Select = { select: selectOption }

const multiSelect: PageProperties.MultiSelect = {
    multi_select: [selectOption],
}

const dates: PageProperties.Date = { date: notionDate }

const relation: PageProperties.Relation = {
    relation: [{ id: 'random_page_id' }],
}

const title: PageProperties.Title = { title: [richTexts.text] }

const people: PageProperties.People = { people: [anyUser] }

const files: PageProperties.Files = {
    files: [{ ...anyFile, name: 'some file name' }],
}

const checkbox: PageProperties.Checkbox = { checkbox: true }

const url: PageProperties.Url = { url: 'http://localhost:8000' }

const email: PageProperties.Email = { email: 'username@domain.com' }

const phoneNumber: PageProperties.PhoneNumber = {
    phone_number: '(555)555-555',
}
const allPageProp = [
    richText,
    number,
    select,
    multiSelect,
    dates,
    relation,
    title,
    people,
    files,
    checkbox,
    url,
    email,
    phoneNumber,
]
const _: AllUnionUsed<PageProperty, typeof allPageProp[number]> = undefined
const anyPageProp: PageProperty = allPageProp[index]
export default anyPageProp

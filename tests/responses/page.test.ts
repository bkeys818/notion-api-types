import type { Page } from '../../types/responses'
import { anyPageProperty, anyParent, files, anyFile } from '.'
import { notionObject, emoji } from './global.test'
import { index } from '../utils'

const page: Page = {
    ...notionObject,
    archived: false,
    object: 'page',
    properties: { 'property name': anyPageProperty },
    icon: [anyFile, emoji][index],
    cover: files.external,
    parent: anyParent,
    url: 'some_notion_url',
}
export default page

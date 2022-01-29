import type { Page } from '../../types/responses'
import { anyPageProperty } from '.'
import { notionItem } from './global.test'

const page: Page = {
    ...notionItem,
    archived: false,
    object: 'page',
    properties: { 'property name': anyPageProperty },
}
export default page

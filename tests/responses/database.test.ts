import type { Database } from '../../types/responses'
import { richTexts, anyDatabaseProperty, parents } from '.'
import { notionItem } from './global.test'
import { index } from '../utils'

const database: Database = {
    ...notionItem,
    object: 'database',
    title: [richTexts.text],
    properties: { 'property name': anyDatabaseProperty },
    parent: [parents.pageId, parents.workspace][index],
}
export default database

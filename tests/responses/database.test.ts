import type { Database } from '../../types/responses'
import { richTexts, anyDatabaseProperty, parents, files, anyFile } from '.'
import { notionObject, emoji } from './global.test'
import { index } from '../utils'

const database: Database = {
    ...notionObject,
    object: 'database',
    title: [richTexts.text],
    description: [richTexts.text],
    properties: { 'property name': anyDatabaseProperty },
    icon: [anyFile, emoji][index],
    cover: files.external,
    parent: [parents.pageId, parents.workspace][index],
    url: 'some_notion_url',
    is_inline: true,
}
export default database

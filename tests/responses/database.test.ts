import type { Database } from '../../types/responses'
import {
    richTexts,
    anyDatabaseProperty,
    parents,
    anyParent,
    files,
    anyFile,
} from '.'
import { notionObject, emoji } from './global.test'
import { index } from '../utils'

const database: Database = {
    ...notionObject,
    object: 'database',
    title: [richTexts.text],
    properties: { 'property name': anyDatabaseProperty },
    icon: [anyFile, emoji][index],
    cover: files.external,
    parent: [parents.pageId, parents.workspace][index],
    url: 'some_notion_url',
}
export default database

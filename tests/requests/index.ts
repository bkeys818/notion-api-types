import type { NotionRequest } from '../..'

export * as parents from './parents.test'
export * as mentions from './mentions.test'
export * as richTexts from './rich-texts'
export * as files from './files.test'
export * as blocks from './blocks.test'
export { databaseProperties, pageProperties } from './properties'

export const user = (userId: string): NotionRequest.User => ({ id: userId })

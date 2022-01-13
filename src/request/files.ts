import { NotionResponse } from '..'
import { PartialPick } from './utils'

export type External = PartialPick<NotionResponse.Files.External, 'type'>

interface FileBase {
    /** Type of this file object */
    type?: string
}

export interface File extends FileBase {
    type?: 'file'
    file: PartialPick<NotionResponse.Files.File['file'], 'expiry_time'>
}

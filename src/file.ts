import { NotionObject } from './utils'

interface Files {
    external: {
        /** Link to the externally hosted content. */
        url: string
    }
    file: {
        /** Authenticated S3 URL to the file. The file URL will be valid for 1 hour but updated links can be requested if required. */
        url: string
        /** Date and time when this block was created. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
        expiry_time: string
    }
}
export type FileType = keyof Files
export type File<T extends FileType = FileType> = NotionObject<Files, T>

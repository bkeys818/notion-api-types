interface FileBase {
    /** Type of this file object */
    type: string
}

export interface External extends FileBase {
    type: 'external'
    external: {
        /** Link to the externally hosted content. */
        url: string
    }
}

export interface File extends FileBase {
    type: 'file'
    file: {
        /** Authenticated S3 URL to the file. The file URL will be valid for 1 hour but updated links can be requested if required. */
        url: string
        /** Date and time when this block was created. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string. */
        expiry_time: string
    }
}

interface UserBase {
    readonly object: 'user'
    /** Unique identifier for this user. */
    id: string
    /** User's name, as displayed in Notion. */
    readonly name: string | null
    /** Chosen avatar image. */
    readonly avatar_url: string | null
}

export interface Person extends UserBase {
    type: 'person'
    /** Properties only present for non-bot users. */

    person: {
        /** Email address of person. This is only present if an integration has user capabilities that allow access to email addresses. */
        readonly email: string
    }
}
export interface Bot extends UserBase {
    type: 'bot'
    /** Properties only present for bot users. */

    bot: {
        /** Information about who owns this bot. */
        readonly owner?:
            | { readonly type: 'workspace'; readonly workspace: true }
            | { readonly type: 'user'; readonly user: Person }
    }
}

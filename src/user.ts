import { ExtractUnion } from './global'

interface UserBase {
    /** Always "user" */
    readonly object: 'user'
    /** Unique identifier for this user. */
    id: string
    /** User's name, as displayed in Notion. */
    readonly name: string | null
    /** Chosen avatar image. */
    readonly avatar_url: string | null
}

interface PersonUser extends UserBase {
    readonly type: 'person'
    /** Properties only present for non-bot users. */
    readonly person: {
        /** Email address of person. This is only present if an integration has user capabilities that allow access to email addresses. */
        readonly email: string
    }
}

interface BotUser extends UserBase {
    readonly type: 'bot'
    /** Properties only present for bot users. */
    readonly bot: {
        /** Information about who owns this bot. */
        readonly owner:
            | { readonly type: 'workspace'; readonly workspace: true }
            | { readonly type: 'user'; readonly user: PersonUser }
    }
}

export type UserType = (PersonUser | BotUser)['type']
export type User<T extends UserType = UserType> = ExtractUnion<
    PersonUser | BotUser,
    T
>

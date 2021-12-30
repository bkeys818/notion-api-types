import { Users, Properties } from '.'

export interface User {
    type: 'user'
    user: Users.Person
}
export interface Page {
    type: 'page'
    page: { id: string }
}
export interface Database {
    type: 'database'
    database: { id: string }
}
export interface Date {
    type: 'date'
    date: Properties.Pages.Date
}

export type Any = User | Page | Database | Date

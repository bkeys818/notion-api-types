export interface String {
    type: 'string'
    string: string | null
}
export interface Number {
    type: 'number'
    number: number | null
}
export interface Boolean {
    type: 'boolean'
    boolean: boolean
}
export interface Date {
    type: 'date'
    date: Date | null
}

export type Any = String | Number | Boolean | Date

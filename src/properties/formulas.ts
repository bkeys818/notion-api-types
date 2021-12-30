export interface String {
    type: 'string'
    string: string | null
}
export interface Number {
    type: 'number'
    string: number | null
}
export interface Boolean {
    type: 'boolean'
    string: boolean
}
export interface Date {
    type: 'date'
    string: Date | null
}

export type Any = String | Number | Boolean | Date
import { Type, TypeProperty } from '.'
import { toCamelCase } from '../'

export class Variable {
    static convertRefrences(str: string) {
        return str.replace(/('|")___.+?___\1/gi, $1 => $1.slice(4, -4))
    }

    constructor(name: string, public type: Type | TypeProperty) {
        this.name = toCamelCase(name)
    }
    public name: string

    toString() {
        return this.name
    }

    refrence(afterVar = '') {
        return `___${this.name}${afterVar}___`
    }
}

export class Decleration extends Variable {
    constructor(
        name: string,
        type: Type | TypeProperty,
        private readonly value: any,
        public exportMethod?: 'basic' | 'default'
    ) {
        super(name, type)
    }
    readonly modifiers: Modifier[] = []
    // modify: boolean = true

    define() {
        let value = this.value
        // if (this.modify) {
        value = JSON.parse(JSON.stringify(value))
        value = sort(value)
        value = forAllDeep(value, this.modifiers)
        value = JSON.stringify(value)
        // }
        let str = `const ${this.name}: ${this.type} = ${value}`
        if (this.exportMethod == 'basic') str = 'export ' + str
        else if (this.exportMethod == 'default')
            str += `\nexport default ${this.name}`
        return str
    }
}

export type Modifier = (key: string | number, value: unknown) => any

function forAllDeep(value: unknown, modifiers: Modifier[]) {
    if (value) {
        if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                const modifiedValue = modifiers
                    .map(modifier => modifier(i, value[i]))
                    .find(modified => (modified ? true : false))
                if (modifiedValue) value[i] = modifiedValue
                value[i] = forAllDeep(value[i], modifiers)
            }
        } else if (typeof value == 'object') {
            const obj = value as { [key: string]: unknown }
            for (const key in obj) {
                const modifiedValue = modifiers
                    .map(modifier => modifier(key, obj[key]))
                    .find(modified => (modified ? true : false))
                if (modifiedValue) obj[key] = modifiedValue
                obj[key] = forAllDeep(obj[key], modifiers)
            }
            return obj
        }
    }
    return value
}

function sort<T>(unordered: T): T {
    if (Array.isArray(unordered))
        for (let i = 0; i < unordered.length; i++)
            unordered[i] = sort(unordered[i])
    else if (typeof unordered == 'object' && unordered != null)
        return Object.keys(unordered)
            .sort()
            .reduce((obj: any, key) => {
                obj[key] = sort((unordered as any)[key])
                return obj
            }, {})
    return unordered
}

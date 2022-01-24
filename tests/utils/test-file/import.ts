import { Namespace, Type, Variable, Decleration } from '.'

type Importable = Namespace | Type | Variable | Decleration

export class Import {
    constructor(path: string, types: Importable[])
    constructor(path: string, type: Importable, isDefault: true)
    constructor(
        private readonly path: string,
        values: Importable | Importable[],
        private readonly importAsDefault?: true
    ) {
        this.values = Array.isArray(values) ? values : [values]
    }

    private readonly values: Importable[]

    toString() {
        let value = 'import '
        if (this.importAsDefault) value += this.values[0].name
        else {
            if (this.values.every(isTypeOrNamespace)) value += 'type '
            value += `{ ${this.values.join(', ')} }`
        }
        return value + ` from '${this.path}'`
    }
}

function isTypeOrNamespace(value: Importable): value is Type | Namespace {
    return value instanceof Type || value instanceof Namespace
}

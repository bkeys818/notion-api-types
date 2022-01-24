import { toCamelCase, capitalize } from '..'

class TypeSyntax {
    constructor(name: string) {
        this.name = capitalize(toCamelCase(name))
    }
    readonly name: string
    parent?: Namespace
    toString() {
        return this.parent ? this.parent + '.' + this.name : this.name
    }
}

export class Namespace extends TypeSyntax {
    constructor(name: string) {
        super(name)
    }
    newChildNamespace(name: string) {
        const namespace = new Namespace(name)
        namespace.parent = this
        return namespace
    }
    newChildType(name: string) {
        const type = new Type(name)
        type.parent = this
        return type
    }
}

export class Type extends TypeSyntax {
    constructor(name: string) {
        super(name)
        this.newTypeProp = newTypeProp.bind(this)
    }
    newTypeProp: typeof newTypeProp
}

export class TypeProperty {
    constructor(readonly name: string) {
        this.newTypeProp = newTypeProp.bind(this)
    }
    parent?: Type | TypeProperty
    newTypeProp: typeof newTypeProp
    toString() {
        return this.parent + `['${this.name}']`
    }
}

function newTypeProp(this: Type | TypeProperty, name: string) {
    const prop = new TypeProperty(name)
    prop.parent = this
    return prop
}

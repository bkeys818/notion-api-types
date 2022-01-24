import { Import } from './import'
import { Modifier, Decleration, Variable } from './variable'
export { Import, Decleration, Variable }
export * from './type'

import { readFileSync } from 'fs'
import { writeFile } from 'fs/promises'
import { format } from 'prettier'

const config = JSON.parse(readFileSync('./.prettierrc.json', 'utf8'))

export class TestFile {
    static globalModifiers: Modifier[] = []

    constructor(name: string, path: string) {
        this.filepath = `./tests/${path}/${name}.test.ts`
    }

    private readonly filepath: string

    readonly modifiers: Modifier[] = [...TestFile.globalModifiers]

    readonly imports: Import[] = []

    readonly declerations: Decleration[] = []
    addDecleration(...items: Decleration[]) {
        this.declerations.push(...items)
        for (const decleration of items) {
            if (decleration.exportMethod == 'basic')
                this.exports[decleration.name] = decleration
            else if (decleration.exportMethod == 'default')
                this.exports['default'] = decleration
        }
    }

    readonly exports: Record<string, Variable> = {}

    toString() {
        const varNames: string[] = []
        for (const decleration of this.declerations) {
            decleration.modifiers.push(...this.modifiers)

            let i = 1
            while (varNames.includes(decleration.name)) {
                decleration.name += i
                i++
            }
            varNames.push(decleration.name)
        }

        let data = [
            this.imports.join('\n'),
            ...this.declerations.map(dec => dec.define()),
        ].join('\n\n')
        data = Variable.convertRefrences(data)

        return data
    }

    async writeOut() {
        const data = format(this.toString(), {
            filepath: this.filepath,
            ...config,
        })
        return await writeFile(this.filepath, data)
    }
}

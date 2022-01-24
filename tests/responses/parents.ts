import { TestFile, Import, Namespace, Type, Decleration } from '../utils'
import type { NotionResponse } from '../../types'

export function createTests(parnets: NotionResponse.Parent[]) {
    const testFile = new TestFile('parents', 'responses')

    const parentsNamespace = new Namespace('Parents')
    const parentType = new Type('Parent')
    testFile.imports.push(
        new Import('../../types/responses', [parentsNamespace, parentType])
    )

    for (const parent of parnets) {
        const type = parentsNamespace.newChildType(parent.type)
        testFile.addDecleration(new Decleration(parent.type, type, parent))
    }

    testFile.addDecleration(
        new Decleration(
            'mentions',
            new Type(`${parentType}[]`),
            testFile.declerations.map(dec => dec.refrence()),
            'default'
        )
    )

    return testFile
}

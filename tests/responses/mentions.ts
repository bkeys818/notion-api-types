import { TestFile, Import, Namespace, Type, Decleration } from '../utils'
import type { NotionResponse } from '../..'

export function createTests(mentions: NotionResponse.Mention[]) {
    const testFile = new TestFile('mentions', 'responses')

    const mentionsNamespace = new Namespace('Mentions')
    const mentionType = new Namespace('Mention')
    testFile.imports.push(
        new Import('../../types/responses', [mentionsNamespace, mentionType])
    )

    for (const mention of mentions) {
        const type = mentionsNamespace.newChildType(mention.type)
        testFile.addDecleration(new Decleration(mention.type, type, mention))
    }

    testFile.addDecleration(
        new Decleration(
            'mentions',
            new Type(`${mentionType}[]`),
            testFile.declerations.map(dec => dec.refrence()),
            'default'
        )
    )

    return testFile
}

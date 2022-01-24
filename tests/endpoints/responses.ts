import { TestFile, Import, Namespace, Type, Decleration } from '../utils'
import type { Responses } from '../test-data'

export function writeTest(responses: Responses) {
    const path = 'endpoints/responses'
    const testFiles: Record<keyof Responses, TestFile> = {
        blocks: new TestFile('blocks', path),
        databases: new TestFile('databases', path),
        pages: new TestFile('pages', path),
        search: new TestFile('search', path),
        users: new TestFile('users', path),
    }

    let resKey: keyof Responses
    for (resKey in testFiles) {
        const namespace = new Namespace(resKey)
        testFiles[resKey].imports.push(
            new Import('../../../types/endpoints', [namespace])
        )

        for (const [key, value] of Object.entries(responses[resKey])) {
            let endpointName = key
            // for blocks.children endpoints
            if (endpointName.startsWith('children'))
                endpointName = endpointName.replace(
                    /[a-z][A-Z]/g,
                    $1 => `${$1[0]}.${$1[1]}`
                )
            // delete is an invalid variable name
            let name = key
            if (key == 'delete') name = 'remove'
            let type: Type
            if (key == 'search') type = namespace.newChildType('Response')
            else
                type = namespace
                    .newChildNamespace(endpointName)
                    .newChildType('Response')
            testFiles[resKey].declerations.push(
                new Decleration(name + 'Res', type, value)
            )
        }
    }

    return testFiles
}

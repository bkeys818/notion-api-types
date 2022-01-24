import { TestFile, Unwrap } from './utils'
import { sortTestData } from './test-data'
import * as endpointResponses from './endpoints/responses'
import * as responses from './responses'

async function createTests() {
    const testData = await sortTestData()

    TestFile.globalModifiers.push(standardizeProps)

    const endpointResponsesTest = endpointResponses.writeTest(
        testData.responses
    )

    // const tests: Partial<
    //     Record<'mentions' | 'richTexts' | 'blocks' | 'parents', TestFile>
    // > = {}

    // tests.parents = responses.parents.createTests(testData.parents)
    // tests.mentions = responses.mentions.createTests(testData.mentions)
    // tests.richTexts = responses.richTexts.createTests(
    //     testData.richTexts,
    //     tests.mentions.exports.default
    // )
    // tests.blocks = responses.blocks.createTests(
    //     testData.blocks,
    //     tests.richTexts.exports.default
    // )

    return await Promise.all(
        //     Object.values(tests).map(testFile => testFile.writeOut())
        Object.values(endpointResponsesTest).map(testFile =>
            testFile.writeOut()
        )
    )
}

/**
 * Modifies the value of properties that meet one of the following:
 * - Changes value with every call
 * - Holds private data
 */
function standardizeProps(key: string | number, value: unknown) {
    if (typeof key == 'string' && typeof value == 'string') {
        if (key.endsWith('_id') || changingKeys.includes(key))
            return 'some_' + key
        if (privateKeys.includes(key)) return `hidden_${key}`
    }
}
const changingKeys = ['url', 'href', 'id', 'created_time', 'last_edited_time']
const privateKeys = ['email']

createTests()

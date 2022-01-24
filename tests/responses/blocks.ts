import { TestFile, Import, Namespace, Decleration, Variable } from '../utils'
import type { NotionResponse } from '../..'

export function createTests(
    blocks: NotionResponse.Block[],
    richTexts: Variable
) {
    const testFile = new TestFile('blocks', 'responses')

    const blocksNamespace = new Namespace('Blocks')
    testFile.imports.push(
        ...[
            new Import('../../types/responses', [blocksNamespace]),
            new Import('./rich-texts.test', richTexts, true),
        ]
    )

    for (const block of blocks) {
        if (
            block.type != 'synced_block' &&
            testFile.declerations.find(dec => {
                if (dec.name == block.type) return dec
            })
        )
            continue
        const type = blocksNamespace.newChildType(block.type)
        testFile.addDecleration(new Decleration(block.type, type, block))
    }

    testFile.modifiers.push(key => {
        if (key == 'text' || key == 'caption') return richTexts.refrence()
        if (key == 'cells') return [richTexts.refrence()]
    })

    return testFile
}

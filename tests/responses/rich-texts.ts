import {
    TestFile,
    Import,
    Namespace,
    Type,
    TypeProperty,
    Decleration,
    Variable,
} from '../utils'
import type { NotionResponse } from '../../types'

export function createTests(
    richTexts: NotionResponse.RichText[],
    mentions: Variable
) {
    const testFile = new TestFile('rich-texts', 'responses')

    const richTextsNamespace = new Namespace('RichTexts')
    const richTextType = new Type('RichText')
    testFile.imports.push(
        ...[
            new Import('../../types/responses', [
                richTextsNamespace,
                richTextType,
            ]),
            new Import('./mentions.test', mentions, true),
        ]
    )

    const annotationsType = richTextType.newTypeProp('annotations')
    const annotations = new Decleration(
        'annotations',
        annotationsType,
        richTexts[0].annotations
    )
    testFile.addDecleration(annotations)

    for (const richText of richTexts) {
        if (
            testFile.declerations.find(dec => {
                if (dec.name == richText.type) return dec
            })
        )
            continue
        const type = richTextsNamespace.newChildType(richText.type)
        testFile.addDecleration(new Decleration(richText.type, type, richText))
    }

    testFile.addDecleration(
        new Decleration(
            'richTexts',
            new Type(`${richTextType}[]`),
            testFile.declerations.map(dec => dec.refrence()).slice(1),
            'default'
        )
    )

    testFile.modifiers.push(key => {
        if (key == 'annotations') return annotations.refrence()
        else if (key == 'mention') return mentions.refrence('[0]')
    })

    return testFile
}

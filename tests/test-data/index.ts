import request from './request'
import params from './params'
import { callAllEndpoints } from './endpoints'
export type { Responses } from './endpoints'
import { createIsType } from '../utils'
import type { NotionResponse } from '../..'

export async function sortTestData() {
    const [searchTestPage, searchTestDatabase] = await Promise.all([
        request(params.search('page', 'Automated Test')),
        request(params.search('database', 'Database For Testing')),
    ])

    const [allResponses, independentTestData] = await Promise.all([
        callAllEndpoints(searchTestPage),
        getIndependentTestData(searchTestDatabase.results[0].id),
    ])

    const parents: NotionResponse.Parent[] = [
        allResponses.databases.create.parent, // 'page_id'
        allResponses.pages.create.parent, // 'databaes_id'
        searchTestDatabase.results[0].parent, // 'workspace'
    ]

    const pageProps = Object.values(independentTestData.page.properties)

    const richTexts = pageProps
        .filter(createIsType('rich_text'))
        .flatMap(prop => prop.rich_text)

    const mentions = richTexts
        .filter(createIsType('mention'))
        .flatMap(richText => richText.mention)

    return {
        responses: allResponses,
        ...independentTestData,
        parents,
        pageProps,
        richTexts,
        mentions,
    }
}

async function getIndependentTestData(testDatabaseId: string) {
    const page = (await request(params.databases.query(testDatabaseId)))
        .results[0]

    const blocks = (await request(params.blocks.children.retrieve(page.id)))
        .results

    const columnBlock = blocks.find(createIsType('column_list'))
    const tableBlock = blocks.find(createIsType('table'))
    if (!columnBlock) throw new Error(`Couldn't find column_list block`)
    if (!tableBlock) throw new Error(`Couldn't find table block`)

    // Add 'column' and 'table_row' type blocks to the array
    await Promise.all([
        request(params.blocks.children.retrieve(columnBlock.id)),
        request(params.blocks.children.retrieve(tableBlock.id)),
    ]).then(res => blocks.push(...res.map(children => children.results[0])))

    return { page, blocks }
}

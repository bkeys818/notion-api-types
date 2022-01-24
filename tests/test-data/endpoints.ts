import request from './request'
import params from './params'
import type { Endpoints } from '../..'

export async function callAllEndpoints(
    automatedTestSearch: Endpoints.Search.Response
): Promise<Responses> {
    const parentPageId = automatedTestSearch.results[0].id
    const [databasesCreate, usersListAll, usersRetrieveMyBot] =
        await Promise.all([
            request(params.databases.create(parentPageId)),
            request(params.users.listAll()),
            request(params.users.retrieveMyBot()),
        ])

    const databaseId = databasesCreate.id
    const userId = usersListAll.results[0].id
    const [databasesUpdate, usersRetrieve] = await Promise.all([
        request(params.databases.update(databaseId)),
        request(params.users.retrieve(userId)),
    ])

    const [pagesCreate, databasesRetrieve] = await Promise.all([
        request(params.pages.create(databaseId)),
        request(params.databases.retrieve(databaseId)),
    ])

    const pageId = pagesCreate.id
    const [blocksChildrenRetrieve, pagesUpdate] = await Promise.all([
        request(params.blocks.children.retrieve(pageId)),
        request(params.pages.update(pageId, userId)),
    ])

    const paragraphBlockId = blocksChildrenRetrieve.results[0].id
    const syncBlockId = blocksChildrenRetrieve.results[1].id
    const [databasesQuery, pagesRetrieve, blocksUpdate, blocksChildrenAppend] =
        await Promise.all([
            request(params.databases.query(databaseId)),
            request(params.pages.retrieve(pageId)),
            request(
                params.blocks.update(paragraphBlockId, [
                    pageId,
                    databaseId,
                    // userId,
                ])
            ),
            request(
                params.blocks.children.append(pageId, syncBlockId, databaseId)
            ),
        ])

    const blocksRetrieve = await request(params.blocks.retrieve(pageId))

    const blocksDelete = await request(params.blocks.deleteBlock(databaseId))

    return {
        blocks: {
            delete: blocksDelete,
            retrieve: blocksRetrieve,
            update: blocksUpdate,
            childrenAppend: blocksChildrenAppend,
            childrenRetrieve: blocksChildrenRetrieve,
        },
        databases: {
            create: databasesCreate,
            query: databasesQuery,
            retrieve: databasesRetrieve,
            update: databasesUpdate,
        },
        pages: {
            create: pagesCreate,
            update: pagesUpdate,
            retrieve: pagesRetrieve,
        },
        search: { search: automatedTestSearch },
        users: {
            retrieve: usersRetrieve,
            listAll: usersListAll,
            retrieveMyBot: usersRetrieveMyBot,
        },
    }
}

export type Responses = {
    blocks: {
        childrenAppend: Endpoints.Blocks.Children.Append.Response
        childrenRetrieve: Endpoints.Blocks.Children.Retrieve.Response
        delete: Endpoints.Blocks.Delete.Response
        retrieve: Endpoints.Blocks.Retrieve.Response
        update: Endpoints.Blocks.Update.Response
    }
    databases: {
        create: Endpoints.Databases.Create.Response
        query: Endpoints.Databases.Query.Response
        retrieve: Endpoints.Databases.Retrieve.Response
        update: Endpoints.Databases.Update.Response
    }
    pages: {
        create: Endpoints.Pages.Create.Response
        retrieve: Endpoints.Pages.Retrieve.Response
        update: Endpoints.Pages.Update.Response
    }
    search: {
        search: Endpoints.Search.Response
    }
    users: {
        listAll: Endpoints.Users.ListAll.Response
        retrieve: Endpoints.Users.Retrieve.Response
        retrieveMyBot: Endpoints.Users.RetrieveMyBot.Response
    }
}

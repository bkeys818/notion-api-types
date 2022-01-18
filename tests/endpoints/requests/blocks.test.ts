import {
    Retrieve,
    Delete,
    Update,
    Children,
} from '../../../types/endpoints/blocks'
import { headers } from './global'
import { blocks, richTexts } from '../../requests'

export const retrieve = (token: string, blockId: string): Retrieve.Request => ({
    endpoint: `blocks/${blockId}`,
    headers: headers(token),
    method: 'GET',
})

export const update = (
    token: string,
    paragraphBlockId: string,
    mentionArgs: Parameters<typeof richTexts.allMentions>
): Update.Request => ({
    endpoint: `blocks/${paragraphBlockId}`,
    headers: headers(token),
    method: 'PATCH',
    params: {
        paragraph: {
            text: richTexts.allMentions(...mentionArgs),
        },
    },
})

export const deleteBlock = (
    token: string,
    blockId: string
): Delete.Request => ({
    endpoint: `blocks/${blockId}`,
    headers: headers(token),
    method: 'DELETE',
})

export const children: {
    readonly retrieve: (
        token: string,
        blockId: string
    ) => Children.Retrieve.Request
    readonly append: (
        token: string,
        blockId: string,
        syncID: string,
        pageIdForlink: string
    ) => Children.Append.Request
} = {
    retrieve: (token, blockId) => ({
        endpoint: `blocks/${blockId}/children`,
        headers: headers(token),
        method: 'GET',
    }),
    append: (token, blockId, syncID, databaseIdForlink) => ({
        endpoint: `blocks/${blockId}/children`,
        headers: headers(token),
        method: 'PATCH',
        params: {
            children: [
                blocks.paragraph,
                blocks.heading1,
                blocks.heading2,
                blocks.heading3,
                blocks.bulletedListItem,
                blocks.numberedListItem,
                blocks.toDo,
                blocks.toggle,
                blocks.embed,
                blocks.image,
                blocks.video,
                blocks.file,
                blocks.pdf,
                blocks.bookmark,
                blocks.callout,
                blocks.quote,
                blocks.equation,
                blocks.divider,
                blocks.tableOfContents,
                blocks.breadcrumb,
                blocks.columnList,
                blocks.syncedBlock(syncID),
                blocks.template,
                blocks.linkToPage(databaseIdForlink),
                blocks.table,
            ],
        },
    }),
}

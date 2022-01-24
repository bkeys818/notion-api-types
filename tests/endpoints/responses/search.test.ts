import type { Search } from '../../../types/endpoints'

const searchRes: Search.Response = {
    has_more: false,
    next_cursor: null,
    object: 'list',
    results: [
        {
            archived: false,
            cover: null,
            created_time: 'some_created_time',
            icon: null,
            id: 'some_id',
            last_edited_time: 'some_last_edited_time',
            object: 'page',
            parent: { type: 'workspace', workspace: true },
            properties: {
                title: {
                    id: 'some_id',
                    title: [
                        {
                            annotations: {
                                bold: false,
                                code: false,
                                color: 'default',
                                italic: false,
                                strikethrough: false,
                                underline: false,
                            },
                            href: null,
                            plain_text: 'Automated Test',
                            text: { content: 'Automated Test', link: null },
                            type: 'text',
                        },
                    ],
                    type: 'title',
                },
            },
            url: 'some_url',
        },
    ],
}

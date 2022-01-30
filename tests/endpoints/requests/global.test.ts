import type { RequestTemplate } from '../../../types/endpoints/global'

export const headers: RequestTemplate['headers'] = {
    'Notion-Version': '2021-08-16',
    Authorization: `Bearer TOKEN`,
}

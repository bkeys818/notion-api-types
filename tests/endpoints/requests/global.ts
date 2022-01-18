import { RequestTemplate } from '../../../types/endpoints/global'

export const headers = (token: string): RequestTemplate['headers'] => ({
    'Notion-Version': '2021-08-16',
    Authorization: `Bearer ${token}`,
})

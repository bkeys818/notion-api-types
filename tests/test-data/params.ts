import dotenv from 'dotenv'
import * as paramsWithToken from '../endpoints/requests'

dotenv.config()
const params = (() => {
    const { NOTION_TOKEN } = process.env
    if (!NOTION_TOKEN) throw 'Missing env variable'
    return removeTokenParam(paramsWithToken, NOTION_TOKEN)
})()
export default params

function removeTokenParam<T extends FuncsObj>(
    obj: T,
    token: string
): WithoutTokenParam<typeof obj> {
    const results: any = {}

    for (const key in obj) {
        const value = obj[key]
        if (typeof value == 'function')
            results[key] = (...args: any[]) => value(token, ...args)
        else results[key] = removeTokenParam(value, token)
    }

    return results
}
type FuncsObj = {
    [key: string]: ((token: string, ...args: any[]) => any) | FuncsObj
}
type WithoutTokenParam<T> = {
    [K in keyof T]: T[K] extends (token: string, ...args: infer A) => infer R
        ? (...args: A) => R
        : WithoutTokenParam<T[K]>
}

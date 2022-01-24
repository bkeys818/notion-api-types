import fetch, { RequestInit } from 'node-fetch'
import type { Endpoints } from '../../types'

export default async function request<
    A extends Parameters<Endpoint>[0],
    R extends ExtractReturnType<Endpoint, A>
>(args: A): Promise<R> {
    const { endpoint, headers, method } = args
    const url = new URL('https://api.notion.com/v1/' + endpoint)
    const init: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    }
    if ('params' in args) {
        if (method == 'GET') {
            for (const key in args.params) {
                url.searchParams.set(key, (args.params as any)[key].toString())
            }
        } else init.body = JSON.stringify(args.params)
    }

    const res = await fetch(url.href, init)
    const json = await res.json()
    if (json.object == 'error') throw new Error(JSON.stringify(json))
    else return json
}

// prettier-ignore
type Endpoint =
    | Func<Endpoints.Databases.Retrieve.Request, Endpoints.Databases.Retrieve.Response>
    | Func<Endpoints.Databases.Query.Request, Endpoints.Databases.Query.Response>
    | Func<Endpoints.Databases.Create.Request, Endpoints.Databases.Create.Response>
    | Func<Endpoints.Databases.Update.Request, Endpoints.Databases.Update.Response>
    | Func<Endpoints.Pages.Retrieve.Request, Endpoints.Pages.Retrieve.Response>
    | Func<Endpoints.Pages.Create.Request, Endpoints.Pages.Create.Response>
    | Func<Endpoints.Pages.Update.Request, Endpoints.Pages.Update.Response>
    | Func<Endpoints.Blocks.Retrieve.Request, Endpoints.Blocks.Retrieve.Response>
    | Func<Endpoints.Blocks.Update.Request, Endpoints.Blocks.Update.Response>
    | Func<Endpoints.Blocks.Delete.Request, Endpoints.Blocks.Delete.Response>
    | Func<Endpoints.Blocks.Children.Retrieve.Request, Endpoints.Blocks.Children.Retrieve.Response>
    | Func<Endpoints.Blocks.Children.Append.Request, Endpoints.Blocks.Children.Append.Response>
    | Func<Endpoints.Users.Retrieve.Request, Endpoints.Users.Retrieve.Response>
    | Func<Endpoints.Users.ListAll.Request, Endpoints.Users.ListAll.Response>
    | Func<Endpoints.Users.RetrieveMyBot.Request, Endpoints.Users.RetrieveMyBot.Response>
    | Func<Endpoints.Search.Request, Endpoints.Search.Response>

type Func<A, R> = (args: A) => R

type ExtractReturnType<T extends (...args: any[]) => any, A> = T extends T
    ? Parameters<T>[0] extends A
        ? A extends Parameters<T>[0]
            ? ReturnType<T>
            : never
        : never
    : never

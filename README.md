# Notion API Types

> Types for the [Notion API](https://developers.notion.com)

[![Version][version-image]][version-link]
[![Downloads Stats][npm-downloads]][npm-link]
[![Run test][test-status]][test-link]

This package defines types for the Notion API responses.
It contains only `*.d.ts` files, so it won't increase the size of a compressed package.

## Installation

Yarn:

```sh
yarn add --D notion-api-types
```

## Usage

This module is built so you can import from the directories in it.
You can import the top namespaces, but it will make for long code.

```ts
import type { Page, PageProperty } from 'notion-api-types/responses'
```

Throughout the module,
[namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)
will have plural names and
[types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
will be singular.

```ts
import type { Page, PageProperty, PageProperties } from 'notion-api-types/responses'

const page: Page = { ... }
const props: PageProperty[] = Object.values(page.properties)
let title: PageProperties.Title
for (const prop of props)
    if (prop.type == 'title') title = prop
```

If the property type is already known use
[type assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions).

```ts
import type { Page, PageProperties } from 'notion-api-types/response'

const page: Page = { ... }
const title = page.properties.Title as PageProperties.Title
```

Using
[import type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
will keep the module from increase the size of your compiled javascript.

<!-- Markdown link & img dfn's -->

[version-image]: https://img.shields.io/github/package-json/v/bkeys818/notion-api-types/v0.3.0?label=version
[version-link]: https://github.com/bkeys818/notion-api-types/releases/tag/v0.3.0
[npm-downloads]: https://img.shields.io/npm/dm/notion-api-types.svg
[npm-link]: https://www.npmjs.com/package/notion-api-types/v/0.3.0
[test-status]: https://github.com/bkeys818/notion-api-types/actions/workflows/push-to-main.yaml/badge.svg?branch=main&event=push
[test-link]: https://github.com/bkeys818/notion-api-types/actions/workflows/push-to-main.yaml

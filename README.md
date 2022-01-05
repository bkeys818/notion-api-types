# Notion API Types

> Types for the [Notion API](https://developers.notion.com)

[![Version][version-image]][version-link]
[![Run test][test-status]][test-link]
[![Downloads Stats][npm-downloads]][npm-link]

This package defines types for the Notion API responses. It conatians only `*.d.ts` files, so it won't increase the size of a compressed package.

## Installation

Yarn:

```sh
yarn add --D notion-api-types
```

## Usage

Any type with a `'type'` property can be used with or without a generic parameter value. Without a generic parameter value, the type will default to any of the possible values (as a union). With a generic parameter value, it will be the type where the `'type'` property is that value.

```ts
import type { Page, PageProperty } from 'notion-api-types'

const page: Page = { ... }
let title: PageProperty<'title'>
if (page.properties.Title.type == 'title')
  title = page.properties.Title
```

If the property type is already known use [Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

```ts
import type { Page, PageProperty } from 'notion-api-types'

const page: Page = { ... }
const title = page.properties.Title as PageProperty<'title'>
```

<!-- Markdown link & img dfn's -->

[version-image]: https://img.shields.io/github/package-json/v/bkeys818/notion-api-types
[version-link]: https://github.com/bkeys818/notion-api-types/releases/tag/v0.2.0
[npm-downloads]: https://img.shields.io/npm/dm/notion-api-types.svg
[npm-link]: https://www.npmjs.com/package/notion-api-types/v/0.2.0
[test-status]: https://github.com/bkeys818/notion-api-types/actions/workflows/push-to-main.yaml/badge.svg?branch=main&event=push
[test-link]: https://github.com/bkeys818/notion-api-types/actions/workflows/push-to-main.yaml

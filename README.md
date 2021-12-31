# Notion API Types

> Types for the [Notion API](https://developers.notion.com)

[![Version][version-image]][version-link]
[![Run test][test-status]](test-link)
[![Downloads Stats][npm-downloads]](npm-link)

## Installation

Yarn:

```sh
yarn add --D notion-api-types
```

## Usage example

```ts
import type { Page, Properties } from 'notion-api-types'

const page: Page = { ... }

const title = page.properties.Title as Properties.Pages.Title
```

[version-image]: https://img.shields.io/github/package-json/v/bkeys818/notion-api-types
[version-link]: https://github.com/bkeys818/notion-api-types/releases/tag/v0.2.0
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg
[npm-link]: https://npmjs.org/package/notion-api-types/
[test-status]: https://github.com/bkeys818/notion-api-types/actions/workflows/push-to-main.yaml/badge.svg?branch=main&event=push
[test-link]: https://github.com/bkeys818/notion-api-types/actions/workflows/push-to-main.yaml

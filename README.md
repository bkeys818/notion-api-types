# Notion API Types

> Types for the [Notion API](https://developers.notion.com)

[![Version][version-image]][version-link]
[![Run test][test-status]][test-link]
[![Downloads Stats][npm-downloads]][npm-link]

One to two paragraph statement about your product and what it does.

## Installation

Yarn:

```sh
yarn add --D notion-api-types
```

## Usage example

A few motivating and useful examples of how your product can be used. Spice this up with code blocks and potentially more screenshots.

```ts
import type { Page, Properties } from 'notion-api-types'

const page: Page = { ... }

const title = page.properties.Title as Properties.Pages.Title
```

_For more examples and usage, please refer to the [Wiki][wiki]._

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[version-image]: https://img.shields.io/github/package-json/v/bkeys818/notion-api-types
[version-link]: https://github.com/bkeys818/notion-api-types/releases/tag/v0.2.0
[npm-downloads]: https://img.shields.io/npm/dm/notion-api-types.svg
[npm-link]: https://www.npmjs.com/package/notion-api-types/v/0.2.0
[test-status]: https://github.com/bkeys818/notion-api-types/actions/workflows/push-to-main.yaml/badge.svg?branch=main&event=push
[test-link]: https://github.com/bkeys818/notion-api-types/actions/workflows/push-to-main.yaml

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push

- [Example 1](https://www.example.com)
- [Example 2](https://www.example.com)

### Installing

A step by step series of examples that tell you how to get a development
environment running

Say what the step will be

    Give the example

And repeat

    until finished

End with an example of getting some data out of the system or using it
for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Sample Tests

Explain what these tests test and why

    Give an example

### Style test

Checks if the best practices and the right coding style has been used.

    Give an example

## Deployment

Add additional notes to deploy this on a live system

## Built With

- [Contributor Covenant](https://www.contributor-covenant.org/) - Used
  for the Code of Conduct
- [Creative Commons](https://creativecommons.org/) - Used to choose
  the license

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code
of conduct, and the process for submitting pull requests to us.

## Versioning

We use [Semantic Versioning](http://semver.org/) for versioning. For the versions
available, see the [tags on this
repository](https://github.com/PurpleBooth/a-good-readme-template/tags).

## Authors

- **Billie Thompson** - _Provided README Template_ -
  [PurpleBooth](https://github.com/PurpleBooth)

See also the list of
[contributors](https://github.com/PurpleBooth/a-good-readme-template/contributors)
who participated in this project.

## License

This project is licensed under the [CC0 1.0 Universal](LICENSE.md)
Creative Commons License - see the [LICENSE.md](LICENSE.md) file for
details

## Acknowledgments

- Hat tip to anyone whose code is used
- Inspiration
- etc

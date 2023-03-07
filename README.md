# typescript-library-template

A starter template for TypeScript libraries. Use this repository as a starting point for your own TypeScript library. This template includes the following features:

- Compiles TypeScript code using both the `tsconfig.json` and `tsconfig.module.json` files.
- Formats TypeScript code using [Prettier](https://prettier.io).
- Lints TypeScript code using [ESLint](https://eslint.org).
- Runs unit tests using [AVA](https://github.com/avajs/ava).
- Generates code coverage reports using NYC.
- Generates HTML documentation using [TypeDoc](https://typedoc.org).
- Uses [Husky](https://github.com/typicode/husky) Git hooks and [Lint-staged](https://github.com/okonet/lint-staged) pre-commit hooks.

## Installation

Clone the repository:

```bash
git clone https://github.com/amelspahic/typescript-library-template.git
```

Install the dependencies:

```bash
npm install
```

There are several scripts available to help you get started:

---

Compile the TypeScript code using both the `tsconfig.json` and `tsconfig.module.json` files.

```bash
npm run build
```

---

Formats the TypeScript code using Prettier and lints the code using ESLint, fixing any issues found.

```bash
npm run fix
```

---

Lints the TypeScript code using ESLint, checks the code formatting using Prettier, and runs the unit tests using AVA.

```bash
npm run test
```

---

Watches for changes in the TypeScript code and recompiles the code using `tsconfig.json`.

```bash
npm run watch:build
```

---

Watches for changes in the TypeScript code and re-runs the unit tests using AVA.

```bash
npm run watch:test
```

---

Generates an HTML report of the code coverage using NYC and opens the report in the browser.

```bash
npm run cov
```

---

Generates HTML documentation of the TypeScript code and opens the documentation in the browser.

```bash
npm run doc
```

---

The template uses [Husky](https://github.com/typicode/husky) and [Lint-staged](https://github.com/okonet/lint-staged) to run pre-commit hooks that ensure your code is formatted, linted, tested, and documented before committing.

---

For more information on available scripts, see the `Scripts` section of the `package.json` file.

## Contributing

To contribute to the project, please follow the guidelines for submitting issues and pull requests.

## License

This project is licensed under the MIT License.

## Acknowledgements

This project uses Prettier, ESLint, AVA, NYC, Husky, Lint-staged, TypeDoc.

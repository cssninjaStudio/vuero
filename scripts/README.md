# Scripts folder

This folder hold utilities scripts for the project.

The [./prepare-shiki.ts] is used to copy shiki assets (themes, and wasm)
to public directory so they can be used by the app,
it's run when `pnpm install` is run via the `prepare` script.

We are using the [./generate-screenshots.sh](./generate-screenshots.sh) script
to generate screenshot displayed on the homepage:

- convert routes to test from [../cypress/fixtures/routes.ts](../cypress/fixtures/routes.ts)
- runs cypress which will create high resolutions screen from a runing app
- converts screenshots to webp using [cwebp](https://developers.google.com/speed/webp/docs/cwebp) from google
- create [../src/data/landing](../src/data/landing) index json files

This is only intended to be an example.

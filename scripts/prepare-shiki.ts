import { copy } from 'fs-extra'

const dereference = process.platform === 'win32' ? true : undefined

async function main() {
  // Copy shiki assets to public folder, so that they can be lazy loaded
  // from the browser
  await copy('node_modules/shiki/languages', 'public/shiki/languages', {
    dereference,
  })
  await copy('node_modules/shiki/themes', 'public/shiki/themes', {
    dereference,
  })

  // Copy oniguruma wasm source used by shiki to render code blocks
  // Not same folder because it a dependency of shiki, pnpm will hoist it
  await copy(
    'node_modules/vscode-oniguruma/release/onig.wasm',
    'public/shiki/dist/onig.wasm',
    {
      dereference,
    }
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

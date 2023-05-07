/**
 * We can extends the env types here
 * @see https://vitejs.dev/guide/env-and-mode.html#env-files
 */

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_API_BASE_URL: string | undefined
  readonly VITE_MAPBOX_ACCESS_TOKEN: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

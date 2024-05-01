import type { ResolvedConfig, InlineConfig } from 'vite'
import colors from 'picocolors'
import { mergeConfig, build as viteBuild } from 'vite'

export async function buildApp({
  config,
  viteConfig,
  outStatic,
  outServer,
}: {
  config: ResolvedConfig
  viteConfig: InlineConfig
  outStatic: string
  outServer: string
}) {
  config.logger.info(colors.green('[SSG] Build for client...'))
  await viteBuild(
    mergeConfig(viteConfig, {
      define: {
        __VUERO_SSR_BUILD__: true,
      },
      build: {
        ssrManifest: true,
        outDir: outStatic,
      },
      mode: config.mode,
    }),
  )

  // server
  config.logger.info(colors.green('[SSG] Build for server...'))
  await viteBuild(
    mergeConfig(viteConfig, {
      define: {
        __VUERO_SSR_BUILD__: 'true',
      },
      build: {
        ssr: 'src/entry-server.ts',
        outDir: outServer,
      },
      mode: config.mode,
    }),
  )
}

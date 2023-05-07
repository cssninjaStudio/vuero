import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'seeui4',
  e2e: {
    baseUrl: 'http://localhost:5000',
    video: false,
    chromeWebSecurity: false,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    viewportWidth: 1274,
    viewportHeight: 714,
    execTimeout: 5000,
    taskTimeout: 5000,
    pageLoadTimeout: 10000,
    responseTimeout: 10000,
    numTestsKeptInMemory: 0,
  },

  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
})

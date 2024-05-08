declare namespace NodeJS {
  interface Process {
    electronApp: import('node:child_process').ChildProcess
  }
  interface ProcessEnv {
    NODE_ENV: 'development' | 'test' | 'production'
    
    VSCODE_DEBUG?: 'true'
    /**
     * The built directory structure
     *
     * ```tree
     * ├─┬ dist-electron
     * │ ├─┬ main
     * │ │ └── index.js    > Electron-Main
     * │ └─┬ preload
     * │   └── index.mjs   > Preload-Scripts
     * └─┬ dist
     *   └── index.html    > Electron-Renderer
     * ```
     */
    APP_ROOT: string
    /** /dist/ or /public/ */
    VITE_PUBLIC: string
  }
}

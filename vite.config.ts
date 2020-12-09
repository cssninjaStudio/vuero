import path from 'path'

export default {
  base: '/',
  optimizeDeps: {
    include: ['dayjs/plugin/relativeTime', 'dayjs/locale/en-gb'],
  },
  alias: {
    '/@src/': path.resolve(__dirname, 'src'),
    '/@images/': path.resolve(__dirname, 'images'),
  },
  resolvers: [
    {
      alias(id: string) {
        return id.replace(/^@(src|images)\//, '/@$1/') // add slash to particular id, then vite won't resolve it as a module
      },
    },
  ],
}

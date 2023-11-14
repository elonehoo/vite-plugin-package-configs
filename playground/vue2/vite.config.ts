import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import PKG from 'vite-plugin-package-configs'

console.log(path.resolve(__dirname, 'src'))
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    PKG(),
  ],
})

import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
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
    PKG()
  ]
})

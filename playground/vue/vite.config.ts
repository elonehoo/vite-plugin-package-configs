import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import PKG from 'vite-plugin-package-configs'

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

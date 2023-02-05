import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
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

import preact from '@preact/preset-vite'
import { defineConfig } from 'vite'
import PKG from 'vite-plugin-package-configs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    PKG(),
  ],
})

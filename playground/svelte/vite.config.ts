import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import PKG from 'vite-plugin-package-configs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    PKG(),
  ],
})

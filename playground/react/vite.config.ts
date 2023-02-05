import { defineConfig,PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import PKG from 'vite-plugin-package-configs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    PKG() as PluginOption
  ],
})

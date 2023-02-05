import { defineConfig } from 'vite'
import PKG from 'vite-plugin-package-configs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins:[
    PKG()
  ],
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})

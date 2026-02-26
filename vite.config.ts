import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  // Use the repo name as base only for production build
  base: mode === 'production' ? '/Valmiki-Ramayana-Conference-2026/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        print: 'print.html',
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
}))

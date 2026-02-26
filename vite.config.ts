import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
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
})

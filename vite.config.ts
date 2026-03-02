import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        print: 'print.html',
      },
    },
  },
  plugins: [],
}))

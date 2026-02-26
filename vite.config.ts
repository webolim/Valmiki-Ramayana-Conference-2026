import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // TODO: Set this to your repository name if deploying to https://webolim.github.io/Valmiki-Ramayana-Conference-2026/
  // Example: base: '/my-project/',
  base: '/Valmiki-Ramayana-Conference-2026/', 
  plugins: [
    tailwindcss(),
  ],
})

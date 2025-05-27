import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cprg-308-responsive-design-demo/',  //required for GitHub Pages
  plugins: [react()],
})

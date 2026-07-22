import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed at the domain root (deshan.dev), so base = '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})

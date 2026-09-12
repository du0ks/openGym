import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  // .env lives at the repo root (docs/README say `cp .env.example .env` there), not inside
  // frontend/ — Vite otherwise only looks next to this config file and silently sees nothing.
  envDir: '..',
  build: { chunkSizeWarningLimit: 1500 }
})

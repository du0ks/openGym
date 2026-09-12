import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const media = process.env.MEDIA_TARGET || 'http://127.0.0.1:8888'

export default defineConfig({
  plugins: [react()],
  base: './',
  // .env lives at the repo root (docs/README say `cp .env.example .env` there), not inside
  // frontend/ — Vite otherwise only looks next to this config file and silently sees nothing.
  envDir: '..',
  server: {
    proxy: {
      '/img': { target: media, changeOrigin: true },
      '/gif': { target: media, changeOrigin: true }
    }
  },
  build: { chunkSizeWarningLimit: 1500 }
})

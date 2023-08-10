import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Customize your CSP here, if needed
        // For example:
        intro: "Content-Security-Policy: script-src 'self' 'wasm-unsafe-eval' https://apis.google.com/;"
      }
    }
  }
})

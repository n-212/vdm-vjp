import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '.ngrok-free.app', // Allows all ngrok free tier domains
      '.ngrok.io' // Also allows paid ngrok domains if needed
    ]
  }
})

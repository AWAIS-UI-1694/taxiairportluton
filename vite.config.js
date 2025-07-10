import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://stationcarslondon.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/api2': {
        target: 'https://booking.londontaxi247.co.uk',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, ''),
      },
      '/api3': {
        target: 'https://booking.taxisnetwork.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api3/, ''),
        secure: false, // Allow non-HTTPS connections if needed
      },
    },}
})

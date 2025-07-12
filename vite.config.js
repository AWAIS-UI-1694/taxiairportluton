import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss()
  ],
   build: {
    chunkSizeWarningLimit: 500, // Optional: Increase limit if needed
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate large vendor packages
          react: ['react', 'react-dom'],
          icons: ['react-icons'],
          libs: ['axios', 'react-select', 'react-helmet-async'], // add more as needed
        }
      }
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split the vendor libs out of the single 671KB entry chunk. This does
        // not shrink the total download much, but it means a change to app code
        // no longer invalidates React/Chakra in the browser cache, and the
        // chunks download in parallel on a cold visit.
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          chakra: ['@chakra-ui/react', '@emotion/react'],
          motion: ['framer-motion'],
          swiper: ['swiper'],
        },
      },
    },
  },
})

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { splitVendorChunkPlugin } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    target: 'es2015', // Support for more browsers
    cssCodeSplit: true,
    reportCompressedSize: false, // Faster builds
    chunkSizeWarningLimit: 1000, // Higher limit for warning about large chunks
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/vue') || 
              id.includes('node_modules/vue-router') || 
              id.includes('node_modules/pinia')) {
            return 'vue-core';
          }
          if (id.includes('/components/')) {
            return 'components';
          }
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          return null;
        }
      }
    }
  },
  server: {
    open: true,
    port: 3000,
    strictPort: false,
    cors: true,
  },
  preview: {
    port: 4173,
    open: true
  }
})

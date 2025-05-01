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
        manualChunks: {
          'vue-core': ['vue', 'vue-router', 'pinia'],
          'ui-components': ['./src/components'],
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

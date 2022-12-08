import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // REMOVE ME TO MAKE THINGS WORK
  resolve: {
    alias: {
      vue: '@vue/compat'
    }
  },
  plugins: [
    vue({
      // REMOVE ME TO MAKE THINGS WORK
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 3
          }
        }
      }
    })
  ]
})

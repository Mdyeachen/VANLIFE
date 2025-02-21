import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tainWindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tainWindcss()
  ],
  server : {
    host : "0.0.0.0",
    port : 8000,
    open : true
  },
  build : {
    sourcemap : true
  },
  css : {
    devSourcemap : true
  }
})

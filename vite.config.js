import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resuelve extensiones sin cambiar nombres
  },
  alias: {
    '@components': '/src/components'
  },
  esbuild: {
    
  }
})

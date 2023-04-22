import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import VitePluginGenerateComponentExports from './config/plugins/vite-plugin-generate-component-exports'

import { compression } from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    plugins: [react(), VitePluginGenerateComponentExports(), compression()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        assets: path.resolve(__dirname, 'src/assets'),
        components: path.resolve(__dirname, 'src/components'),
      },
      extensions: ['.js', '.ts', '.tsx', '.json'],
    },
    esbuild: {
      drop: ['console', 'debugger'],
    },
    build: {
      minify: true,
    },
  }
})

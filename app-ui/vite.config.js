import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8089/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    },
    resolve: {
        alias: {
            '@': path.resolve('./src') // @替代src
        }
    }
})

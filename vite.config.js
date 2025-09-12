import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    //解决本地开发请求后台跨域问题
    server: {
        proxy: {
            '/api': { // 匹配所有以 `/api` 开头的请求
                target: 'http://localhost:8080', // 后端地址
                changeOrigin: true, // 支持虚拟主机
                rewrite: (path) => path.replace(/^\/api/, '') // 重写路径（可选）
            }
        }
    },
})

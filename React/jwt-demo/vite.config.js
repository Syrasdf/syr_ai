import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock', // mock 文件夹路径
      localEnabled: true // 只在本地开发时启用
    })
  ]
})
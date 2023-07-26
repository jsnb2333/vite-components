// 库模式
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.js'),
      // 打包为umd和iife需要设置的字段，提供包名。
      name: '@jsnb2333/components',
      // 输出的库文件名
      fileName: 'components',
      formats: ['umd']
    },
    minify: true,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
    // 启动 vite build 命令时，可以监听src下的文件是否改变，改变了就自动打包。（vscode源代码管理可以会反应不及时，刷新一下即可）
    watch: {}
  }
})
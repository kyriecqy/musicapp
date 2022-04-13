import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})

module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: 'src/main.js',
      title: "网易云",

    }
  }
}
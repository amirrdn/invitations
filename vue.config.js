const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  "devServer": {
    "port": 8080,
    "proxy": {
      "/api": {
        "target": "http://procurement-backend.com",
        ws: false,
        "changeOrigin": true
      }
    }
  },
})

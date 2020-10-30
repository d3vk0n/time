module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3002',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
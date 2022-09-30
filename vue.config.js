module.exports = {
  devServer: {
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'http://192.168.0.81:8080',
        changeOrigin: true
      }
    }
  }
}

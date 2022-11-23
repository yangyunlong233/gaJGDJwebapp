module.exports = {
  publicPath: '/web/',
  outputDir: 'dist',
  assetsDir: 'assets',
  devServer: {
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'http://192.168.0.81:100',
        changeOrigin: true
      }
    }
  }
}

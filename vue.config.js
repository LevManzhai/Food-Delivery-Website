module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
    ? './'  // Относительные пути для GitHub Pages
    : '/',
  assetsDir: 'assets',
  outputDir: 'dist'
}

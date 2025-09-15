module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
    ? './'  // Relative paths for GitHub Pages
    : '/',
  assetsDir: 'assets',
  outputDir: 'dist'
}

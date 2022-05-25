module.exports = {
  devServer: {
      port: 8080,
      disableHostCheck: true,
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'   //任意
    : '/',
  outputDir: 'docs',
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      }
    }
  }
};


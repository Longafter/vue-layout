module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // sass 版本 9 中使用 additionalData; 版本 8 中使用 prependData
        prependData: `@import "~@/styles/variables.scss";`
      }
    }
  }
}
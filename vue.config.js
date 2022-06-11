// const publicPath = process.env.NODE_ENV === 'production' ? '/FRC7636/' : '/'


module.exports = {
  // publicPath,

  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
  },

  "transpileDependencies": [
    "vuetify"
  ],

  // pluginOptions: {
  //   prerenderSpa: {

  //     registry: undefined,
  //     renderRoutes: [
  //       '/', '/home', '/FIRST', '/Team 7636', '/Contact', '/Outreach',
  //       '/Leader', '/Mentor', '/news', '/past-seasons', '/2019DeepSpace',
  //       '/2020InfiniteRecharge', '/2021InfiniteRecharge', '/News', '/resource', '/sponsor'],
  //     useRenderEvent: true,
  //     headless: true,
  //     onlyProduction: true
  //   }
  // }

}

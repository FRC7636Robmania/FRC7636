const publicPath = process.env.NODE_ENV === 'production' ? '/FRC7636/' : '/'


module.exports = {
  publicPath,

  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    prerenderSpa: {

      registry: undefined,
      renderRoutes: [
        '/', '/home', '/FIRST', '/Team 7636', '/Contact', '/Outreach',
        '/Leader', '/Mentor', '/news', '/past-seasons', '/2019DeepSpace',
        '/2020InfiniteRecharge', '/2021InfiniteRecharge', '/News', '/resource', '/sponsor'],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }

}

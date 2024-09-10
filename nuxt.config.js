/*
 * @Author: uyinyan yinyan2323@qq.com
 * @Date: 2024-09-10 16:12:13
 * @LastEditors: uyinyan yinyan2323@qq.com
 * @LastEditTime: 2024-09-10 16:34:34
 * @FilePath: /umi/uuu/newNuxt/nuxt.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "umiNuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: 'swiper/css/swiper.css'
    },
    {
      src: 'aos/dist/aos.css'
    },
    {
      src: '~/style/main.scss'
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '/home/youmi/桌面/umi/uuu/newNuxt/common/plugins/swiper.js'
    },
    {
      src: '/home/youmi/桌面/umi/uuu/newNuxt/common/plugins/aos.js',
      mode: 'client'
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  styleResources: {
    scss: ['~/style/variable.scss', '~/style/mixin/index.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      pug: {
        // 你的 Pug 配置选项
        pretty: true, // 使 HTML 输出格式化
      },
      // ... 其他加载器配置
    },
  },

  router: {
    middleware: "auth",
  }
};

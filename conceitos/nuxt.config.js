export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',

  head: {
    title: 'projeto_curso_nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /* router: {
    //pode ser um array de middleware
    middleware: 'auth'
  }, */

  /*
  utilizado para passar informacoes globais
  publicRuntimeConfig: {
    youtube_api_key: process.env.YOUTUBE_API_KEY
  },

  privateRuntimeConfig: {
    facebook_api_key: process.env.FACEBOOK_API_KEY
  },*/


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    /* {
      src: '@/plugins/my-plugin',
      mode: 'server'
    }, */
    '@/plugins/my-plugin',
    '@/plugins/dayjs',
    '@/plugins/vtooltip',
    '@/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

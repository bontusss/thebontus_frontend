export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "The_Bontus",
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
    link: [
      {
        rel: "stylesheet",
        href: "/css/aos.css",
      },
      {
        rel: "stylesheet",
        href: "/css/owl.carousel.min.css",
      },
      {
        rel: "stylesheet",
        href: "/css/materialdesignicons.min.css",
      },
      {
        rel: "stylesheet",
        href: "/css/owl.theme.default.min.css",
      },
    ],
    script: [
      {
        src: "/js/vendor.bundle.base.js",
        body: true,
      },
      {
        src: "/js/owl.carousel.min.js",
        body: true,
      },
      {
        src: "/js/demo.js",
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  
  },

  // Axios module configuration
  axios: {
    baseURL: process.env.API_URL,
    progress: false,
  },

  // Loading
  loading: {
    color: "black",
    height: "5px",
    throttle: 10,
    continous: true,
  },
};

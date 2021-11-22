export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "The_Bontus - News from all sources",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Get news, sports, entertainment and business headlines from the world's media. Your one-stop-shop for news headlines.",
      },
      {
        name: "keywords",
        content:
          "news, sports, business, blogs, gists, bontus, africa news, Nigeria, Nigeria news, PDP, APC, Politics, Crypto news, Bitcoin news, Ethereum news, Africa, breaking news, headlines",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "1 days" },
      { name: "author", content: "Bontus Mayor" },
      { propery: "og:url", content: "https://thebontus.com" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "The_Bontus - News from all sources" },
      {
        propery: "og:description",
        content:
          "Get news, sports, entertainment and business headlines from the world's media. Your one-stop-shop for news headlines.",
      },
      { property: "og:image", content: "/favicon-32x32.ico" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.ico",
      },
      {
        rel: "apple-touch-icon",
        type: "image/png",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
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
  build: {},

  // Axios module configuration
  axios: {
    baseURL: process.env.API_URL,
    progress: false,
  },

  // Loading
  loading: "~/components/Loader.vue",
};

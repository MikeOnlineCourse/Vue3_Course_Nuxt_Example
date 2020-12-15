export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Nuxt-plugins-demo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/notifications.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/demo.js",
    "~/plugins/axios.js",
    "~/plugins/notification.js",
    "~/plugins/localStorage.js",
    "~/plugins/cookie.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios"],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};

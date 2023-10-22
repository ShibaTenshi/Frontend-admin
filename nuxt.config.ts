export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  devtools: { enabled: true },
  ui: {
    icons: 'all'
  },
  colorMode: {
    preference: 'light'
  },
  runtimeConfig: {
    public: {
      STORAGE_URL: process.env.STORAGE_URL,
      API_URL: process.env.API_URL
    },
  },
})

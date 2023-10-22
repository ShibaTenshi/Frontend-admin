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
      STORAGE_URL: process.env.NUXT_STORAGE_URL,
      API_URL: process.env.NUXT_API_URL
    },
  },
})

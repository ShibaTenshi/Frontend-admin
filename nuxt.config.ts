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
      STORAGE_URL: "https://content-shibaqueue.doksakura.com",
      API_URL: "https://api-shibaqueue.doksakura.com"
    },
  },
})

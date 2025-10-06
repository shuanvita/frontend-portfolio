// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  alias: {
    '@': '../src',
  },
  dir: {
    pages: './src/app/routes',
    layouts: './src/app/layouts',
  },
  future: {
    compatibilityVersion: 4,
  },
  components: {
    dirs: [
      {
        path: 'src/shared/ui',
        pattern: '**/*',
        prefix: 'ui',
      },
    ],
  },
  css: ['../src/app/fonts/fonts.css', '../src/app/styles/global.css'],
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
})

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/variables.css'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/ui',
      prefix: 'Ui',
      global: true
    },
    {
      path: '~/components/common',
      prefix: 'Common',
      global: true
    }
  ],

  typescript: {
    strict: true,
    typeCheck: false
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }
  }
})

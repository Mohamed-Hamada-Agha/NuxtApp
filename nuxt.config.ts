import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/i18n', '@primevue/nuxt-module'],
  primevue: {
        options: {
            ripple: true,
            inputVariant: 'filled',
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: 'system',
                    cssLayer: false
                },
             typescript: {
    shim: false, // مهم لتفعيل TypeScript بشكل صحيح
    strict: true
  },
  
  vite: {
    esbuild: {
      jsx: 'automatic', // لتفعيل JSX
    }
  }     
            }
        },
components: {
        include: '*',
    }
},
  css: ['@/assets/css/tailwind.css',
    'flag-icons/css/flag-icons.css',
    '/node_modules/primeicons/primeicons.css',
    "/assets/css/style.css",
  ],
  
});



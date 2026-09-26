import { defineNuxtConfig } from "nuxt/config";

// nuxt.config.ts
import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],


  // 1. Registramos el módulo PWA
  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/tailwindcss',
  ],

  // 2. Configuramos la PWA
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'SmartWater IoT Dashboard',
      short_name: 'SmartWater',
      description: 'Monitoreo de consumo y nivel de tinaco en tiempo real',
      theme_color: '#3b82f6', // El azul de nuestra marca
      background_color: '#f8fafc', // slate-50 de nuestro layout
      display: 'standalone', // Esto hace que se vea como app nativa (sin barra del navegador)
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: 'icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true, // ¡Clave! Esto te permite probar la PWA mientras usas `npm run dev`
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  }
})
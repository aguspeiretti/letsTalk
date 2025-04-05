import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "vamos a hablar",
        short_name: "Vamos a hablar",
        description: "Aplicación para el habla",
        theme_color: "#c7fe01",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/joystic.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/joystic.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      }
    })
  ]
})
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  base: "/Banners/",
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        protocol_handlers: [{ protocol: "mailto", url: "/newEmail?to=%s" }],
        display_override: ["window-controls-overlay"],
        name: "My banner",
        short_name: "MyLink's",
        start_url: "./index.html",
        display: "standalone",
        description:
          "A page to display banners",
        lang: "ES",
        dir: "auto",
        theme_color: "#c7c7c7",
        background_color: "#fff",
        orientation: "any",
        id: "blog.personalMB",
        iarc_rating_id: "e58c174a-81d2-5c3c-32cc-34b8de4a52e9",
        categories: ["blog", "news", "tech", "web", "design", "development"],
        icons: [
          {
            src: "https://i.imgur.com/1zoeuEA.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "https://i.imgur.com/1zoeuEA.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "https://i.imgur.com/wHwRYEI.png",
            sizes: "300x300",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "https://i.imgur.com/wHwRYEI.png",
            sizes: "300x300",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "https://i.imgur.com/K3Qs8Yb.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "https://i.imgur.com/K3Qs8Yb.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],

        scope: "/",
        screenshots: [
          {
            src: "https://i.imgur.com/r52id3o.png",
            sizes: "1920x1080",
            type: "image/png",
            description: "Home Screen",
          },
        ],
        shortcuts: [
          {
            name: "Home",
            url: "/",
            icons: [
              {
                src: "https://i.imgur.com/BsOeLgp.png",
                sizes: "96x96",
                type: "image/png",
                purpose: "any",
              },
            ],
          },
        ],
        related_applications: [
          {
            platform: "windows",
            url: "https://rcristianh.github.io/myBlog/",
            id: "blog.personalMB",
          },
          {
            platform: "windows",
            url: "https://rcristianh.github.io/api-rest-moviedb/",
          },
          {
            platform: "windows",
            url: "https://rcristianh.github.io/AccountAssistant/",
          },
        ],
        version: "1.0.0",
      },
    }),
  ],
});
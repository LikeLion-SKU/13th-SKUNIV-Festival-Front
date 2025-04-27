import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    svgr(),
    VitePWA({
      registerType: "autoUpdate", // 업데이트 자동 적용
      injectRegister: "auto", // 서비스워커 자동 등록
      includeAssets: ["favicon.ico"], // 기타 정적 자산
      manifest: {
        name: "sku",
        short_name: "sku",
        description: "축제 페이지",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        navigateFallback: "/index.html", // SPA fallback
        navigateFallbackDenylist: [/^\/api/], // API는 제외
      },
      devOptions: {
        enabled: true, // 개발 중에도 SW 작동
      },
    }),
  ],
});

// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://doyoungp00.github.io",
  integrations: [mdx(), sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Pretendard",
      cssVariable: "--font-pretendard",
      fallbacks: ["sans-serif"],
      display: "swap",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PretendardVariable.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "D2Coding",
      cssVariable: "--font-d2coding",
      fallbacks: ["monospace"],
      display: "swap",
      options: {
        variants: [
          {
            src: [
              "./src/assets/fonts/D2Coding-Ver1.3.3-20260725-ligature.woff2",
            ],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
});

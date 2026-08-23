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
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/PretendardVariable.woff2"],
          },
        ],
      },
    },
  ],
});

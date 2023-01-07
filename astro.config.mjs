import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import image from "@astrojs/image"

import react from "@astrojs/react"
import rehypeWrapAll from "rehype-wrap-all"

// https://astro.build/config
export default defineConfig({
  site: "https://www.schwimmverein-haren.de",
  integrations: [
    tailwind(),
    sitemap(),
    compress(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    react(),
  ],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [rehypeWrapAll, { selector: "table", wrapper: "div.responsive-table" }],
    ],
  },
})

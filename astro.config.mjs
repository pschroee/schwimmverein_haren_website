import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import image from "@astrojs/image"

import react from "@astrojs/react"
import testPlugin from "./src/plugins/rehypeTest"
import rehypeWrapAll from "rehype-wrap-all"

// https://astro.build/config
export default defineConfig({
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

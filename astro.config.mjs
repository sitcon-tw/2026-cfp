// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

export default defineConfig({
  site: "https://sitcon.org",
  base: "/2026/cfp/",
  output: "static",
  trailingSlash: "always",
  integrations: [icon()],
  build: {
    format: "file"
  }
});

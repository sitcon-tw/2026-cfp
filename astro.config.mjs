// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://sitcon.org",
	base: "/2026/cfp/",
	output: "static",
	trailingSlash: "always",
	integrations: [
		sitemap({
			filter: page => !page.includes("/private/"),
			changefreq: "weekly",
			priority: 0.8,
			lastmod: new Date()
		})
	],
	build: {
		format: "directory"
	}
});

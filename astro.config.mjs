// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://sitcon.org",
	base: "/2026/cfp/",
	output: "static",
	trailingSlash: "always",
	integrations: [],
	build: {
		format: "file"
	}
});

import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ["features/**/*.ts"],
		globals: true,
		forceRerunTriggers: ["**/features/**/*.feature"],
		globalSetup: ["./viteInstance.ts"],
		setupFiles: ["./resetDB.ts"],
	},
});

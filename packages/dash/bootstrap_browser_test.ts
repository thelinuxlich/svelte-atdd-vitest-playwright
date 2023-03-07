import { chromium, expect } from "@playwright/test";
import { loadFeature } from "jest-cucumber/src/index";
import { createDefineFeature } from "jest-cucumber/src/feature-definition-creation";
import { test, describe, afterAll, beforeAll, beforeEach, afterEach } from "vitest";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

async function bootstrap(file: string) {
	const defineFeature = createDefineFeature({ test, describe });
	const feature = loadFeature(__dirname + file);
	let browser = await chromium.launch();
	let context = await browser!.newContext();
	let page = await context.newPage();
	beforeEach(async () => {
		context = await browser!.newContext();
		page = await context.newPage();
	});

	afterAll(() => {
		browser!.close();
	});
	return {
		expect,
		defineFeature,
		feature,
		browser,
		page,
		context,
		beforeAll,
		afterAll,
		beforeEach,
		afterEach,
	};
}

export { bootstrap };

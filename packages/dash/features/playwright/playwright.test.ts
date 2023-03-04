import { chromium, Browser, Page, expect } from "@playwright/test";
import { loadFeature } from "jest-cucumber/src/index";
import { createDefineFeature } from "jest-cucumber/src/feature-definition-creation";
import { test, describe } from "vitest";
const defineFeature = createDefineFeature({ test, describe });
const feature = loadFeature("./main.feature", { loadRelativePath: true });
let browser: Browser;
let page: Page;

defineFeature(feature, (test) => {
	test("Entering the Main Page", ({ given, when, then }) => {
		given("I launched my browser", async () => {
			browser = await chromium.launch();
			page = await browser.newPage();
		});

		when("I navigate to the main page", async () => {
			await page.goto("http://localhost:4444");
		});

		then("I should see the main page", async () => {
			await expect(page.getByRole("heading", { name: "Welcome to SvelteKit" })).toBeVisible();
		});
	});
});

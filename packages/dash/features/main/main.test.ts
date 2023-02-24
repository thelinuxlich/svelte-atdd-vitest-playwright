import { chromium, Browser, Page, expect } from "@playwright/test";
import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("./main.feature", { loadRelativePath: true });
let browser: Browser;
let page: Page;

defineFeature(feature, (test) => {
	test("Entering the Main Page", ({ given: Given, when: When, then: Then }) => {
		Given("I launched my browser", async () => {
			browser = await chromium.launch();
			page = await browser.newPage();
		});

		When("I navigate to the main page", async () => {
			await page.goto("http://localhost:4444");
		});

		Then("I should see the main page", async () => {
			await expect(page.getByRole("heading", { name: "Welcome to SvelteKit" })).toBeVisible();
		});
	});
});

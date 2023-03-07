import { bootstrap } from "../../bootstrap_browser_test";
let { page, expect, browser, defineFeature, feature } = await bootstrap("features/playwright/playwright.feature");
defineFeature(feature, (test) => {
	test("Entering the Main Page", ({ given, when, then }) => {
		given("I launched my browser", async () => {
			expect(browser).toBeTruthy();
			expect(page).toBeTruthy();
		});

		when("I navigate to the main page", async () => {
			await page.goto("http://localhost:4444");
		});

		then("I should see the main page", async () => {
			await expect(page.getByRole("heading", { name: "Welcome to SvelteKit" })).toBeVisible();
		});
	});
});

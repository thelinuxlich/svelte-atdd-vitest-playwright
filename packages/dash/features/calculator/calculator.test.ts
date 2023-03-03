import { loadFeature } from "jest-cucumber/src/index";
import { createDefineFeature } from "jest-cucumber/src/feature-definition-creation";
import { expect, test, describe } from "vitest";
const defineFeature = createDefineFeature({ test, describe });
const feature = loadFeature("./calculator.feature", { loadRelativePath: true });

defineFeature(feature, (test) => {
	let n1 = 0;
	let n2 = 0;
	let total = 0;
	test("Adding two numbers together", ({ given: Given, when: When, then: Then }) => {
		Given(/I have entered (.*) into the calculator/, (qty) => {
			n1 = +qty;
		});

		Given(/^I have entered (.*) into the calculator$/, (qty) => {
			n2 = +qty;
		});

		When("I press add", () => {
			total = n1 + n2;
		});

		Then(/^the result should be (.*) on the screen$/, (_total) => {
			expect(total).toBe(+_total);
		});
	});
});

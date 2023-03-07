import { bootstrap } from "../../bootstrap_test";
let { expect, defineFeature, feature } = await bootstrap("features/calculator/calculator.feature");
defineFeature(feature, (test) => {
	let n1 = 0;
	let n2 = 0;
	let total = 0;
	test("Adding two numbers together", ({ given, when, then }) => {
		given(/I have entered ([0-9]+) into the calculator/, (qty) => {
			n1 = +qty;
		});

		given(/^I have entered ([0-9]+) secondly into the calculator$/, (qty) => {
			n2 = +qty;
		});

		when("I press add", () => {
			total = n1 + n2;
		});

		then(/^the result should be (.*) on the screen$/, (_total) => {
			expect(total).toBe(+_total);
		});
	});
});

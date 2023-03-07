import { loadFeature } from "jest-cucumber/src/index";
import { createDefineFeature } from "jest-cucumber/src/feature-definition-creation";
import { expect, test, describe, afterAll, beforeAll, beforeEach, afterEach } from "vitest";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

async function bootstrap(file: string) {
	const defineFeature = createDefineFeature({ test, describe });
	const feature = loadFeature(__dirname + file);
	return {
		expect,
		defineFeature,
		feature,
		beforeAll,
		afterAll,
		beforeEach,
		afterEach,
	};
}

export { bootstrap };

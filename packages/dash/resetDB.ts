import { execSync } from "child_process";
import { beforeAll } from "vitest";

beforeAll(() => {
	const resetDb = execSync("pnpm -w run reset:testdb");
	console.log(resetDb.toString());
});

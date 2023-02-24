import { preview } from "vite";
import { execSync } from "child_process";
export async function setup() {
	const server = await preview({ preview: { port: 4444 } });
	const resetDb = execSync("pnpm -w run reset:testdb");
	console.log(resetDb.toString());
	return async () => {
		await new Promise<void>((resolve, reject) => {
			server.httpServer.close((error) => (error ? reject(error) : resolve()));
		});
	};
}

import { preview } from "vite";
export async function setup() {
	const server = await preview({ preview: { port: 4444 } });
	return async () => {
		await new Promise<void>((resolve, reject) => {
			server.httpServer.close((error) => (error ? reject(error) : resolve()));
		});
	};
}

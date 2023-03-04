# svelte-atdd-vitest-playwright
A template for Acceptance-Test-Driven Development with Sveltekit (opinionated, skip/remove whatever you don't like).

## Instructions

- You *must* be using Linux or WSL2
- Install PNPM: `wget -qO- https://get.pnpm.io/install.sh | sh -`
- Install Docker and Docker Compose
- Install VSCode
- Install VSCode extensions: Cucumber Gherkin (Full Support), Jest-cucumber code generator, Rome, Svelte for VS Code and Svelte Intellisense
- Go to VSCode settings, type "Formatter" in the search input and change the Default Formatter to Rome
- Restart VSCode
- Run `pnpm i` on the project root to install all dependencies
- Run Postgres locally using Docker Compose: `docker-compose up -d`
- Install globally graphile-migrate: `pnpm add -g graphile-migrate`
- Update the newly created database to the most recent state: `pnpm -w run reset:testdb`
- Run `pnpm run -r build` to build this SvelteKit sample
- Run the test suite with `pnpm run test`, you will see the reset DB routine + Vitest + jest-cucumber + Playwright

## Notes

- Features are in `packages/dash/features`
- There is a simple DB schema in `migrations/initial_schema.sql`
- You can generate the steps code from the feature by selecting the feature text, right-click and choose "Generate code from feature", very useful!
- Look at .vscode/settings.json for some useful VSCode settings
